"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { PERSONAL } from "@/data";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm]         = useState<Form>({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading]   = useState(false);
  const [sent, setSent]         = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1300));
    setLoading(false);
    setSent(true);
  };

  const inputCls =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200";

  return (
    <section id="contact" className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-label mb-3">{"// get_in_touch"}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            I&apos;m open to full-time roles, freelance projects, and interesting collaborations.
            Drop me a message — I reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Form — 3 cols ── */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center bg-white rounded-3xl border border-emerald-200 p-14 text-center gap-4 shadow-sm">
                <div className="w-16 h-16 bg-emerald-50 rounded-full border-2 border-emerald-200 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out, {form.name.split(" ")[0]}! I&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm flex flex-col gap-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      name="name" required value={form.name} onChange={onChange}
                      placeholder="e.g. Priya Sharma"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email" name="email" required value={form.email} onChange={onChange}
                      placeholder="priya@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    What&apos;s This About? *
                  </label>
                  <select name="subject" value={form.subject} onChange={onChange} className={inputCls}>
                    <option value="">Select a reason…</option>
                    <option>Full-time Job Opportunity</option>
                    <option>Freelance Project</option>
                    <option>Open Source Collaboration</option>
                    <option>General Inquiry</option>
                    <option>Just Saying Hi! 👋</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message" required rows={5} value={form.message} onChange={onChange}
                    placeholder="Tell me about the project, role, or idea you have in mind…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p className="text-center text-slate-400 text-xs">
                  No spam. I&apos;ll only reply regarding your message. 🔒
                </p>
              </form>
            )}
          </div>

          {/* ── Sidebar — 2 cols ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Contact details */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h3 className="font-display font-bold text-base text-slate-900 mb-6">Contact Info</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "✉️", label: "Email",    val: PERSONAL.email,    href: `mailto:${PERSONAL.email}` },
                  { icon: "📍", label: "Location", val: PERSONAL.location, href: null },
                  { icon: "⏱️", label: "Response", val: "Within 24 hours", href: null },
                ].map(({ icon, label, val, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center text-sm shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-blue-600 hover:underline">{val}</a>
                      ) : (
                        <p className="text-sm font-medium text-slate-800">{val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h3 className="font-display font-bold text-sm text-slate-900 mb-5">Find Me Online</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "🐙", name: "GitHub",   desc: "Code & open source",  href: PERSONAL.github,   color: "#0F172A" },
                  { icon: "💼", name: "LinkedIn", desc: "Professional profile", href: PERSONAL.linkedin, color: "#0A66C2" },
                  { icon: "🐦", name: "Twitter",  desc: "Dev thoughts & tips",  href: PERSONAL.twitter,  color: "#1DA1F2" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-9 h-9 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{s.name}</p>
                      <p className="text-[10px] text-slate-400">{s.desc}</p>
                    </div>
                    <span className="ml-auto text-slate-300 group-hover:text-blue-400 transition-colors text-sm">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hire me highlight */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-200">
              <p className="text-blue-100 text-xs font-semibold uppercase tracking-widest mb-2">Currently</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <h3 className="font-display font-bold text-lg">Open to Work</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Looking for full-time Full Stack Developer roles or freelance projects.
                Let&apos;s build something great together.
              </p>
              <a
                href={PERSONAL.resume}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-blue-600 font-bold text-sm rounded-xl hover:bg-blue-50 transition-all"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
