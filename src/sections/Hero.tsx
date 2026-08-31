"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const orbitItems = [
  "Marketing", "Leads", "Sales", "AI", "Automation",
  "Real Estate", "Insurance", "Legal", "Home Services", "Finance",
];

const pipeline = ["LEADS", "OPPORTUNITIES", "CUSTOMERS", "REVENUE", "GROWTH"];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center mx-auto overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
      </div>

      {/* Container: centered flex column */}
      <div className="relative w-full max-w-5xl mx-auto text-center px-6 py-20 lg:py-28 flex flex-col items-center justify-center">
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6">
            Growth &amp; Technology Partner
          </span>
        </FadeIn>

        {/* Hero Heading (H1) */}
        <FadeIn delay={0.1}>
          <h1 className="text-center mx-auto max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] text-white mb-8">
            YOU BRING THE <span className="gradient-text">VISION.</span><br />
            WE MAKE IT <span className="gradient-text">HAPPEN.</span>
          </h1>
        </FadeIn>

        {/* Subtitle Paragraph */}
        <FadeIn delay={0.2}>
          <p className="text-center mx-auto text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-3xl mb-10 font-normal">
            Revenue Orbit Marketing is a growth and technology partner helping businesses
            generate customers, accelerate revenue, streamline operations, and scale through
            marketing, sales, outsourcing, AI, and automation.
          </p>
        </FadeIn>

        {/* Graphic Placement: Center canvas element below main typography max-w-2xl mx-auto my-8 */}
        <FadeIn delay={0.3} className="w-full">
          <div className="relative aspect-square max-w-2xl mx-auto my-8 flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-[var(--accent)]/15" />
            </div>
            {/* Middle Ring */}
            <div className="absolute inset-12 flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-[var(--accent)]/20" />
            </div>
            {/* Inner Ring */}
            <div className="absolute inset-24 flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-[var(--accent)]/30" />
            </div>

            {/* Center Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-28 h-28 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: "var(--accent)" }}
                animate={{ boxShadow: ["0 0 25px rgba(22,163,168,0.3)", "0 0 50px rgba(22,163,168,0.6)", "0 0 25px rgba(22,163,168,0.3)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-bold text-2xl tracking-wider">ROM</span>
              </motion.div>
            </div>

            {/* Orbiting Items */}
            {orbitItems.map((item, i) => {
              const angle = (i / orbitItems.length) * 360;
              const radius = 220;
              return (
                <motion.div
                  key={item}
                  className="absolute top-1/2 left-1/2"
                  style={{ width: 0, height: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22 + i * 2, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="absolute px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap glass border border-[var(--accent)]/30"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                      color: "var(--accent-light)",
                    }}
                  >
                    {item}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>

        {/* Action Buttons Container: flex flex-wrap items-center justify-center gap-5 mb-12 */}
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-12">
            <a
              href="#contact-form"
              className="btn-primary h-13 px-8 py-3.5 text-base font-bold rounded-xl flex items-center justify-center gap-2"
            >
              GET STARTED <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact-form"
              className="btn-outline h-13 px-8 py-3.5 text-base font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-[var(--accent)]" /> SCHEDULE A CONSULTATION
            </a>
          </div>
        </FadeIn>

        {/* Process Ribbon: flex flex-wrap items-center justify-center gap-3 text-sm font-semibold tracking-widest text-emerald-400 uppercase py-2 px-6 bg-emerald-500/10 rounded-full border border-emerald-500/20 */}
        <FadeIn delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold tracking-widest text-emerald-400 uppercase py-2 px-6 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            {pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span>{step}</span>
                {i < pipeline.length - 1 && (
                  <span className="text-emerald-500/50 font-bold">&gt;</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
