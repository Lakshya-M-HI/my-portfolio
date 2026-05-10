import { TESTIMONIALS } from "@/data";
import { GitHubIcon } from "@/components/Icons";
const CONTRIBUTION_COLORS = ["#1E293B", "#DBEAFE", "#93C5FD", "#3B82F6", "#1D4ED8"];

const CONTRIBUTIONS = Array.from({ length: 126 }, (_, i) => {
  const level = (i * 17 + Math.floor(i / 7) * 11) % CONTRIBUTION_COLORS.length;
  return {
    color: CONTRIBUTION_COLORS[level],
    count: level,
  };
});

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
         <div className="flex flex-col items-center text-center mb-16">
          
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            Feedback from people I&apos;ve worked with directly.
          </p>
        </div>

        {/* Testimonial cards */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card p-7 flex flex-col gap-5 hover:shadow-xl hover:shadow-blue-100/50 group"
            >
              {/* Stars */}
              {/* <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              {/* <div className="relative">
                <span className="absolute -top-2 -left-1 text-5xl text-blue-100 font-display font-bold leading-none select-none">&quot;</span>
                <p className="text-slate-600 text-sm leading-[1.85] pt-4 italic relative z-10">
                  {t.quote}
                </p>
              </div> */}

              {/* Author */}
              {/* <div className="flex items-center gap-3 pt-2 mt-auto border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* ── GitHub Activity CTA ── */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 p-10 md:p-14">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label text-blue-400 mb-3 block">{"// open_source"}</span>
              <h3 className="font-display font-bold text-3xl text-white mb-4 leading-tight">
                I Write Code Every Day<br />
                <span className="text-blue-400">Check My GitHub</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-7">
                10+ merged pull requests, published npm packages, and consistent contributions.
                My GitHub is the best window into how I actually work.
              </p>
              <a
                href="https://github.com/lakshya-m-hi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-slate-100 transition-all"
              >
                <GitHubIcon className="w-5 h-5" /> Open GitHub Profile →
              </a>
            </div>

            {/* Fake contribution grid */}
            <div className="flex flex-col gap-2">
              <p className="text-xs text-slate-500 font-mono-custom mb-2">Contribution activity · last 6 months</p>
              <div className="flex gap-1 flex-wrap">
                {CONTRIBUTIONS.map((item, i) => (
                  <div
                    key={i}
                    className="w-3.5 h-3.5 rounded-sm"
                    style={{ background: item.color }}
                    title={`${item.count} contributions`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-slate-500">Less</span>
                {["#1E293B", "#DBEAFE", "#93C5FD", "#3B82F6", "#1D4ED8"].map((c) => (
                  <div key={c} className="w-3.5 h-3.5 rounded-sm" style={{ background: c }} />
                ))}
                <span className="text-xs text-slate-500">More</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
