"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/Animations";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Vance",
    company: "Apex Legal Partners",
    position: "Managing Partner",
    industry: "Legal / Personal Injury",
    text: "ROM transformed our intake operation overnight. Their combination of targeted digital acquisition and 24/7 speed-to-lead qualification cut our cost-per-retained-case by 40% while boosting our intake volume.",
  },
  {
    name: "Sarah Jenkins",
    company: "Summit Horizon Realty",
    position: "VP of Business Development",
    industry: "Real Estate",
    text: "Partnering with ROM gave us an end-to-end growth system. They handle the seller lead generation and SDR setting, allowing our agents to focus purely on closing property contracts.",
  },
  {
    name: "David Sterling",
    company: "Sentinel Assurance Corp",
    position: "Chief Revenue Officer",
    industry: "Insurance / Medicare",
    text: "ROM's BPO contact center teams operate seamlessly as an extension of our internal staff. Their compliance adherence, transfer hold rates, and speed are unmatched in the industry.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          badge="Client Endorsements"
          title="What Our Business Partners"
          highlight="Say About ROM"
          subtitle="Direct feedback from enterprise leaders who rely on ROM for acquisition, BPO, and growth automation."
        />

        <FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <div className="p-8 lg:p-12 rounded-2xl glass text-center border border-[var(--border-subtle)]">
              <div className="flex justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400" />
                ))}
              </div>

              <Quote className="w-10 h-10 text-[var(--accent)]/30 mx-auto mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-lg lg:text-xl leading-relaxed italic mb-8 text-[var(--text-secondary)]">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug text-[var(--text-primary)]">{testimonials[current].name}</h3>
                  <p className="text-base sm:text-lg font-medium text-[var(--accent)] mt-1">{testimonials[current].position}, {testimonials[current].company}</p>
                  <span className="inline-block mt-4 px-4 py-1.5 rounded-full text-sm sm:text-base font-semibold tracking-wider uppercase bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                    {testimonials[current].industry}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))}
                className="p-3 rounded-lg glass border border-[var(--border-subtle)] hover:bg-[var(--accent)]/15 transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-[var(--text-primary)]" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-[var(--accent-light)]" : "w-2.5 bg-[var(--accent)]/30"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))}
                className="p-3 rounded-lg glass border border-[var(--border-subtle)] hover:bg-[var(--accent)]/15 transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6 text-[var(--text-primary)]" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
