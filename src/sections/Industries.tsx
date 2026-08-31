"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/Animations";
import { Scale, Shield, Home, Wrench, Car, DollarSign, Receipt, Heart, Cpu, Briefcase, ChevronRight } from "lucide-react";

const industries = [
  { num: "01", icon: Scale, title: "Legal", items: ["Personal Injury Intake", "MVA Claimants", "Mass Tort Litigation", "Legal Lead Intake", "Claimant Qualification", "Law Firm Appointment Setting"] },
  { num: "02", icon: Shield, title: "Insurance", items: ["Medicare Advantage", "Final Expense", "Life Insurance", "Auto Insurance", "Compliant Transfer Gen", "Live Agent Transfers"] },
  { num: "03", icon: Home, title: "Real Estate", items: ["Realtors & Brokerages", "Wholesale Investors", "Motivated Seller Leads", "Property Managers", "Buyer Lead Systems", "Real Estate CRM Nurture"] },
  { num: "04", icon: Wrench, title: "Home Services", items: ["Roofing Contractors", "Solar Installers", "HVAC Specialists", "Remodeling & Additions", "Plumbing Teams", "Home Improvement Demand"] },
  { num: "05", icon: Car, title: "Automotive", items: ["Dealership Services", "Automotive Buyer Leads", "Service Department Booking", "Customer Retention Systems"] },
  { num: "06", icon: DollarSign, title: "Financial Services", items: ["Commercial Lending", "Debt Relief & Settlement", "Wealth Management", "Fintech Customer Acquisition"] },
  { num: "07", icon: Receipt, title: "Tax Services", items: ["Tax Preparation Firms", "Tax Relief & Resolution", "Resolution Intake", "Consultation Setting"] },
  { num: "08", icon: Heart, title: "Healthcare", items: ["Patient Scheduling", "BPO Admin Support", "Telehealth Onboarding", "Medical Billing Care"] },
  { num: "09", icon: Cpu, title: "Technology & SaaS", items: ["B2B SaaS Growth", "Tech Customer Support", "User Onboarding", "Product Lead Qualification"] },
  { num: "10", icon: Briefcase, title: "Professional Services", items: ["B2B Enterprise Growth", "Management Consulting", "Corporate Agencies", "Executive Search Solutions"] },
];

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
            Industries
          </span>
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug text-[var(--text-primary)] mb-8">
            Built for High-Growth{" "}
            <span className="gradient-text">U.S. Verticals</span>
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl text-[var(--text-secondary)] mb-16 leading-relaxed">
            Deep domain expertise across ten core industries, with active acquisition &amp; BPO programs deployed in each.
          </p>
        </FadeIn>

        {/* Tab Strip */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto w-full">
            {industries.map((ind, i) => (
              <button
                key={ind.title}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  active === i
                    ? "bg-[var(--accent)] text-white border-[var(--accent)] font-bold"
                    : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                }`}
              >
                {ind.title}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Display Panel */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto w-full p-6 md:p-9 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-center gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-6 w-full"
              >
                {/* Panel Title */}
                <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-[var(--text-primary)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                    {(() => {
                      const Icon = industries[active].icon;
                      return <Icon className="w-5 h-5 text-[var(--accent)]" />;
                    })()}
                  </div>
                  {industries[active].title} Solutions
                </h3>

                {/* Workflows Container */}
                <div className="flex flex-wrap justify-center gap-3 my-4">
                  {industries[active].items.map((item) => (
                    <div key={item} className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm font-medium text-[var(--text-secondary)]">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-base font-bold bg-[var(--accent)] text-white mt-2 hover:bg-[var(--accent-light)] transition-colors"
                >
                  Explore {industries[active].title} Solutions <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
