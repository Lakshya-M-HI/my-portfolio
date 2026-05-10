import { PERSONAL, NAV_LINKS } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-display font-bold text-sm">
                LM
              </div>
              <span className="font-display font-semibold text-white text-base">
                Lakshya<span className="text-blue-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer building fast, scalable web applications. Open to full-time roles and freelance projects.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors text-left"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Get In Touch</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "✉️", text: PERSONAL.email,    href: `mailto:${PERSONAL.email}` },
                { icon: "🐙", text: "GitHub",           href: PERSONAL.github },
                { icon: "💼", text: "LinkedIn",         href: PERSONAL.linkedin },
                { icon: "🐦", text: "Twitter / X",      href: PERSONAL.twitter },
              ].map(({ icon, text, href }) => (
                <a key={text} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors">
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-slate-800">
          <p className="text-slate-600 text-xs">© {year} Lakshya Mittal. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
