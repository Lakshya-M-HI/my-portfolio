"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/data";

export default function Skills() {
  const [active, setActive] = useState(0);
  const cat = SKILL_CATEGORIES[active];

  return (
    <section id="skills" className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-label mb-3">{"// tech_stack"}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            The tools I reach for every day — and how confident I am with each.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── Left: Category tabs ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {SKILL_CATEGORIES.map((c, i) => (
              <button
                key={c.category}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200 ${
                  active === i
                    ? "bg-white border-blue-200 shadow-md shadow-blue-100/60"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-colors"
                  style={{ background: active === i ? c.bg : "#F8FAFC", border: `1px solid ${active === i ? c.color + "40" : "#E2E8F0"}` }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-display font-semibold text-sm transition-colors ${active === i ? "text-blue-600" : "text-slate-700"}`}>
                    {c.category}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{c.skills.length} technologies</p>
                </div>
                {active === i && (
                  <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                )}
              </button>
            ))}

            {/* Overall proficiency summary */}
            <div className="mt-2 p-5 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-100 mb-3">Experience Level</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Junior → Mid",  pct: "Current" },
                  { label: "Total Skills",  pct: `${SKILL_CATEGORIES.reduce((a,c) => a + c.skills.length, 0)}+` },
                  { label: "Years Coding",  pct: "2+" },
                ].map(({ label, pct }) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-blue-100 text-xs">{label}</span>
                    <span className="text-white font-bold text-sm">{pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Skill bars ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm h-full">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-7 pb-5 border-b border-slate-100">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: cat.bg, border: `1px solid ${cat.color}30` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">{cat.category}</h3>
                  <p className="text-xs text-slate-400">{cat.skills.length} core technologies</p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{skill.icon}</span>
                        <span className="font-medium text-sm text-slate-800">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: cat.bg, color: cat.color }}
                        >
                          {skill.level >= 85 ? "Expert" : skill.level >= 75 ? "Advanced" : "Proficient"}
                        </span>
                        <span className="text-xs font-bold text-slate-500 w-8 text-right">{skill.level}%</span>
                      </div>
                    </div>
                    {/* Bar track */}
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── All Technologies Grid ── */}
        <div className="mt-14">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-7">
            All Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {SKILL_CATEGORIES.flatMap((c) =>
              c.skills.map((s) => (
                <div
                  key={`${c.category}-${s.name}`}
                  className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
                >
                  <span className="text-sm">{s.icon}</span>
                  <span className="text-xs font-medium text-slate-600 group-hover:text-blue-600 transition-colors">
                    {s.name}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
