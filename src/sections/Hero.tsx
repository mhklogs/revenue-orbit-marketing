"use client";

import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const ticker = [
  "Performance Marketing", "Lead Generation", "Contact Center Solutions",
  "Digital Marketing", "BPO Outsourcing", "AI Automation", "CRM Systems",
  "Real Estate Growth",
];

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Centered background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[130px]" />
      </div>

      {/* Centered hero content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 lg:pt-44 pb-20 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-8">
            Growth &amp; Technology Partner
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-4xl font-black tracking-tight leading-[1.08] text-[var(--dark)] mb-6">
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

        {/* Round orbit with circulating terms around the logo */}
        <FadeIn delay={0.4}>
          <div className="relative aspect-square w-full max-w-[480px] mx-auto my-14 select-none">
            {/* Center logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38%] aspect-square rounded-full overflow-hidden border border-[var(--border-subtle)] shadow-[0_20px_60px_rgba(0,0,0,0.22)] z-10">
              <Image src="/rom-logo.png" alt="Revenue Orbit Marketing logo" fill sizes="180px" className="object-cover" priority />
            </div>

            {/* Rotating orbit rings with circulating terms */}
            {[
              { items: ["Marketing", "Leads", "Sales", "AI", "Automation", "BPO"], radius: 46, dur: 28, rev: false },
              { items: ["Real Estate", "Insurance", "Legal", "Finance", "SaaS", "Health"], radius: 38, dur: 22, rev: true },
            ].map((ring) => (
              <div
                key={ring.radius}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: `${ring.radius}%`,
                  height: `${ring.radius}%`,
                  animation: `${ring.rev ? "orbitSpinReverse" : "orbitSpin"} ${ring.dur}s linear infinite`,
                }}
              >
                {ring.items.map((term, i) => {
                  const angle = (i / ring.items.length) * 360;
                  return (
                    <div
                      key={term}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${ring.radius / 2}% )` }}
                    >
                      <span
                        className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm"
                        style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--accent)", color: "var(--accent)" }}
                      >
                        {term}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Sub-footer ticker marquee */}
      <div className="relative w-full border-t border-[var(--border-subtle)] bg-white/70 backdrop-blur-md">
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
