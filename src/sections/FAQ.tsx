"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/Animations";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What primary industries does Revenue Orbit Marketing serve?", a: "We serve clients across Legal (PI/MVA), Insurance (Medicare/Life), Real Estate, Home Services (Solar/Roofing/HVAC), Automotive, Financial Services, Tax Relief, Healthcare, Technology/SaaS, and Professional Services." },
  { q: "What customer acquisition models do you provide?", a: "We deliver full-funnel acquisition, exclusive verified leads, TCPA-compliant live warm agent transfers, outbound appointment setting, AI speed-to-lead qualification, and paid digital campaigns." },
  { q: "Do you primarily work with U.S. businesses?", a: "Yes. Revenue Orbit Marketing is built specifically to serve enterprises, agencies, and high-growth mid-market companies across the United States." },
  { q: "How do your BPO and Contact Center solutions operate?", a: "We recruit, train, deploy, and manage dedicated offshore/nearshore professionals (SDRs, BDRs, Intake Specialists, Virtual Assistants) who integrate directly as an extension of your internal team." },
  { q: "Can your systems integrate with our current CRM?", a: "Yes. We support direct bi-directional webhooks and API integrations with Salesforce, HubSpot, GoHighLevel, Zoho, Follow Up Boss, and any platform with REST APIs." },
  { q: "What AI and business automation capabilities do you build?", a: "We engineer 24/7 conversational website AI chatbots, AI voice agents for inbound/outbound calls, automated lead qualification, SMS/email speed-to-lead nurtures, and custom CRM triggers." },
  { q: "How quickly can a campaign or BPO team launch?", a: "Standard campaign launches take approximately 2 to 3 weeks from kickoff to initial volume — encompassing discovery, workflow mapping, script development, system integration, and team calibration." },
  { q: "Are your programs customizable or pre-packaged tiers?", a: "Every program is 100% custom-scoped around your exact target cost-per-acquisition (CPA), qualification requirements, tech stack, and monthly growth milestones." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 py-16 text-center">
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
            Frequently Asked Questions
          </span>
          <h2 className="text-center mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-snug text-[var(--text-primary)] mb-8">
            Clear Answers to Common{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl text-[var(--text-secondary)] mb-16 leading-relaxed font-normal">
            Everything you need to know about our acquisition models, BPO operations, AI tech stack, and onboarding timeline.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto w-full space-y-5 text-left mb-20">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-card)] overflow-hidden transition-all">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left text-lg lg:text-xl font-semibold leading-relaxed text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[var(--accent)] transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
