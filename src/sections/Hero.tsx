"use client";

import { motion } from "framer-motion";
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

        {/* Approved logo showcase */}
        <FadeIn delay={0.4}>
          <div className="relative aspect-square w-full max-w-[460px] mx-auto my-14">
            <div className="absolute inset-0 rounded-full bg-[var(--accent)]/5 blur-2xl" />
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border border-[var(--border-subtle)] shadow-[0_30px_80px_rgba(26,26,26,0.18)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/rom-logo.png" alt="Revenue Orbit Marketing logo" fill sizes="460px" className="object-cover" priority />
            </motion.div>
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
