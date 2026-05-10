import { PERSONAL, SERVICES } from "@/data";
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from "@/components/Icons";

// Service icons as SVGs
function ServiceIcon({ title }: { title: string }) {
  switch (title) {
    case "Frontend Development":
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "Backend & APIs":
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "Database Design":
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "Deployment & DevOps":
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "Auth & Security":
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        </svg>
      );
    case "Responsive Design":
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            The Developer Behind the Code
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            A little about who I am, how I work, and what I bring to the table.
          </p>
        </div>

        {/* Bio + Avatar Grid */}
        <div className="grid lg:grid-cols-5 gap-14 items-start mb-24">

          {/* ── Avatar & Quick Facts — 2 cols ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Profile picture card */}
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl -z-10" />
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl aspect-square flex flex-col items-center justify-center shadow-2xl shadow-blue-200 overflow-hidden">
                {/* Abstract background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 border border-white rounded-xl rotate-12" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full opacity-30" />
                </div>
                {/* Initials avatar */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur border-4 border-white/40 flex items-center justify-center">
                    <span className="font-display font-bold text-white text-4xl">LM</span>
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-white text-xl">Lakshya Mittal</p>
                    <p className="text-blue-100 text-sm mt-0.5">Full Stack Developer</p>
                  </div>
                </div>

                {/* Floating status badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full shadow-lg">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-slate-800 text-xs font-semibold whitespace-nowrap">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Quick info card */}
            <div className="card-flat rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Quick Facts</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "📍", label: "Location",    value: PERSONAL.location },
                  { icon: "🎓", label: "Focus",       value: "Full Stack Development" },
                  { icon: "💼", label: "Experience",  value: "1+ Years" },
                  { icon: "🌐", label: "Availability", value: "Remote / On-site" },
                  { icon: "⚡", label: "Response",    value: "Within 24 hours" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-sm shadow-sm shrink-0">
                      {icon}
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: <GitHubIcon className="w-5 h-5" />, label: "GitHub",   href: PERSONAL.github   },
                { icon: <LinkedInIcon className="w-5 h-5" />, label: "LinkedIn", href: PERSONAL.linkedin },
                { icon: <EmailIcon className="w-5 h-5" />, label: "Email",    href: `mailto:${PERSONAL.email}` },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex-1 flex flex-col items-center gap-1.5 py-3 card rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <span className="text-slate-600 group-hover:text-blue-600 transition-colors">{icon}</span>
                  <span className="text-[10px] font-semibold text-slate-500 group-hover:text-blue-600">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Bio Text — 3 cols ── */}
          <div className="lg:col-span-3 flex flex-col gap-7">
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-5 leading-snug">
                Passionate about building products that <span className="gradient-text">actually work</span> — not just look good.
              </h3>
              <div className="flex flex-col gap-4">
                {PERSONAL.bio.map((para, i) => (
                  <p key={i} className="text-slate-600 text-base leading-[1.85]">{para}</p>
                ))}
              </div>
            </div>

            {/* What I am currently learning / doing */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
                Currently
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: "📚", text: "Deep-diving into system design & scalability" },
                  { icon: "🔨", text: "Building Ai Trip Planner" },
                  { icon: "📖", text: "Learning Microservices, AWS (EC2, S3, Lambda)" },
                  { icon: "🤝", text: "Open to new roles & freelance projects" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <span className="text-base mt-0.5">{icon}</span>
                    <span className="text-sm text-slate-700 leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={PERSONAL.resume} download className="btn-primary inline-flex items-center gap-2">
                <DownloadIcon className="w-4 h-4" /> Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Let&apos;s Talk →
              </a>
            </div>
          </div>
        </div>

        {/* ── Services / What I Do ── */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-3xl text-slate-900">What I Can Do For You</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="card p-6 group cursor-default">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors border border-blue-100">
                  <ServiceIcon title={s.title} />
                </div>
                <h4 className="font-display font-semibold text-base text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
