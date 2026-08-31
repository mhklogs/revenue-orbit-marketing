"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { CheckCircle, ArrowRight, Loader2, Send } from "lucide-react";

const openings = [
  { role: "Customer Support Representative", type: "Full-time", location: "Remote" },
  { role: "Sales Development Representative (SDR)", type: "Full-time", location: "Remote" },
  { role: "Business Development Representative (BDR)", type: "Full-time", location: "Remote" },
  { role: "Appointment Setter", type: "Full-time", location: "Remote" },
  { role: "Sales Representative", type: "Full-time", location: "Remote" },
  { role: "Account Executive", type: "Full-time", location: "Remote" },
  { role: "Verification Specialist", type: "Full-time", location: "Remote" },
  { role: "Virtual Assistant", type: "Full-time", location: "Remote" },
  { role: "Administrative Staff", type: "Full-time", location: "Remote" },
  { role: "Digital Marketing Specialist", type: "Full-time", location: "Remote" },
  { role: "AI / Automation Specialist", type: "Full-time", location: "Remote" },
  { role: "Developer", type: "Full-time", location: "Remote" },
];

const benefits = [
  "Professional and supportive work environment",
  "Career development and growth opportunities",
  "Performance-based recognition and incentives",
  "Training and skill development",
  "Dedicated QA and coaching",
  "Opportunity to work with U.S. clients",
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", role: openings[0].role, message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const inputClass =
    "w-full h-11 px-4 text-sm rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-subtle)] focus:border-[var(--accent)] focus:outline-none transition-colors";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <>
      <section className="py-20 md:py-32 pt-24 md:pt-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Careers"
            title="Build Your Career With"
            highlight="Revenue Orbit Marketing"
            subtitle="Join a professional, growth-focused team where your skills and ideas are valued."
          />
        </div>
      </section>

      {/* Benefits & Openings */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <StaggerItem key={b}>
                <div className="flex items-start gap-3 p-4 rounded-xl glass border border-[var(--border-subtle)]">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-[var(--accent-light)]" />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{b}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div>
            <SectionHeading badge="Open Roles" title="Current" highlight="Openings" />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {openings.map((o) => (
                <StaggerItem key={o.role}>
                  <div className="p-6 rounded-xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-2" style={{ color: "var(--text-primary)" }}>{o.role}</h3>
                      <div className="flex gap-2 text-xs font-semibold mb-4">
                        <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{o.type}</span>
                        <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{o.location}</span>
                      </div>
                    </div>
                    <a href="#apply" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-light)] hover:gap-3 transition-all mt-auto">
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Apply" title="Submit Your" highlight="Application" />
          <FadeIn>
            <div className="p-6 md:p-8 rounded-2xl glass border border-[var(--border-subtle)]">
              {status === "success" ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle className="w-16 h-16 text-[var(--accent-light)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Application Received!</h3>
                  <p className="text-sm leading-normal" style={{ color: "var(--text-secondary)" }}>Our HR team will review your application and reach out soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} style={{ color: "var(--text-primary)" }} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Email Address *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} style={{ color: "var(--text-primary)" }} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Target Position *</label>
                    <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className={inputClass} style={{ color: "var(--text-primary)" }}>
                      {openings.map((o) => <option key={o.role} value={o.role} style={{ backgroundColor: "var(--bg-card)" }}>{o.role}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Why are you a good fit? *</label>
                    <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full min-h-[120px] p-3.5 text-sm rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-subtle)] focus:border-[var(--accent)] focus:outline-none transition-colors" style={{ color: "var(--text-primary)" }} />
                  </div>
                  <button type="submit" disabled={status === "submitting"} className="btn-primary h-12 w-full px-6 py-2.5 text-sm font-semibold inline-flex items-center justify-center gap-2 rounded-lg transition-all disabled:opacity-60">
                    {status === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Send className="w-4 h-4" /> Submit Application</>}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
