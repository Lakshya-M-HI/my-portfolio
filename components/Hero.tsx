"use client";

import { useEffect, useState } from "react";
import { PERSONAL, STATS, ALL_TECH } from "@/data";

const TYPED_ROLES = [
  "Full Stack Developer",
  "React & Next.js Dev",
  "Node.js Engineer",
  "API Architect",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(TYPED_ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 overflow-hidden"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      {/* Blue glow top-right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      {/* Cyan glow bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      {/* ── Floating tech badges (decorative) ── */}
      <div className="hidden lg:block absolute right-16 top-36 animate-float">
        <div className="card px-4 py-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚛️</span>
            <div>
              <p className="text-xs font-semibold text-slate-800">React.js</p>
              <p className="text-[10px] text-slate-400">Frontend</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-36 top-64 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="card px-4 py-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🟢</span>
            <div>
              <p className="text-xs font-semibold text-slate-800">Node.js</p>
              <p className="text-[10px] text-slate-400">Backend</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-10 top-[420px] animate-float" style={{ animationDelay: "0.6s" }}>
        <div className="card px-4 py-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🐘</span>
            <div>
              <p className="text-xs font-semibold text-slate-800">PostgreSQL</p>
              <p className="text-[10px] text-slate-400">Database</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8 animate-fade-up opacity-0-init delay-100">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-sm font-semibold">
              Available for full-time & freelance
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold leading-[1.08] tracking-tight mb-6 animate-fade-up opacity-0-init delay-200">
            <span className="block text-slate-900 text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m Lakshya 👋
            </span>
            <span className="block mt-3 text-4xl md:text-5xl lg:text-6xl">
              <span className="gradient-text">{typed}</span>
              <span className="animate-blink text-blue-600 ml-0.5">|</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-up opacity-0-init delay-300">
            {PERSONAL.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up opacity-0-init delay-400">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary text-base px-7 py-3.5"
            >
              View My Work
              <span className="ml-1">→</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline text-base px-7 py-3.5"
            >
              Hire Me
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-semibold text-sm rounded-xl hover:bg-slate-700 transition-all"
            >
              <span className="text-base">🐙</span> GitHub
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 animate-fade-up opacity-0-init delay-500">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display font-bold text-3xl text-slate-900">{stat.value}</span>
                <span className="text-slate-500 text-xs mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tech marquee strip ── */}
      <div className="relative mt-20 -mx-6 overflow-hidden border-y border-slate-100 bg-slate-50/70">
        <div className="flex gap-0 py-3.5 w-max animate-marquee">
          {[...ALL_TECH, ...ALL_TECH].map((tech, i) => (
            <span
              key={i}
              className="font-mono-custom text-xs font-medium text-slate-400 px-6 whitespace-nowrap border-r border-slate-200 last:border-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
