import { EXPERIENCE } from "@/data";

const TYPE_BADGE: Record<string, string> = {
  Internship:   "badge-blue",
  Freelance:    "badge-cyan",
  "Open Source": "badge-violet",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-label mb-3">{"// work_history"}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            Where I&apos;ve worked, what I built, and the impact I delivered.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-blue-400 via-cyan-300 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center border-4 border-white shadow-md z-10"
                  style={{ background: exp.color }}
                >
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`badge ${TYPE_BADGE[exp.type] ?? "badge-blue"}`}>
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <span>📍</span> {exp.location}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-slate-900">{exp.role}</h3>
                      <p className="font-semibold text-sm mt-1" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="text-sm">📅</span>
                      <span className="font-mono-custom text-xs font-medium text-slate-600">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 pb-5 border-b border-slate-100">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                      Key Achievements
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span
                            className="mt-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 text-white"
                            style={{ background: exp.color }}
                          >
                            ✓
                          </span>
                          <span className="text-slate-600 text-sm leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2.5">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg border"
                          style={{
                            background: exp.color + "10",
                            color: exp.color,
                            borderColor: exp.color + "30",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label mb-2 block">{"// education"}</span>
            <h3 className="font-display font-bold text-3xl text-slate-900">Education</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "🎓",
                degree: "B.Tech / MCA / BCA",
                field: "Computer Science",
                college: "Your College Name",
                year: "2022 – 2026",
                color: "#2563EB",
                note: "Update with your actual degree & college",
              },
              {
                icon: "🏫",
                degree: "Higher Secondary (12th)",
                field: "PCM + Computer Science",
                college: "Your School Name",
                year: "2020 – 2022",
                color: "#0891B2",
                note: "Update with your school details",
              },
            ].map((edu, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: edu.color + "15", border: `1px solid ${edu.color}25` }}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900">{edu.degree}</h4>
                    <p className="text-sm font-medium mt-0.5" style={{ color: edu.color }}>{edu.field}</p>
                    <p className="text-slate-500 text-sm mt-1">{edu.college}</p>
                    <div className="flex items-center gap-1.5 mt-3">
                      <span className="font-mono-custom text-xs text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-2 italic">{edu.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
