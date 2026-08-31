"use client";

import { StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { Target, Puzzle, Cpu, TrendingUp, Layers, Users } from "lucide-react";

const reasons = [
  { num: "01", icon: Target, title: "Revenue-First Mindset", desc: "Everything starts with your revenue targets. We align every operational activity to your clear bottom-line goals." },
  { num: "02", icon: Puzzle, title: "Customized Architecture", desc: "Zero rigid packaged solutions. Every workflow is engineered around your existing funnel, software, and unit economics." },
  { num: "03", icon: Cpu, title: "Technology-Driven Infrastructure", desc: "Modern CRM, automation triggers, real-time analytics, and custom AI to maximize efficiency and reduce unit cost." },
  { num: "04", icon: TrendingUp, title: "Performance & SLA Focused", desc: "We track metrics that truly matter: Leads, Qualified Opportunities, Appointment Show Rates, Customers, and CAC." },
  { num: "05", icon: Layers, title: "Scalable Infrastructure", desc: "Offshore/nearshore workforce and tech pipelines engineered to scale from 10 to 10,000 requests without breaking." },
  { num: "06", icon: Users, title: "Single Unified Growth Ecosystem", desc: "Customer acquisition, sales, BPO, AI, and business automation consolidated seamlessly under one single partner." },
];

export default function WhyROM() {
  return (
    <section id="why-rom" className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          badge="Why ROM"
          title="Why Businesses Choose"
          highlight="Revenue Orbit Marketing"
          subtitle="Six core reasons industry leaders trust ROM as their primary growth engine."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto justify-center items-stretch">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="group p-8 lg:p-10 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full relative overflow-hidden flex flex-col gap-5 text-center items-center justify-between">
                <div className="absolute top-4 right-4 text-5xl font-extrabold opacity-10 group-hover:opacity-20 transition-opacity z-0 pointer-events-none select-none" style={{ color: "var(--accent)" }}>
                  {r.num}
                </div>
                <div className="relative z-10 w-full flex flex-col gap-4 text-center items-center">
                  <div className="w-14 h-14 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center mb-2 group-hover:bg-[var(--accent)]/25 transition-colors">
                    <r.icon className="w-7 h-7 text-[var(--accent-light)]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-2 text-[var(--text-primary)]">{r.title}</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">{r.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
