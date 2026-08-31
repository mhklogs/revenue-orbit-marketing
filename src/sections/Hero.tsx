"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
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
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-[480px] h-[480px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -left-20 w-[380px] h-[380px] bg-[var(--accent-light)]/10 rounded-full blur-[110px]" />
      </div>

      {/* Asymmetric 2-col: visual left, content right */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 lg:pt-48 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left — Visual Asset: orbit */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative aspect-square w-full max-w-[540px] mx-auto">
              {/* Soft circular backdrop */}
              <div className="absolute inset-6 rounded-full bg-[var(--accent)]/5 blur-2xl" />
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-[var(--accent)]/15" />
              <div className="absolute inset-10 rounded-full border border-[var(--accent)]/20" />
              <div className="absolute inset-20 rounded-full border border-[var(--accent)]/30" />

              {/* Center Core */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-10"
                style={{ backgroundColor: "var(--dark)", boxShadow: "0 0 40px rgba(37,99,235,0.35)" }}
                animate={{ boxShadow: ["0 0 25px rgba(37,99,235,0.25)", "0 0 55px rgba(37,99,235,0.5)", "0 0 25px rgba(37,99,235,0.25)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-bold text-2xl tracking-wider">ROM</span>
              </motion.div>

              {/* Orbit keyword pills */}
              {orbitItems.map((item, i) => {
                const angle = (i / orbitItems.length) * 360;
                return (
                  <div
                    key={item}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `rotate(${angle}deg) translateX(200px) rotate(-${angle}deg)` }}
                  >
                    <span
                      className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}

              {/* Floating pill badge (15+ years) */}
              <div className="absolute -translate-x-1/2 left-1/2 top-0 z-20 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow-lg"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)", color: "var(--dark)" }}>
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                15+ Years on the phone
              </div>
            </div>
          </FadeIn>

          {/* Right — Hero content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
                <Sparkles className="w-4 h-4" /> Outsourcing that performs
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.08] text-[var(--dark)] mb-6">
                YOU BRING THE <span className="gradient-text">VISION.</span><br />
                WE MAKE IT <span className="gradient-text">HAPPEN.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-[540px] mb-9">
                Revenue Orbit Marketing is a growth and technology partner helping businesses
                generate customers, accelerate revenue, streamline operations, and scale
                through marketing, sales, outsourcing, AI, and automation.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact-form" className="btn-primary">
                  GET STARTED <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact-form" className="btn-outline">
                  <Calendar className="w-5 h-5 text-[var(--accent)]" /> SCHEDULE A CONSULTATION
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
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
