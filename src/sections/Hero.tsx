"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn } from "@/components/Animations";
import Aurora from "@/components/reactbits/Aurora";
import BrandLogo from "@/components/BrandLogo";

const ticker = [
  "Performance Marketing", "Lead Generation", "Contact Center Solutions",
  "Digital Marketing", "BPO Outsourcing", "AI Automation", "CRM Systems",
  "Real Estate Growth",
];

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* ReactBits Aurora cinematic background */}
      <Aurora
        colorStops={["#0F6B63", "#2EC4B0", "#0E3F3A"]}
        amplitude={1.1}
        blend={0.55}
        speed={0.9}
      />
      {/* Soft glow overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg-primary)_78%)] z-[1]" />

      {/* Single bg-less brand logo with orbiting line (subtle, theme-aware) */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="hero-logo-mark">
          <BrandLogo variant="auto" size={340} className="opacity-[0.16]" />
        </div>
      </div>

      {/* Centered hero content */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 lg:pt-44 pb-20 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-8">
            Growth &amp; Technology Partner
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-4xl font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-6">
            YOU BRING THE <span className="animated-gradient">VISION.</span>
            <br />
            WE MAKE IT <span className="animated-gradient">HAPPEN.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="card-body mx-auto max-w-2xl text-lg lg:text-xl text-[var(--text-secondary)] mb-10">
            Revenue Orbit Marketing is a growth and technology partner helping businesses
            generate customers, accelerate revenue, streamline operations, and scale
            through marketing, sales, outsourcing, AI, and automation.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contact-form" className="btn-primary">
              GET STARTED <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact-form" className="btn-outline">
              <Calendar className="w-5 h-5 text-[var(--accent)]" /> SCHEDULE A CONSULTATION
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Sub-footer ticker marquee */}
      <div className="relative z-[2] w-full border-t border-[var(--border-subtle)] bg-[var(--bg-card)]/70 backdrop-blur-md">
        <div className="overflow-hidden py-3.5">
          <div
            className="flex whitespace-nowrap gap-8 items-center"
            style={{ animation: "marquee 25s linear infinite", width: "max-content" }}
          >
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-8 text-sm font-semibold tracking-wide text-[var(--text-muted)]">
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
