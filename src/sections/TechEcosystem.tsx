"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/Animations";
import {
  Globe, Megaphone, FileText, Database, Bot, MessageSquare,
  Phone, Users, BarChart3, TrendingUp,
} from "lucide-react";

const nodes = [
  { icon: Globe, label: "Web Assets" },
  { icon: Megaphone, label: "Paid Ads" },
  { icon: FileText, label: "Intake Forms" },
  { icon: Database, label: "Unified CRM" },
  { icon: Bot, label: "AI Automation" },
  { icon: MessageSquare, label: "SMS & Email" },
  { icon: Phone, label: "Contact Center" },
  { icon: Users, label: "Sales Reps" },
  { icon: BarChart3, label: "Realtime BI" },
  { icon: TrendingUp, label: "Scale & ROI" },
];

export default function TechEcosystem() {
  return (
    <section className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          badge="Tech &amp; AI Infrastructure"
          title="Technology Infrastructure Behind"
          highlight="Scalable Growth"
          subtitle="ROM seamlessly synchronizes modern software architecture with high-performing human execution."
        />

        <FadeIn>
          <div className="relative p-6 lg:p-8 rounded-2xl glass border border-[var(--border-subtle)]">
            {/* Flow Grid — single horizontal pipeline with arrow connectors, scrollable when tight */}
            <div className="flex items-stretch justify-start lg:justify-between gap-2 overflow-x-auto pb-4 w-full">
              {nodes.map((node, i) => (
                <div key={node.label} className="flex items-center shrink-0 gap-2">
                  <motion.div
                    className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] min-w-[118px] hover-lift"
                    whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center">
                      <node.icon className="w-6 h-6 text-[var(--accent-light)]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-center text-[var(--text-primary)]">{node.label}</span>
                  </motion.div>
                  {i < nodes.length - 1 && (
                    <svg
                      className="w-6 h-6 shrink-0 text-[var(--accent)]/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <polyline points="15 6 21 12 15 18" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center pt-6 border-t" style={{ borderColor: "rgba(15, 118, 110, 0.3)" }}>
              <p className="text-base sm:text-lg font-semibold tracking-wide leading-relaxed" style={{ color: "var(--accent)" }}>
                Every data point connected. Every conversion tracked in real time.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
