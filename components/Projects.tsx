"use client";

import { useState } from "react";
import { PROJECTS } from "@/data";
import { GitHubIcon, CodeIcon } from "@/components/Icons";

const FILTERS = ["All", "Featured", "Live", "Open Source"];

const STATUS_COLORS: Record<string, string> = {
  "Live":        "badge-green",
  "In Progress": "badge-orange",
  "Completed":   "badge-blue",
  "Open Source": "badge-violet",
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = PROJECTS.filter((p) => {
    if (filter === "All")         return true;
    if (filter === "Featured")    return p.featured;
    if (filter === "Live")        return p.status === "Live";
    if (filter === "Open Source") return p.status === "Open Source";
    return true;
  });

  const featured  = visible.filter((p) => p.featured);
  const rest      = visible.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Projects I&apos;ve Built
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            A selection of real-world applications built with modern full-stack technologies.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                filter === f
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {f}
              <span className={`ml-1.5 text-xs ${filter === f ? "text-blue-200" : "text-slate-400"}`}>
                ({PROJECTS.filter((p) => {
                  if (f === "All")         return true;
                  if (f === "Featured")    return p.featured;
                  if (f === "Live")        return p.status === "Live";
                  if (f === "Open Source") return p.status === "Open Source";
                  return true;
                }).length})
              </span>
            </button>
          ))}
        </div>

        {/* ── Featured Projects (large cards) ── */}
        {featured.length > 0 && (
          <div className="flex flex-col gap-8 mb-10">
            {featured.map((p, i) => (
              <div
                key={p.id}
                className="group grid md:grid-cols-2 gap-0 rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
              >
                {/* Visual side */}
                <div
                  className={`relative min-h-[280px] flex flex-col justify-between p-8 ${i % 2 === 1 ? "md:order-last" : ""}`}
                  style={{
                    background: `linear-gradient(135deg, ${p.accentColor}18 0%, ${p.accentColor}06 100%)`,
                    borderRight: i % 2 === 0 ? `1px solid ${p.accentColor}20` : "none",
                    borderLeft:  i % 2 === 1 ? `1px solid ${p.accentColor}20` : "none",
                  }}
                >
                  {/* Abstract code / UI mock */}
                  <div className="absolute inset-0 overflow-hidden rounded-none pointer-events-none">
                    <div className="absolute top-6 right-6 opacity-8">
                      <div className="flex flex-col gap-1.5">
                        {["w-32", "w-24", "w-28", "w-16", "w-20", "w-24"].map((w, j) => (
                          <div key={j} className={`h-1.5 ${w} rounded-full`} style={{ background: p.accentColor + "30" }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project number */}
                  <div>
                    <span className="font-mono-custom text-7xl font-bold opacity-[0.07] text-slate-900 leading-none select-none">
                      0{p.id}
                    </span>
                  </div>

                  {/* Metrics */}
                  {p.stats.length > 0 && (
                    <div className="flex gap-5">
                      {p.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-display font-bold text-xl" style={{ color: p.accentColor }}>{s.value}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div className="p-8 flex flex-col justify-between bg-white">
                  <div>
                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className={`badge ${STATUS_COLORS[p.status] ?? "badge-blue"}`}>
                        {p.status === "Live" && "● "}
                        {p.status}
                      </span>
                      {p.featured && (
                        <span className="badge badge-blue">⭐ Featured</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-sm font-medium mb-4" style={{ color: p.accentColor }}>{p.subtitle}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{p.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-sm py-2.5 px-5"
                        style={{ background: p.accentColor }}
                      >
                        Live Demo ↗
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
                    >
                      <CodeIcon className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Smaller project cards grid ── */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <div
                key={p.id}
                className="card p-6 flex flex-col gap-4 group"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: p.accentColor + "15", border: `1px solid ${p.accentColor}30` }}
                  >
                    {p.id === 4 ? "🏥" : p.id === 5 ? "₿" : "📦"}
                  </div>
                  <span className={`badge ${STATUS_COLORS[p.status] ?? "badge-blue"} text-[10px]`}>
                    {p.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: p.accentColor }}>{p.subtitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{p.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 4 && (
                    <span className="text-[10px] text-slate-400 px-1.5 py-0.5">+{p.tags.length - 4}</span>
                  )}
                </div>

                <div className="flex gap-2 mt-auto pt-2 border-t border-slate-100">
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 hover:text-blue-600 border border-slate-200 rounded-lg hover:border-blue-200 transition-all">
                    <CodeIcon className="w-3.5 h-3.5" /> Code
                  </a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="flex-1 text-center py-2 text-xs font-semibold text-white rounded-lg transition-all"
                      style={{ background: p.accentColor }}>
                      ↗ Live
                    </a>
                  ) : (
                    <span className="flex-1 text-center py-2 text-xs font-medium text-slate-300 border border-slate-100 rounded-lg">
                      No demo
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 text-sm mb-4">More projects on GitHub →</p>
          <a
            href="https://github.com/lakshya-m-hi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold text-sm rounded-xl hover:bg-slate-700 transition-all"
          >
            <GitHubIcon className="w-5 h-5" /> View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
