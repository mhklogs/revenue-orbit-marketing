"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/Animations";
import { faqs } from "@/lib/data";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeading
          badge="Questions"
          title="The Things Clients"
          highlight="Ask First"
          subtitle="Straight answers on scope, quality, integration, and how a programme actually starts."
        />

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={f.q} delay={i * 0.05}>
                <div className={`rounded-2xl glass border ${isOpen ? "border-[var(--accent)]/40" : "border-[var(--border-subtle)]"} overflow-hidden transition-colors`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-lg leading-snug" style={{ color: "var(--text-primary)" }}>{f.q}</span>
                    <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-5 h-5 text-[var(--accent)]" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-6 pb-6 card-body text-[var(--text-secondary)]">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.15} className="mt-10 text-center">
          <a href="#contact-form" className="inline-flex items-center gap-2 btn-outline">
            <MessageCircleQuestion className="w-5 h-5 text-[var(--accent)]" /> Ask Us Directly
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
