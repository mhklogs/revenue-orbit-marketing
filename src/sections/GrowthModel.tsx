"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/Animations";
import { Megaphone, MessageSquare, Handshake, TrendingUp, ArrowRight } from "lucide-react";

const stages = [
  { icon: Megaphone, title: "ATTRACT", desc: "Generate targeted attention and high-intent buyer demand across paid & organic channels.", color: "#34d3d8" },
  { icon: MessageSquare, title: "ENGAGE", desc: "Respond within seconds via automated omnichannel AI, voice, and speed-to-lead agents.", color: "#2fc3c8" },
  { icon: Handshake, title: "CONVERT", desc: "Qualify prospects, nurture pipelines, book live appointments, and close retainers.", color: "#ADC2D3" },
  { icon: TrendingUp, title: "SCALE", desc: "Automate operational workflows, optimize unit economics, and multiply campaign volume.", color: "#ffffff" },
];

const pipeline = ["MARKETING", "LEADS", "SALES", "CUSTOMERS", "REVENUE", "GROWTH"];

export default function GrowthModel() {
  return (
    <section className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Inline Section Heading */}
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6">
            Growth Framework
          </span>
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white mb-8">
            ATTRACT. ENGAGE. CONVERT.{" "}
            <span className="gradient-text">SCALE.</span>
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl text-neutral-200 mb-16 leading-relaxed">
            Our battle-tested four-stage engine for turning market attention into predictable enterprise revenue.
          </p>
        </FadeIn>

        {/* 4 Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto justify-center items-stretch">
          {stages.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.15}>
              <div className="relative p-8 lg:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-center flex flex-col items-center justify-between gap-5 h-full group hover-lift">
                <div className="w-full flex flex-col gap-4 text-center items-center">
                  <div className="w-14 h-14 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-all">
                    <s.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-wider leading-snug text-emerald-400">{s.title}</h3>
                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">{s.desc}</p>
                </div>
                {i < 3 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-emerald-500/40 -translate-y-1/2" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pipeline Bar */}
        <FadeIn>
          <div className="p-8 lg:p-10 rounded-xl glass border border-neutral-800 mt-12 w-full mx-auto max-w-5xl gap-5">
            <p className="text-center text-base font-semibold tracking-wider uppercase mb-6 text-neutral-400">
              Unified End-To-End Execution Lifecycle
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-3 sm:gap-6">
                  <motion.span className="px-4 py-2 rounded-lg text-sm sm:text-base font-semibold tracking-wider bg-neutral-900 border border-neutral-800 text-emerald-400">
                    {step}
                  </motion.span>
                  {i < pipeline.length - 1 && (
                    <div className="h-0.5 bg-emerald-500/40 hidden sm:block w-8 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
