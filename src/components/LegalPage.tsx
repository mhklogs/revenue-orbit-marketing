"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type LegalSection = { title: string; body: string | readonly string[] };

export default function LegalPage({
  title,
  eyebrow,
  updated,
  sections,
}: {
  title: string;
  eyebrow: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center mx-auto"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        {/* Breadcrumb / back */}
        <nav className="flex items-center gap-1.5 text-sm mb-8 text-[var(--text-muted)] flex-wrap">
          <Link href="/" className="inline-flex items-center gap-1.5 hover:text-[var(--accent-light)] transition-colors">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span style={{ color: "var(--text-primary)" }}>{title}</span>
        </nav>

        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-4">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] mb-3">
          {title}
        </h1>
        <p className="text-sm font-medium mb-12" style={{ color: "var(--text-muted)" }}>
          Last updated: {updated}
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{s.title}</h2>
              {Array.isArray(s.body) ? (
                <div className="space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p}</p>
                  ))}
                </div>
              ) : (
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.body}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--border-subtle)]">
          <p className="text-sm leading-normal" style={{ color: "var(--text-muted)" }}>
            Questions about this page? Contact our US client desk at{" "}
            <a href="tel:+17139197830" className="text-[var(--accent-light)]">+1 (713) 919-7830</a> or{" "}
            <a href="mailto:Info@revenueorbitmarketing.com" className="text-[var(--accent-light)]">Info@revenueorbitmarketing.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
