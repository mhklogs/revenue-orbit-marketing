"use client";

import { useState } from "react";
import { FadeIn } from "@/components/Animations";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const services = [
  "General Consultation",
  "Customer Acquisition",
  "BPO & Outsourcing",
  "Contact Center & Live Transfers",
  "Digital Marketing & Paid Media",
  "Real Estate Lead Systems",
  "AI & Voice Automation",
  "Remote Workforce Staffing",
  "CRM & Business Automation",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "General Consultation",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", service: "General Consultation", message: "" });
      } else {
        setStatus("error");
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  const inputClass =
    "w-full h-13 text-base px-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none";

  const labelClass = "text-base font-medium text-[var(--text-secondary)] text-left block mb-2";

  return (
    <section id="contact-form" className="py-16 md:py-24 pb-24 md:pb-28 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
            Start The Conversation
          </span>
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.12] text-[var(--text-primary)] mb-5">
            Schedule Your Executive Growth{" "}
            <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
            Tell us about your business model, target acquisition goals, or operational requirements.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto w-full p-6 md:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center shadow-2xl mt-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-[var(--text-primary)] mb-3">
              Request a Scoped Blueprint
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed max-w-xl mx-auto">
              Our partners will deliver a customized execution proposal within 24 hours.
            </p>

            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold leading-snug text-[var(--text-primary)]">
                  Consultation Request Received!
                </h4>
                <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                  Thank you for connecting. A Revenue Orbit Marketing partner will review your requirements and follow up within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className={labelClass}>Business Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className={labelClass}>Company Name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClass}
                    placeholder="Enterprise Inc."
                  />
                </div>
                <div>
                  <label className={labelClass}>Direct Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+1 (323) 000-0000"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className={labelClass}>Primary Service Interest</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass}
                  >
                    {services.map((s) => (
                      <option key={s} value={s} style={{ backgroundColor: "#ffffff", color: "#0f172a" }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className={labelClass}>Project Requirements &amp; Goals *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full min-h-[110px] text-base p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[var(--accent)] outline-none col-span-1 sm:col-span-2"
                    placeholder="Describe your target customer, current acquisition volume, operational bottlenecks, or timeline..."
                  />
                </div>

                {error && (
                  <div className="col-span-1 sm:col-span-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
                    {error}
                  </div>
                )}

                <div className="col-span-1 sm:col-span-2 flex justify-center items-center w-full">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full max-w-md mx-auto h-12 text-base font-bold rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] transition-colors mt-6 inline-flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> SUBMIT CONSULTATION REQUEST
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
