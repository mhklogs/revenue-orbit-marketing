"use client";

import { FadeIn, SectionHeading } from "@/components/Animations";
import { Search, Compass, Hammer, Rocket, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Discover & Audit", desc: "Perform deep discovery into your business model, customer acquisition costs, sales pipeline, and revenue goals." },
  { num: "02", icon: Compass, title: "Strategize & Model", desc: "Design campaign architectures, lead qualification criteria, offshore staffing plans, and automation blueprints." },
  { num: "03", icon: Hammer, title: "Build & Integrate", desc: "Construct high-converting landing pages, paid campaigns, CRM pipelines, agent scripts, and AI systems." },
  { num: "04", icon: Rocket, title: "Deploy & Launch", desc: "Launch targeted acquisition campaigns, trained contact center teams, automated tracking, and real-time dashboards." },
  { num: "05", icon: BarChart3, title: "Measure & Analyze", desc: "Track live lead volume, qualification rates, appointment show rates, acquisition costs, and closed revenue." },
  { num: "06", icon: RefreshCw, title: "Optimize & Scale", desc: "Iteratively refine targeting, sales scripts, automated follow-ups, and workforce capacity to scale profits." },
];

export default function HowWeWork() {
  return (
    <section className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          badge="How We Work"
          title="From Vision to"
          highlight="Flawless Execution"
          subtitle="Six structured execution stages, with clear deliverables and milestones signed off at each step."
        />

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent-light)] border-4 border-[var(--bg-secondary)] z-10" />

                  {/* Content Card */}
                  <div className={`flex-1 ml-12 lg:ml-0 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className={`inline-block p-8 lg:p-10 rounded-2xl glass border border-[var(--border-subtle)] hover-lift max-w-lg text-left ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                      <div className="flex items-center justify-between mb-4 gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-[var(--accent-light)]" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold tracking-wider text-[var(--accent-light)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                          STAGE {step.num}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-3 text-white">{step.title}</h3>
                      <p className="text-base sm:text-lg leading-relaxed text-neutral-300">{step.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden lg:block flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
