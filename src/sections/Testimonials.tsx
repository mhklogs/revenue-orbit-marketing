"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/Animations";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import MobileExpand from "@/components/MobileExpand";

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

const reviewGrid = [
  {
    name: "Elena Marsh",
    company: "BrightPath Home Solutions",
    position: "Director of Sales",
    industry: "Home Services",
    text: "Appointments that actually show up. ROM booked verified homeowner jobs into our installers' diaries and our no-show rate dropped nearly to zero. Best demand partner we've used.",
    stars: 5,
  },
  {
    name: "Tom Okafor",
    company: "Meridian Lending Group",
    position: "Head of Acquisition",
    industry: "Financial Services",
    text: "Every lead comes qualified on intent and affordability. Our advisers stopped wasting time on tire-kickers and started closing. ROI has been consistently above what we budgeted.",
    stars: 5,
  },
  {
    name: "Priya Raman",
    company: "NorthStar Care Network",
    position: "Practice Administrator",
    industry: "Healthcare",
    text: "Scheduling, eligibility checks, telehealth onboarding — all handled by HIPAA-trained ROM staff who feel like our own team. Our calendars are full and our admin burden is gone.",
    stars: 5,
  },
  {
    name: "Jake Whitfield",
    company: "Cloudline SaaS",
    position: "VP of Customer Success",
    industry: "Technology & SaaS",
    text: "Tiered support and onboarding handled end to end. Our tier-1 resolution time dropped and our activation rate climbed. Their teams are a genuine extension of our own.",
    stars: 5,
  },
  {
    name: "Dana Osei",
    company: "Legacy Advisory Partners",
    position: "Managing Principal",
    industry: "Professional Services",
    text: "Only senior conversations worth our principals' time reach the calendar. ROM's B2B prospecting and scheduling changed how we manage our executive pipeline.",
    stars: 5,
  },
  {
    name: "Raymond Cruz",
    company: "Unity Roofing Group",
    position: "Operations Director",
    industry: "Home Services",
    text: "From first call to booked installation, ROM keeps every job moving. Verification, qualification, and follow-up all handled. We simply work the diary they fill.",
    stars: 5,
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
            <div className="p-6 lg:p-9 rounded-2xl glass text-center border border-[var(--border-subtle)]">
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
                  <h3 className="text-xl font-bold leading-[1.3] min-h-[2.6em] text-[var(--text-primary)]">{testimonials[current].name}</h3>
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

        {/* Review grid — one wide column on phones (main text + arrow to unhide), 2–3 across on desktop */}
        <div className="relative max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {reviewGrid.map((r) => (
            <FadeIn key={r.name} className="text-left">
              <div className="h-full p-4 sm:p-7 rounded-2xl glass border border-[var(--border-subtle)] hover-lift flex flex-col">
                <MobileExpand
                  preview={
                    <>
                      <div className="flex gap-1 mb-3 sm:mb-4 text-amber-400">
                        {[...Array(r.stars)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-11 h-11 shrink-0 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/25 flex items-center justify-center font-bold text-[var(--accent)]">
                          {r.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                        <div>
                          <p className="font-bold leading-tight" style={{ color: "var(--text-primary)" }}>{r.name}</p>
                          <p className="text-sm text-[var(--text-muted)]">{r.position}, {r.company}</p>
                          <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                            {r.industry}
                          </span>
                        </div>
                      </div>
                    </>
                  }
                >
                  <p className="card-body pt-4 text-[var(--text-secondary)] text-xs sm:text-base">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </MobileExpand>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
