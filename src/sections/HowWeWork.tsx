"use client";

import TiltCard from "@/components/TiltCard";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full max-w-7xl mx-auto justify-center items-stretch">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
<TiltCard className="h-full rounded-2xl">
              <div className="relative p-6 lg:p-9 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col gap-4 text-center items-center justify-between">
                <div className="w-full flex flex-col gap-4 text-center items-center">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[var(--accent-light)]" />
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-[var(--accent-light)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                    STAGE {step.num}
                  </span>
                  <h3 className="text-xl font-bold leading-[1.3] min-h-[2.6em] text-[var(--text-primary)]">{step.title}</h3>
                  <p className="card-body">{step.desc}</p>
                </div>
              </div>
</TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
