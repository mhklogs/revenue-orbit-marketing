"use client";

import { StaggerContainer, StaggerItem, FadeIn, SectionHeading } from "@/components/Animations";
import { ArrowRight, Radar, Gauge, Target, TrendingUp } from "lucide-react";
import { growthFramework } from "@/lib/data";

const icons: Record<string, React.ElementType> = {
  connect: Radar,
  gauge: Gauge,
  convert: Target,
  scale: TrendingUp,
};

export default function GrowthFramework() {
  return (
    <section id="framework" className="relative w-full">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <SectionHeading
          badge="The Growth Framework"
          title="Connect, Gauge, Convert,"
          highlight="Scale."
          subtitle="One disciplined system that turns every inbound into a predictable, compounding revenue engine."
        />

        {/* Pipeline connector row */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-2">
          {growthFramework.map((stage, i) => (
            <FadeIn key={stage.num} delay={i * 0.08} className="text-center">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">{stage.num}</div>
            </FadeIn>
          ))}
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthFramework.map((stage) => {
            const Icon = icons[stage.icon] ?? Target;
            return (
              <StaggerItem key={stage.num}>
                <div className="relative p-7 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/25 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black gradient-text">{stage.num}</span>
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{stage.title}</h3>
                  </div>
                  <p className="card-body flex-grow">{stage.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Connector arrows under the cards */}
        <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mt-8 px-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 flex items-center">
              <div className="h-px flex-1 bg-[var(--border-subtle)]" />
              <ArrowRight className="w-5 h-5 text-[var(--accent)] mx-2" />
            </div>
          ))}
          <div className="flex-1" />
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <a href="#contact-form" className="btn-primary">
            Start with Connect <ArrowRight className="w-5 h-5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
