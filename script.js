// Dharanidharan A - Portfolio Interactive Logic

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  renderSkills();
  renderServices();
  renderProjects("all");
  initFilterTabs();
  initSearch();
  initMobileMenu();
  initScrollSpy();
  initSpotlightEffect();
  initContactForm();
  initCopyEmail();
});

/* ----------------------------------------------------
   1. Typewriter Animation for Hero Section
---------------------------------------------------- */
function initTypewriter() {
  const words = [
    "Freelance Web Developer",
    "3rd-Year ECE Undergrad",
    "React & Next.js Specialist",
    "Full-Stack Web Architect",
    "Turning Client Visions Into Code"
  ];
  const targetElement = document.getElementById("typewriter-text");
  if (!targetElement) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const erasingSpeed = 45;
  const pauseEnd = 1600;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      targetElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      targetElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? erasingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ----------------------------------------------------
   2. Render Skills & Proficiency
---------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container || !profileData.skills) return;

  container.innerHTML = profileData.skills.map((categoryGroup) => `
    <div class="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          <i class="fa-solid fa-code-branch text-lg"></i>
        </div>
        <h3 class="text-xl font-bold text-white tracking-wide">${categoryGroup.category}</h3>
      </div>
      <div class="space-y-4">
        ${categoryGroup.items.map((skill) => `
          <div>
            <div class="flex justify-between items-center mb-1.5 text-sm">
              <span class="font-medium text-slate-200 flex items-center gap-2">
                <i class="${skill.icon} text-indigo-400 w-4 text-center"></i>
                ${skill.name}
              </span>
              <span class="font-mono text-xs text-indigo-300">${skill.level}%</span>
            </div>
            <div class="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-white/5">
              <div 
                class="bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 h-full rounded-full transition-all duration-1000 ease-out" 
                style="width: ${skill.level}%"
              ></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ----------------------------------------------------
   3. Render Freelance Services
---------------------------------------------------- */
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container || !profileData.services) return;

  container.innerHTML = profileData.services.map((service, idx) => `
    <div class="spotlight-card glass-panel p-7 sm:p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between">
      <div class="relative z-10">
        <div class="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
          <i class="fa-solid ${service.icon} text-2xl"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          ${service.title}
        </h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          ${service.desc}
        </p>
      </div>
      <div class="relative z-10 pt-4 border-t border-white/5 flex flex-wrap gap-2">
        ${service.skills.map(s => `
          <span class="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-300 border border-white/5 font-mono">
            ${s}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ----------------------------------------------------
   4. Render Projects Showcase with Filters
---------------------------------------------------- */
let currentCategory = "all";
let currentSearchTerm = "";

function renderProjects(category = "all", searchTerm = "") {
  const container = document.getElementById("projects-container");
  if (!container) return;

  let filtered = projectsData;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchTerm && searchTerm.trim() !== "") {
    const query = searchTerm.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tech.some(t => t.toLowerCase().includes(query))
    );
  }

  const countBadge = document.getElementById("project-count-badge");
  if (countBadge) {
    countBadge.textContent = `${filtered.length} Projects`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center glass-panel rounded-3xl p-8">
        <div class="w-16 h-16 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-400 mx-auto mb-4">
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
        </div>
        <h4 class="text-lg font-bold text-white mb-2">No matching projects found</h4>
        <p class="text-sm text-slate-400">Try adjusting your search query or switching category filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((project) => `
    <div class="spotlight-card card-shine glass-panel rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-indigo-500/40 transition-all duration-300">
      
      <!-- Card Header / Banner Preview -->
      <div class="p-6 pb-4">
        <div class="flex items-start justify-between gap-3 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-tr ${project.accent} flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <i class="fa-solid ${project.icon} text-lg"></i>
            </div>
            <div>
              <span class="inline-block text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor}">
                ${project.categoryLabel}
              </span>
            </div>
          </div>
          ${project.stars > 0 ? `
            <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-white/5 text-amber-300 text-xs font-mono" title="GitHub Stars">
              <i class="fa-solid fa-star text-[10px]"></i>
              <span>${project.stars}</span>
            </div>
          ` : ''}
        </div>

        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
          ${project.title}
        </h3>
        
        <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
          ${project.description}
        </p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 mb-2">
          ${project.tech.map(t => `
            <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
              ${t}
            </span>
          `).join("")}
        </div>
      </div>

      <!-- Action Buttons (Live Demo & GitHub Repo) -->
      <div class="px-6 py-4 bg-slate-900/50 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
        ${project.liveDemo ? `
          <a 
            href="${project.liveDemo}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all duration-200"
          >
            <span>Live Demo</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        ` : `
          <span class="flex-1 text-center py-2 text-xs text-slate-500 font-mono">Demo Local</span>
        `}
        <a 
          href="${project.githubUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 transition-all duration-200"
          title="View Source on GitHub"
        >
          <i class="fa-brands fa-github text-sm"></i>
          <span>Source</span>
        </a>
      </div>

    </div>
  `).join("");
}

/* ----------------------------------------------------
   5. Filter Buttons Interactivity
---------------------------------------------------- */
function initFilterTabs() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProjects(currentCategory, currentSearchTerm);
    });
  });
}

/* ----------------------------------------------------
   6. Search Input Interactivity
---------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById("project-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    renderProjects(currentCategory, currentSearchTerm);
  });
}

/* ----------------------------------------------------
   7. Mobile Menu Drawer
---------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const closeBtns = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  closeBtns.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

/* ----------------------------------------------------
   8. Navbar Scroll Spy
---------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("text-indigo-400", "font-semibold");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("text-indigo-400", "font-semibold");
          }
        });
      }
    });
  });
}

/* ----------------------------------------------------
   9. Spotlight Mouse Following Radial Effect
---------------------------------------------------- */
function initSpotlightEffect() {
  const container = document.body;
  container.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".spotlight-card");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* ----------------------------------------------------
   10. One-Click Copy Email with Toast
---------------------------------------------------- */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll(".btn-copy-email");
  const toast = document.getElementById("copy-toast");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const email = profileData.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard!");
      }).catch(() => {
        showToast("Email: " + email);
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("copy-toast");
  if (!toast) return;

  const textEl = toast.querySelector(".toast-text");
  if (textEl) textEl.textContent = message;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

/* ----------------------------------------------------
   11. Interactive Contact Form
---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${service} by ${name}`);
    const body = encodeURIComponent(
      `Hello Dharanidharan,\n\nMy name is ${name} (${email}).\nI am reaching out regarding: ${service}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you!`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    showToast("Launching email client with pre-filled message!");
    form.reset();
  });
}
