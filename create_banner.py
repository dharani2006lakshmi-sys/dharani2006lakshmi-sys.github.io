import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Dimensions for LinkedIn Banner
W, H = 1584, 396

# Base image with dark gradient
img = Image.new("RGBA", (W, H), (7, 9, 19, 255))
draw = ImageDraw.Draw(img)

# Draw horizontal and vertical tech grid lines
for x in range(0, W, 44):
    alpha = 18 if x % 132 == 0 else 8
    draw.line([(x, 0), (x, H)], fill=(255, 255, 255, alpha), width=1)

for y in range(0, H, 44):
    alpha = 18 if y % 132 == 0 else 8
    draw.line([(0, y), (W, y)], fill=(255, 255, 255, alpha), width=1)

# Create glowing light orbs on an overlay
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)

def draw_radial_glow(draw_obj, center, radius, color):
    cx, cy = center
    for r in range(radius, 0, -6):
        pct = (radius - r) / radius
        alpha = int(color[3] * pct * pct)
        draw_obj.ellipse(
            [(cx - r, cy - r), (cx + r, cy + r)],
            fill=(color[0], color[1], color[2], alpha)
        )

# Neon glow centers
draw_radial_glow(glow_draw, (220, 60), 220, (99, 102, 241, 60))      # Indigo
draw_radial_glow(glow_draw, (1400, 320), 280, (6, 182, 212, 70))     # Cyan
draw_radial_glow(glow_draw, (950, 180), 200, (168, 85, 247, 45))     # Purple

# Blur the glows for smooth light diffusion
glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(35))
img = Image.alpha_composite(img, glow_layer)
draw = ImageDraw.Draw(img)

# Cyber circuit line accents
circuit_y = 48
draw.line([(400, circuit_y), (850, circuit_y)], fill=(99, 102, 241, 140), width=2)
draw.ellipse([(848, circuit_y - 3), (854, circuit_y + 3)], fill=(99, 102, 241, 240))

draw.line([(950, H - 48), (1450, H - 48)], fill=(6, 182, 212, 140), width=2)
draw.ellipse([(946, H - 48 - 3), (952, H - 48 + 3)], fill=(6, 182, 212, 240))

# Fonts
try:
    font_title = ImageFont.truetype("arialbd.ttf", 46)
    font_sub = ImageFont.truetype("arial.ttf", 20)
    font_badge = ImageFont.truetype("arialbd.ttf", 14)
    font_metrics = ImageFont.truetype("arialbd.ttf", 22)
    font_label = ImageFont.truetype("arial.ttf", 12)
    font_links = ImageFont.truetype("arialbd.ttf", 15)
except Exception:
    font_title = font_sub = font_badge = font_metrics = font_label = font_links = ImageFont.load_default()

# Safe offset: Left 400px reserved for circular profile picture
content_x = 420

# 1. Status Pill
pill_w, pill_h = 320, 32
pill_x, pill_y = content_x, 60
draw.rounded_rectangle(
    [(pill_x, pill_y), (pill_x + pill_w, pill_y + pill_h)],
    radius=16,
    fill=(99, 102, 241, 35),
    outline=(99, 102, 241, 90),
    width=1
)
# Green pulse dot
draw.ellipse([(pill_x + 16, pill_y + 11), (pill_x + 26, pill_y + 21)], fill=(34, 197, 94, 255))
draw.text((pill_x + 36, pill_y + 7), "OPEN FOR FREELANCE & DEV ROLES", fill=(165, 180, 252, 255), font=font_badge)

# 2. Main Title (Dharanidharan A)
draw.text((content_x, 106), "Dharanidharan A", fill=(255, 255, 255, 255), font=font_title)

# 3. Subtitle / Specialization
draw.text(
    (content_x, 166),
    "Freelance Web Developer  •  3rd-Year ECE Undergrad",
    fill=(56, 189, 248, 255),
    font=font_sub
)

# 4. Tech Stack Pills
tech_list = [
    ("React.js", (99, 102, 241)),
    ("Next.js", (255, 255, 255)),
    ("Tailwind CSS", (6, 182, 212)),
    ("Supabase", (52, 211, 153)),
    ("Firebase", (245, 158, 11)),
    ("Full-Stack Web Apps", (168, 85, 247))
]

tech_x = content_x
tech_y = 212
for tag, tag_color in tech_list:
    bbox = font_badge.getbbox(tag)
    tw = bbox[2] - bbox[0]
    badge_w = tw + 22
    badge_h = 28
    draw.rounded_rectangle(
        [(tech_x, tech_y), (tech_x + badge_w, tech_y + badge_h)],
        radius=8,
        fill=(30, 41, 59, 180),
        outline=(tag_color[0], tag_color[1], tag_color[2], 120),
        width=1
    )
    draw.text((tech_x + 11, tech_y + 6), tag, fill=(tag_color[0], tag_color[1], tag_color[2], 255), font=font_badge)
    tech_x += badge_w + 10

# 5. Right-side Glass Card
card_x, card_y = 1120, 60
card_w, card_h = 410, 276
draw.rounded_rectangle(
    [(card_x, card_y), (card_x + card_w, card_y + card_h)],
    radius=20,
    fill=(15, 23, 42, 210),
    outline=(255, 255, 255, 30),
    width=1
)

# Metric stats inside card
metrics = [
    ("12+", "LIVE PROJECTS", (96, 165, 250)),
    ("18+", "GITHUB REPOS", (34, 211, 238)),
    ("100%", "ON-TIME CODE", (74, 222, 128))
]

col_w = card_w // 3
for i, (val, lbl, clr) in enumerate(metrics):
    mx = card_x + i * col_w + col_w // 2
    vbox = font_metrics.getbbox(val)
    vw = vbox[2] - vbox[0]
    draw.text((mx - vw // 2, card_y + 24), val, fill=clr, font=font_metrics)

    lbox = font_label.getbbox(lbl)
    lw = lbox[2] - lbox[0]
    draw.text((mx - lw // 2, card_y + 56), lbl, fill=(148, 163, 184, 255), font=font_label)

# Divider line
draw.line([(card_x + 20, card_y + 92), (card_x + card_w - 20, card_y + 92)], fill=(255, 255, 255, 20), width=1)

# Contact & Link rows
draw.text((card_x + 24, card_y + 118), "PORTFOLIO:", fill=(148, 163, 184, 255), font=font_label)
draw.text((card_x + 24, card_y + 138), "dharanidharan-dev.vercel.app", fill=(255, 255, 255, 255), font=font_links)

draw.text((card_x + 24, card_y + 184), "DIRECT EMAIL:", fill=(148, 163, 184, 255), font=font_label)
draw.text((card_x + 24, card_y + 204), "dharani2006lakshmi@gmail.com", fill=(203, 213, 225, 255), font=font_links)

# Footer bar in left content
draw.text(
    (content_x, 280),
    "12+ Production Deployments  •  High-Performance Clean Architecture",
    fill=(148, 163, 184, 230),
    font=font_sub
)

# Save final banner
output_path = r"D:\portfolio\linkedin-banner.png"
img.save(output_path, "PNG", quality=95)
print(f"Banner saved successfully to {output_path}")
