"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const stages = ["Leads", "Opportunities", "Customers", "Revenue", "Growth"];

export default function LifecycleBar() {
  return (
    <section className="relative w-full clear-both">
      <div className="w-full mx-auto px-6 lg:px-8 -mt-1 relative z-[5] py-16 md:py-24">
        <FadeIn>
          <div
            className="min-h-[64px] w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-6 md:px-10 py-6 rounded-2xl border border-[var(--border-subtle)]"
            style={{ backgroundColor: "var(--dark)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap">
              Growth Lifecycle
            </span>
            <div className="hidden md:block w-px h-8 bg-white/15" />
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {stages.map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <span
                    className="inline-block px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "var(--accent-light)" }}
                  >
                    {stage}
                  </span>
                  {i < stages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[var(--accent)]/70" />
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