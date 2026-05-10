// ─── Personal Info ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Lakshya Mittal",
  firstName: "Lakshya",
  lastName: "Mittal",
  role: "Full Stack Developer",
  tagline: "I build fast, scalable web applications — from pixel-perfect UIs to robust backend systems.",
  email: "lakshya@example.com",
  phone: "+91 98765 43210",
  location: "India",
  github: "https://github.com/lakshyamittal",
  linkedin: "https://linkedin.com/in/lakshyamittal",
  twitter: "https://twitter.com/lakshyamittal",
  resume: "/resume.pdf",
  available: true,
  avatarInitials: "LM",
  bio: [
    "I'm a Full Stack Developer who loves turning complex problems into clean, elegant solutions. I specialize in building end-to-end web applications with modern technologies across the entire stack.",
    "With hands-on experience in React, Next.js, Node.js, and databases like PostgreSQL and MongoDB, I bring both technical depth and a strong eye for user experience to every project I ship.",
    "I'm passionate about clean code, performance optimization, and building products that actually solve problems. I thrive in fast-moving environments and love collaborating with product and design teams.",
  ],
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Experience",   href: "#experience" },
  { label: "Contact",      href: "#contact" },
];

// ─── Tech Stack / Skills ──────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#2563EB",
    bg: "#EFF6FF",
    skills: [
      { name: "React.js",     level: 90, icon: "⚛️" },
      { name: "Next.js",      level: 88, icon: "▲" },
      { name: "TypeScript",   level: 82, icon: "🔷" },
      { name: "Tailwind CSS", level: 92, icon: "💨" },
      { name: "HTML / CSS",   level: 95, icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#0891B2",
    bg: "#ECFEFF",
    skills: [
      { name: "Node.js",      level: 85, icon: "🟢" },
      { name: "Express.js",   level: 84, icon: "🚀" },
      { name: "REST APIs",    level: 90, icon: "🔗" },
      { name: "GraphQL",      level: 72, icon: "🔺" },
      { name: "Python",       level: 70, icon: "🐍" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "#16A34A",
    bg: "#F0FDF4",
    skills: [
      { name: "PostgreSQL",   level: 82, icon: "🐘" },
      { name: "MongoDB",      level: 80, icon: "🍃" },
      { name: "MySQL",        level: 78, icon: "🐬" },
      { name: "Prisma ORM",   level: 75, icon: "◆" },
      { name: "Redis",        level: 65, icon: "🔴" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "#7C3AED",
    bg: "#F5F3FF",
    skills: [
      { name: "Git / GitHub", level: 90, icon: "🐙" },
      { name: "Docker",       level: 70, icon: "🐳" },
      { name: "Vercel / Netlify", level: 88, icon: "☁️" },
      { name: "Postman",      level: 85, icon: "📮" },
      { name: "Linux / CLI",  level: 75, icon: "🐧" },
    ],
  },
];

// ─── All Technologies (marquee strip) ─────────────────────────────────────────
export const ALL_TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "GraphQL", "Prisma",
  "Docker", "Redis", "Git", "Vercel", "Python", "REST APIs",
  "JWT", "Socket.io", "Stripe", "Cloudinary",
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "ShopSphere",
    subtitle: "E-Commerce Platform",
    description:
      "A fully featured e-commerce platform with product listings, cart management, Stripe payment integration, order tracking, and an admin dashboard for inventory management.",
    longDesc:
      "Built with Next.js App Router, PostgreSQL via Prisma ORM, and Stripe. Features server-side rendering for SEO, optimistic UI updates, role-based auth with NextAuth, and a fully responsive mobile-first design.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Prisma", "Tailwind"],
    badgeColor: "badge-blue",
    accentColor: "#2563EB",
    featured: true,
    github: "https://github.com",
    live: "https://example.com",
    status: "Live",
    stats: [
      { label: "Products", value: "1,200+" },
      { label: "Orders/day", value: "50+" },
      { label: "Lighthouse", value: "98" },
    ],
  },
  {
    id: 2,
    title: "DevCollab",
    subtitle: "Real-time Collaboration Tool",
    description:
      "A real-time collaborative workspace for developers — shared code editors, kanban boards, instant messaging, and team project management in one place.",
    longDesc:
      "Powered by Socket.io for real-time events, Monaco Editor for code, JWT auth, MongoDB for flexible data, and React Query for server state. Deployed on Railway with Redis for pub/sub.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "JWT"],
    badgeColor: "badge-cyan",
    accentColor: "#0891B2",
    featured: true,
    github: "https://github.com",
    live: "https://example.com",
    status: "Live",
    stats: [
      { label: "Active Users", value: "200+" },
      { label: "Real-time latency", value: "<50ms" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: 3,
    title: "TaskFlow",
    subtitle: "Project Management App",
    description:
      "A Jira-inspired project management tool with drag-and-drop kanban boards, sprint planning, burndown charts, time tracking, and team collaboration features.",
    longDesc:
      "Built with Next.js and React DnD for drag-and-drop, PostgreSQL with complex relational queries, REST APIs with Express, and Recharts for analytics dashboards.",
    tags: ["Next.js", "React DnD", "PostgreSQL", "Express", "Recharts"],
    badgeColor: "badge-violet",
    accentColor: "#7C3AED",
    featured: true,
    github: "https://github.com",
    live: "https://example.com",
    status: "In Progress",
    stats: [
      { label: "Tasks tracked", value: "5K+" },
      { label: "Teams", value: "30+" },
      { label: "Integrations", value: "8" },
    ],
  },
  {
    id: 4,
    title: "MediConnect",
    subtitle: "Healthcare Booking System",
    description:
      "Doctor appointment booking platform with real-time slot availability, video consultation via WebRTC, medical records management, and prescription tracking.",
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Twilio", "Node.js"],
    badgeColor: "badge-green",
    accentColor: "#16A34A",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
    status: "Live",
    stats: [],
  },
  {
    id: 5,
    title: "CryptoTrack",
    subtitle: "Crypto Portfolio Tracker",
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts, P&L analytics, historical charts, and multi-exchange support via REST and WebSocket APIs.",
    tags: ["React", "Node.js", "WebSocket", "Chart.js", "MongoDB"],
    badgeColor: "badge-orange",
    accentColor: "#EA580C",
    featured: false,
    github: "https://github.com",
    live: "",
    status: "Completed",
    stats: [],
  },
  {
    id: 6,
    title: "AuthKit",
    subtitle: "Auth Boilerplate Package",
    description:
      "An open-source npm package providing plug-and-play authentication for Node.js apps — JWT, OAuth (Google/GitHub), refresh tokens, and role-based access control.",
    tags: ["Node.js", "TypeScript", "JWT", "OAuth", "npm"],
    badgeColor: "badge-blue",
    accentColor: "#2563EB",
    featured: false,
    github: "https://github.com",
    live: "",
    status: "Open Source",
    stats: [],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "TechStartup Pvt. Ltd.",
    type: "Internship",
    period: "Jun 2024 – Dec 2024",
    location: "Remote",
    color: "#2563EB",
    description:
      "Worked on a SaaS product used by 5,000+ businesses. Built new features end-to-end, optimized database queries reducing load time by 40%, and migrated the frontend from CRA to Next.js.",
    achievements: [
      "Reduced API response time by 40% through query optimization and Redis caching",
      "Migrated frontend from Create React App to Next.js, improving Lighthouse score from 62 to 94",
      "Built a real-time notification system using Socket.io serving 500+ concurrent users",
      "Wrote 80+ unit and integration tests, achieving 85% code coverage",
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Socket.io"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    type: "Freelance",
    period: "Jan 2023 – May 2024",
    location: "Remote",
    color: "#0891B2",
    description:
      "Built and delivered 8+ web projects for clients across retail, education, and service industries — from design to deployment.",
    achievements: [
      "Delivered 8 client projects on time with 100% satisfaction rating",
      "Built a school management system used by 600+ students across 3 schools",
      "Created a restaurant ordering system with Razorpay integration generating ₹2L+ in transactions",
      "Established ongoing retainer relationships with 3 clients for maintenance & new features",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Razorpay"],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    type: "Open Source",
    period: "2022 – Present",
    location: "GitHub",
    color: "#7C3AED",
    description:
      "Regular contributor to open-source projects. Merged PRs in documentation, bug fixes, and feature additions across React ecosystem libraries.",
    achievements: [
      "10+ merged pull requests across popular repos",
      "Published AuthKit — an npm package with 200+ weekly downloads",
      "Active participant in Hacktoberfest 2022 and 2023",
    ],
    tech: ["React", "TypeScript", "Node.js", "Documentation"],
  },
];

// ─── What I Offer (Services) ──────────────────────────────────────────────────
export const SERVICES = [
  { icon: "⚛️", title: "Frontend Development",  desc: "Pixel-perfect, accessible UIs with React & Next.js. Fast, responsive, and SEO-ready." },
  { icon: "⚙️", title: "Backend & APIs",        desc: "Scalable REST & GraphQL APIs with Node.js, authentication, and database design." },
  { icon: "🗄️", title: "Database Design",       desc: "Schema design, query optimization, and ORM setup for PostgreSQL and MongoDB." },
  { icon: "☁️", title: "Deployment & DevOps",   desc: "CI/CD pipelines, Docker containers, and cloud deployment on Vercel, AWS, and Railway." },
  { icon: "🔒", title: "Auth & Security",        desc: "JWT, OAuth 2.0, role-based access control, and security best practices." },
  { icon: "📱", title: "Responsive Design",      desc: "Mobile-first design that works flawlessly across all screen sizes and devices." },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "15+", label: "Projects Built" },
  { value: "8+",  label: "Happy Clients" },
  { value: "2+",  label: "Years Coding" },
  { value: "10+", label: "Open Source PRs" },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Founder, EduSpark",
    avatar: "PS",
    color: "#2563EB",
    quote: "Lakshya built our entire school management system from scratch in 6 weeks. The code quality and attention to detail was exceptional. Highly recommend!",
  },
  {
    name: "Rohan Gupta",
    role: "CTO, RetailMax",
    avatar: "RG",
    color: "#0891B2",
    quote: "Incredibly fast and reliable developer. Delivered the e-commerce platform ahead of schedule with zero bugs on launch day. Will definitely work with again.",
  },
  {
    name: "Anjali Singh",
    role: "Product Manager, TechStartup",
    avatar: "AS",
    color: "#7C3AED",
    quote: "Lakshya's work on our API optimization saved us thousands in infrastructure costs. Reduced response times by 40%. A true full-stack expert.",
  },
];
