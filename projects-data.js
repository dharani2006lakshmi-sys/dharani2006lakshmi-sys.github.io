// Dharanidharan A - Portfolio Project Showcase Data
const projectsData = [
  {
    id: "coachhub",
    title: "CoachHub - Sports Team Management",
    shortDesc: "End-to-end management portal for sports teams, coaches, and athletes with real-time updates.",
    description: "A full-featured sports management web portal designed for coaches, athletes, and team managers. Enables team roster monitoring, practice & match scheduling, player metrics analysis, and attendance tracking with real-time Firebase cloud sync.",
    category: "webapps",
    categoryLabel: "Full-Stack Web App",
    tech: ["JavaScript", "Firebase", "Realtime DB", "Responsive UI"],
    stars: 3,
    featured: true,
    accent: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "fa-trophy",
    liveDemo: "https://coachhubdemo.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/Sports-Team-Management-System"
  },
  {
    id: "dropvault",
    title: "DropVault - Secure File & Text Sharing",
    shortDesc: "Sleek glassmorphic application for instant, encrypted temporary text and file sharing.",
    description: "DropVault provides high-speed, frictionless temporary storage and sharing for code snippets, private notes, and files. Built with a futuristic glassmorphic aesthetic and powered by Supabase for real-time security.",
    category: "webapps",
    categoryLabel: "Security & Cloud Vault",
    tech: ["HTML5", "JavaScript", "Supabase", "Glassmorphism"],
    stars: 1,
    featured: true,
    accent: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: "fa-shield-halved",
    liveDemo: "https://ondv.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/dropvalut"
  },
  {
    id: "gym-platform",
    title: "GymPlatform - Fitness Web App",
    shortDesc: "High-conversion, modern fitness club platform with class schedules and membership plans.",
    description: "A production-ready fitness and health club website built with Next.js and Tailwind CSS. Features dynamic trainer rosters, interactive tier calculators, responsive class schedules, and high-impact visual design.",
    category: "client",
    categoryLabel: "Commercial / Next.js",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    stars: 1,
    featured: true,
    accent: "from-orange-500 to-amber-600",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    icon: "fa-dumbbell",
    liveDemo: "https://gym-platform-bice.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/gym-platform"
  },
  {
    id: "blood-bank",
    title: "BloodLink - Blood Bank Management",
    shortDesc: "Role-based blood donation, donor records, and inventory management system.",
    description: "Engineered to streamline critical donor connections. Features role-based access for hospital administrators and donors, blood group inventory surveillance, urgent request dispatch, and donor reward point tracking.",
    category: "webapps",
    categoryLabel: "Healthcare System",
    tech: ["JavaScript", "Firebase", "Role-based Auth", "Vercel"],
    stars: 2,
    featured: true,
    accent: "from-rose-500 to-red-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    icon: "fa-heart-pulse",
    liveDemo: "https://boodlinkdemo.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/blood-bank-management"
  },
  {
    id: "ihatepdf",
    title: "iHatePDF - Client-Side PDF Tools",
    shortDesc: "Blazing fast, privacy-first PDF utility suite executing 100% in-browser.",
    description: "A lightning-fast document utility that eliminates the need to upload confidential documents to untrusted cloud servers. Performs merging, splitting, converting, and page rearrangement entirely on the client side.",
    category: "tools",
    categoryLabel: "Utility Suite",
    tech: ["React", "JavaScript", "Client-Side Engine", "Tailwind"],
    stars: 2,
    featured: true,
    accent: "from-purple-500 to-indigo-600",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "fa-file-pdf",
    liveDemo: "https://wehatepdf.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/ihatepdf"
  },
  {
    id: "photographer-portfolio",
    title: "AJ Photography Portfolio",
    shortDesc: "Editorial photography portfolio with masonry galleries and inquiry workflows.",
    description: "Crafted for visual artists and commercial photographers. Emphasizes visual storytelling with dark minimalist aesthetics, smooth masonry layouts, high-resolution image optimization, and customized client booking triggers.",
    category: "client",
    categoryLabel: "Client Showcase",
    tech: ["React", "Vite", "Tailwind CSS", "Responsive UI"],
    stars: 1,
    featured: true,
    accent: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: "fa-camera",
    liveDemo: "https://photographer-portfolio-gamma-five.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/photographer-portfolio"
  },
  {
    id: "minimail",
    title: "MiniMail - Mail Client Simulator",
    shortDesc: "Lightweight, interactive client-side email inbox with LocalStorage persistence.",
    description: "A responsive simulation of modern email applications (like Gmail) engineered in vanilla JavaScript. Features composer with attachments preview, inbox categorization, search filters, and persistent local storage caching.",
    category: "tools",
    categoryLabel: "Frontend Simulator",
    tech: ["Vanilla JS", "LocalStorage", "CSS3 Grid", "HTML5"],
    stars: 2,
    featured: false,
    accent: "from-sky-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    icon: "fa-envelope-open-text",
    liveDemo: "https://minigmaildemo.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/Mail-Client-Simulator"
  },
  {
    id: "sri-sujitha-dental",
    title: "Sri Sujitha Dental Clinic",
    shortDesc: "Commercial healthcare landing page with service catalogs and appointment flow.",
    description: "Custom freelance project for a dental healthcare clinic. Showcases doctor specializations, before/after dental treatment galleries, patient reviews, and streamlined appointment request scheduling.",
    category: "client",
    categoryLabel: "Commercial Landing Page",
    tech: ["React", "Vite", "Tailwind CSS", "Appointment UI"],
    stars: 1,
    featured: false,
    accent: "from-teal-500 to-cyan-600",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    icon: "fa-tooth",
    liveDemo: "https://sri-sujitha-dental-demo.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/sri-sujitha-dental"
  },
  {
    id: "renuga-construction",
    title: "Renuga Construction",
    shortDesc: "Professional contracting firm web presence showcasing completed infrastructure.",
    description: "A tailored commercial website for a regional civil engineering and building construction firm. Features project portfolio grids, structural blueprints, materials consultation, and client quote inquiries.",
    category: "client",
    categoryLabel: "Business Showcase",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    stars: 1,
    featured: false,
    accent: "from-amber-500 to-yellow-600",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: "fa-trowel-bricks",
    liveDemo: "https://renuga-construction.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/renuga-construction"
  },
  {
    id: "nutrinest",
    title: "NutriNest - Clean Living & Nutrition",
    shortDesc: "Clean, organic lifestyle landing page for diet consultation and healthy recipes.",
    description: "An engaging health and wellness landing site promoting balanced lifestyle habits, tailored nutrition plans, and organic meal deliveries with responsive layouts and fluid transitions.",
    category: "client",
    categoryLabel: "Wellness Landing Page",
    tech: ["HTML5", "CSS3", "JavaScript", "CSS Animation"],
    stars: 1,
    featured: false,
    accent: "from-green-500 to-emerald-600",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "fa-leaf",
    liveDemo: "https://nutrinest-demo.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/nutrinest-demo"
  },
  {
    id: "cgpa-calculator",
    title: "KRCT CGPA Marksheet Parser",
    shortDesc: "Smart educational utility parsing college marksheets to compute exact GPA/CGPA.",
    description: "Engineered specifically for engineering students to eliminate manual calculation errors. Automatically parses grade sheets, maps university credit systems, and computes semester GPA and cumulative CGPA instantly.",
    category: "tools",
    categoryLabel: "Student EdTech Tool",
    tech: ["HTML5", "JavaScript", "Regex Parser", "Student Tools"],
    stars: 2,
    featured: false,
    accent: "from-indigo-500 to-violet-600",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: "fa-graduation-cap",
    liveDemo: "https://cgpakrct.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/CGPA"
  },
  {
    id: "ev-car-booking",
    title: "EV Car Booking Platform",
    shortDesc: "Interactive electric vehicle rental platform with live availability and backend.",
    description: "A modern automotive fleet rental web application featuring electric car lineups, instant price estimation, dynamic vehicle specs, and backend booking transaction management.",
    category: "webapps",
    categoryLabel: "Automotive Platform",
    tech: ["JavaScript", "Python", "SQLite", "Firebase"],
    stars: 2,
    featured: false,
    accent: "from-blue-600 to-cyan-500",
    badgeColor: "bg-blue-600/10 text-blue-400 border-blue-600/20",
    icon: "fa-car",
    liveDemo: "https://carbookingdemo.vercel.app/",
    githubUrl: "https://github.com/dharani2006lakshmi-sys/Car-booking-"
  }
];

// Profile data
const profileData = {
  name: "Dharanidharan A",
  nickname: "Dharani",
  role: "Freelance Web Developer & 3rd-Year CS Student",
  location: "Erode, Tamil Nadu, India",
  email: "dharani2006lakshmi@gmail.com",
  github: "https://github.com/dharani2006lakshmi-sys",
  linkedin: "https://www.linkedin.com/in/dharanidharan-a-115659321",
  instagram: "https://www.instagram.com/dharanidharan_2006",
  avatarUrl: "https://avatars.githubusercontent.com/u/266924753?v=4",
  stats: {
    repos: 17,
    liveProjects: 12,
    happyClients: "100%",
    yearsExperience: "3+"
  },
  services: [
    {
      title: "Custom Web Development",
      icon: "fa-code",
      desc: "Architecting responsive, high-performance web applications using React, Next.js, and modern JavaScript with spotless code quality.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Commercial & Landing Pages",
      icon: "fa-laptop-code",
      desc: "Crafting modern landing pages for businesses, clinics, and creators that convert visitors into active clients with swift loading speeds.",
      skills: ["Conversion UI", "SEO Ready", "Mobile Responsive", "Speed Optimized"]
    },
    {
      title: "Full-Stack & Cloud Integrations",
      icon: "fa-server",
      desc: "Connecting resilient backends, real-time databases (Firebase, Supabase), and authentication pipelines to power dynamic user portals.",
      skills: ["Firebase", "Supabase", "Node.js", "REST APIs"]
    },
    {
      title: "UI/UX & Modern Redesigns",
      icon: "fa-wand-magic-sparkles",
      desc: "Transforming dated websites into modern glassmorphic, interactive, and aesthetic experiences with micro-animations and accessibility.",
      skills: ["Glassmorphism", "Micro-interactions", "Figma to Code", "Design Systems"]
    }
  ],
  skills: [
    {
      category: "Frontend Excellence",
      items: [
        { name: "JavaScript (ES6+)", level: 95, icon: "fa-brands fa-js" },
        { name: "React.js", level: 90, icon: "fa-brands fa-react" },
        { name: "Next.js", level: 85, icon: "fa-solid fa-layer-group" },
        { name: "Tailwind CSS", level: 95, icon: "fa-solid fa-wind" },
        { name: "TypeScript", level: 80, icon: "fa-solid fa-code" },
        { name: "HTML5 / CSS3", level: 98, icon: "fa-brands fa-html5" }
      ]
    },
    {
      category: "Backend & Cloud Databases",
      items: [
        { name: "Firebase (Auth / Firestore)", level: 90, icon: "fa-solid fa-fire" },
        { name: "Supabase (Realtime / DB)", level: 85, icon: "fa-solid fa-bolt" },
        { name: "Node.js", level: 80, icon: "fa-brands fa-node-js" },
        { name: "Python", level: 80, icon: "fa-brands fa-python" },
        { name: "SQLite / SQL", level: 78, icon: "fa-solid fa-database" },
        { name: "REST APIs", level: 88, icon: "fa-solid fa-network-wired" }
      ]
    },
    {
      category: "Tools & Deployment",
      items: [
        { name: "Git & GitHub", level: 92, icon: "fa-brands fa-github" },
        { name: "Vercel Deployment", level: 95, icon: "fa-solid fa-triangle-circle-square" },
        { name: "Vite Bundler", level: 90, icon: "fa-solid fa-bolt-lightning" },
        { name: "VS Code & Terminals", level: 95, icon: "fa-solid fa-terminal" },
        { name: "UI/UX & Responsive Design", level: 92, icon: "fa-solid fa-mobile-screen" }
      ]
    }
  ]
};
