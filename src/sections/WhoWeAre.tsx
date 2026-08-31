"use client";

import { FadeIn } from "@/components/Animations";
import { Target, Eye } from "lucide-react";

const variables = [
  "Target Customers",
  "Sales Cycles",
  "Acquisition Costs",
  "Operational Workflows",
  "Tech Stack & Tools",
  "Compliance Rules",
];

export default function WhoWeAre() {
  return (
    <section id="about" className="relative w-full flex flex-col items-center justify-center mx-auto">
      {/* Section Container */}
      <div className="w-full max-w-6xl mx-auto text-center px-6 py-16">
        <FadeIn>
          {/* Badge Label */}
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
            Who We Are
          </span>

          {/* Main Title */}
          <h2 className="text-center mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-snug text-[var(--text-primary)] mb-8">
            A Growth Partner Built Around <span className="gradient-text">Your Business</span>
          </h2>

          <p className="text-center mx-auto text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] max-w-3xl mb-8">
            Revenue Orbit Marketing is a customer acquisition, marketing, outsourcing, sales, and technology partner built to help businesses move seamlessly from opportunity to predictable revenue. Every business operates around distinct structural variables.
          </p>
        </FadeIn>

        {/* Variables Label */}
        <FadeIn delay={0.1}>
          <p className="text-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-5">
            Key Operational Variables
          </p>
        </FadeIn>

        {/* Variables Grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full mb-14">
            {variables.map((item) => (
              <div
                key={item}
                className="px-6 py-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-center text-base sm:text-lg font-medium text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {/* Mission Card */}
          <FadeIn delay={0.2}>
            <div className="p-8 lg:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-center gap-5 hover-lift h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug text-[var(--text-primary)]">Mission</h3>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                Empower enterprise and scaling businesses through measurable customer acquisition, intelligent technology, high-performing BPO outsourcing, and reliable revenue engines.
              </p>
            </div>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn delay={0.3}>
            <div className="p-8 lg:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-center gap-5 hover-lift h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug text-[var(--text-primary)]">Vision</h3>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                To become the premier growth and technology partner for U.S. enterprises seeking to acquire customers, optimize unit economics, and build automated future-proof operations.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
