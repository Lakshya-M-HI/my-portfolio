// ─── Personal Info ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Lakshya Mittal",
  firstName: "Lakshya",
  lastName: "Mittal",
  role: "Full Stack Developer",
  tagline: "I build fast, scalable web applications — from pixel-perfect UIs to robust backend systems.",
  email: "lakshyamittal171@gmail.com",
  phone: "+91 9509693361",
  location: "Rajasthan, India",
  github: "https://github.com/lakshya-m-hi",
  linkedin: "https://www.linkedin.com/in/lakshya-mittal-b96511330",
  twitter: "https://x.com/Lakshya_M_HI",
  resume: "/LakshyaMittal_Resume.pdf",
  available: true,
  avatarInitials: "LM",
  bio: [
    "I'm a Full Stack Developer who loves turning complex problems into clean, elegant solutions. I specialize in building end-to-end web applications with modern technologies across the entire stack.",
    "With hands-on experience in React, Next.js, Node.js, and databases like MongoDB, I bring both technical depth and a strong eye for user experience to every project I ship.",
    "I'm passionate about clean code, performance optimization, and building products that actually solve problems. I thrive in fast-moving environments and love collaborating with product and design teams.",
  ],
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ─── Tech Stack / Skills ──────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#2563EB",
    bg: "#EFF6FF",
    skills: [
      { name: "Next.js", level: 95, icon: "▲" },
      { name: "React.js", level: 88, icon: "⚛️" },
      { name: "TypeScript", level: 82, icon: "🔷" },
      { name: "Tailwind CSS", level: 92, icon: "💨" },
      { name: "HTML / CSS", level: 95, icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#0891B2",
    bg: "#ECFEFF",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 84, icon: "🚀" },
      { name: "REST APIs", level: 90, icon: "🔗" },
      { name: "JWT", level: 85, icon: "🔑" },
      { name: "OAuth", level: 80, icon: "🔐" },
      { name: "Authorization", level: 80, icon: "🔐" },
      { name: "Socket.io", level: 80, icon: "🔌" },
      { name: "Learning WebSockets", level: 70, icon: "💬" },
      { name: "Learning Microservices", level: 70, icon: "🗄️" },
      { name: "Learning Payment Integration", level: 70, icon: "💰" },
      // { name: "GraphQL", level: 72, icon: "🔺" },
      // { name: "Python", level: 70, icon: "🐍" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "#16A34A",
    bg: "#F0FDF4",
    skills: [
      { name: "PostgreSQL", level: 82, icon: "🐘" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "MySQL", level: 78, icon: "🐬" },
      // { name: "Prisma ORM", level: 75, icon: "◆" },
      { name: "Redis", level: 65, icon: "🔴" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "#7C3AED",
    bg: "#F5F3FF",
    skills: [
      { name: "Git / GitHub", level: 90, icon: "🐙" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "Vercel / Netlify", level: 88, icon: "☁️" },
      { name: "Postman", level: 85, icon: "📮" },
      // { name: "Linux / CLI", level: 75, icon: "🐧" },
    ],
  },
];

// ─── All Technologies (marquee strip) ─────────────────────────────────────────
export const ALL_TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "Redis", "Git", "Vercel", "Netlify", "REST APIs",
  "JWT", "Socket.io", "Razorpay", "Stripe", "Cloudinary", "ImageKit"
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Ghoomosa",
    subtitle: "AI Trips Planning Platform",
    description:
      "A fully featured AI Trip Planning Platform with product listings, cart management, Stripe payment integration, order tracking, and an admin dashboard for inventory management.",
    longDesc:
      "A fully featured AI Trip Planning Platform with product listings, cart management, Stripe payment integration, order tracking, and an admin dashboard for inventory management.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "Authorization", "Gemini API", "Places API", "Geocoding", "Hotels API", "Weather API", "AI generated content"],
    badgeColor: "badge-blue",
    accentColor: "#2563EB",
    featured: true,
    github: "https://github.com/Lakshya-M-HI/Trip-Planner",
    live: "",
    status: "Completed",
    stats: [
      // { label: "Products", value: "1,200+" },
      // { label: "Orders/day", value: "50+" },
      // { label: "Lighthouse", value: "98" },
    ],
  },
  {
    id: 2,
    title: "FastGo",
    subtitle: "Ride Booking App",
    description:
      "A ride-booking platform enabling users to request rides, track drivers in real-time, and manage payments seamlessly.",
    longDesc:
      "A comprehensive ride-booking system built with Next.js, Node.js, and Socket.io for real-time location tracking. Features include user authentication, ride requests, GPS-based matching, in-app chat, payment integration, and an admin dashboard for fleet management.",
    tags: ["Next.js", "Node.js", "Socket.io", "MongoDB", "JWT", "REST APIs", "Authorization", "Token Generation System", "Uncrackable OTP generation system"],
    badgeColor: "badge-cyan",
    accentColor: "#0891B2",
    featured: true,
    github: "https://github.com/lakshya-m-hi/fastgo",
    live: "",
    status: "Completed",
    stats: [
      // { label: "Active Users", value: "200+" },
      // { label: "Real-time latency", value: "<50ms" },
      // { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: 3,
    title: "BitLinks",
    subtitle: "URL Shortener Platform",
    description:
      "A URL Shortener Platform that enables users to shorten long URLs into short URLs and track their usage.",
    longDesc:
      "A URL Shortener Platform that enables users to shorten long URLs into short URLs and track their usage.",
    tags: ["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB" ],
    badgeColor: "badge-violet",
    accentColor: "#7C3AED",
    featured: false,
    github: "https://github.com/Lakshya-M-HI/BitLinks",
    live: "",
    status: "Completed",
    stats: [],
  },
  {
    id: 4,
    title: "Password Manager",
    subtitle: "Password Manager App",
    description:
      "Password Manager App that enables users to store their passwords securely and access them whenever needed.",
    tags: ["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB"],
    badgeColor: "badge-green",
    accentColor: "#16A34A",
    featured: false,
    github: "https://github.com/Lakshya-M-HI/Password-Manager",
    live: "",
    status: "Completed",
    stats: [],
  },
  {
    id: 5,
    title: "Rest Countries API",
    subtitle: "Rest Countries API",
    description:
      "A simple website that enables users to fetch information about countries and their details.",
    tags: ["HTML", "CSS", "JavaScript"],
    badgeColor: "badge-orange",
    accentColor: "#EA580C",
    featured: false,
    github: "https://github.com/Lakshya-M-HI/REST-Countries-API",
    live: "https://rest-countrie-app.netlify.app/",
    status: "Completed",
    stats: [],
  },
  {
    id: 6,
    title: "Invoice QC Console",
    subtitle: "Invoices QC Console",
    description:
      "Invoices QC Console that enables users to upload invoices and validate them. It helps in checking the quality of invoices and if they are as per the requirements. It support validation through UI as well as CLI.",
    tags: ["Python"],
    badgeColor: "badge-blue",
    accentColor: "#2563EB",
    featured: false,
    github: "https://github.com/Lakshya-M-HI/invoice-qc-service-lakshya-mittal",
    live: "",
    status: "Completed",
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
  { icon: "⚛️", title: "Frontend Development", desc: "Pixel-perfect, accessible UIs with React & Next.js. Fast, responsive, and SEO-ready." },
  { icon: "⚙️", title: "Backend & APIs", desc: "Scalable REST & GraphQL APIs with Node.js, authentication, and database design." },
  { icon: "🗄️", title: "Database Design", desc: "Schema design, query optimization, and ORM setup for PostgreSQL and MongoDB." },
  { icon: "☁️", title: "Deployment & DevOps", desc: "CI/CD pipelines, Docker containers, and cloud deployment on Vercel, AWS, and Digital Ocean." },
  { icon: "🔒", title: "Auth & Security", desc: "JWT, OAuth 2.0, role-based access control, and security best practices." },
  { icon: "📱", title: "Responsive Design", desc: "Mobile-first design that works flawlessly across all screen sizes and devices." },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "1+", label: "Years Coding" },
  { value: "15+", label: "Projects Built" },
  { value: "20+", label: "Skill Sets" },
  { value: "30+", label: "GitHub Repositories" },
  // { value: "8+",  label: "Happy Clients" },
  // { value: "10+", label: "Open Source PRs" },
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
