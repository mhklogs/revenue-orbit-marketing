"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const orbitItems = [
  "Marketing", "Leads", "Sales", "AI", "Automation",
  "Real Estate", "Insurance", "Legal", "Home Services", "Finance",
];

const ticker = [
  "Performance Marketing", "Lead Generation", "Contact Center Solutions",
  "Digital Marketing", "BPO Outsourcing", "AI Automation", "CRM Systems",
  "Real Estate Growth",
];

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col overflow-hidden bg-[var(--bg-primary)]">
      {/* Centered background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[130px]" />
      </div>

      {/* Centered hero content */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 pt-40 lg:pt-44 pb-20 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-8">
            Growth &amp; Technology Partner
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-4xl font-black tracking-tight leading-[1.06] text-[var(--dark)] mb-6">
            YOU BRING THE <span className="gradient-text">VISION.</span>
            <br />
            WE MAKE IT <span className="gradient-text">HAPPEN.</span>
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

        {/* Contained orbit visual */}
        <FadeIn delay={0.4}>
          <div className="relative aspect-square w-full max-w-[480px] mx-auto my-14">
            <div className="absolute inset-0 rounded-full bg-[var(--accent)]/5" />
            <div className="absolute inset-2 rounded-full border border-[var(--accent)]/15" />
            <div className="absolute inset-14 rounded-full border border-[var(--accent)]/20" />
            <div className="absolute inset-28 rounded-full border border-[var(--accent)]/25" />

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center z-10"
              style={{ backgroundColor: "var(--dark)", boxShadow: "0 0 40px rgba(37,99,235,0.35)" }}
              animate={{ boxShadow: ["0 0 25px rgba(37,99,235,0.25)", "0 0 55px rgba(37,99,235,0.5)", "0 0 25px rgba(37,99,235,0.25)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-white font-bold text-xl tracking-wider">ROM</span>
            </motion.div>

            {orbitItems.map((item, i) => {
              const angle = (i / orbitItems.length) * 360;
              const radius = 175;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <div
                  key={item}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <span
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
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
