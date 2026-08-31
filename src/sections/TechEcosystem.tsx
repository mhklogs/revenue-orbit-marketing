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
          <div className="relative p-8 lg:p-10 rounded-2xl glass border border-[var(--border-subtle)] gap-5">
            {/* Flow Grid */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {nodes.map((node, i) => (
                <div key={node.label} className="flex items-center gap-3 sm:gap-4">
                  <motion.div
                    className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] min-w-[120px] hover-lift"
                    whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center">
                      <node.icon className="w-6 h-6 text-[var(--accent-light)]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-center text-white">{node.label}</span>
                  </motion.div>
                  {i < nodes.length - 1 && (
                    <motion.div
                      className="w-6 sm:w-8 h-0.5 bg-[var(--accent)]/40 hidden sm:block rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center pt-6 border-t border-[var(--border-subtle)]">
              <p className="text-base sm:text-lg font-semibold tracking-wide leading-relaxed" style={{ color: "var(--accent-light)" }}>
                Every data point connected. Every conversion tracked in real time.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
