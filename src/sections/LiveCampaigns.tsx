"use client";

import { StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { Building2, Shield, Stethoscope, Wrench, CalendarCheck, Bot, Headphones, BarChart3, ArrowRight } from "lucide-react";

const campaigns = [
  { icon: Building2, title: "Real Estate Lead Generation", desc: "Motivated seller and buyer leads pre-verified and qualified directly for real estate professionals.", outcome: "Qualified Appointments" },
  { icon: Shield, title: "MVA & Personal Injury Intake", desc: "Time-critical intake for law firm partners — verified claimants ready for retainer execution.", outcome: "Signed Retainers" },
  { icon: Stethoscope, title: "Insurance Acquisition", desc: "Medicare Advantage, final expense, auto, and life campaigns — compliant TCPA live agent transfers.", outcome: "Verified Transfers" },
  { icon: Wrench, title: "Home Services Growth", desc: "Roofing, solar, HVAC, and remodeling demand — pre-booked straight into your sales rep diaries.", outcome: "Held Appointments" },
  { icon: CalendarCheck, title: "Dedicated Appointment Setting", desc: "Outbound SDR teams booking qualified sales conversations directly onto your team calendars.", outcome: "Calendar Bookings" },
  { icon: Bot, title: "AI Lead Qualification", desc: "Intelligent AI agents evaluating, scoring, and routing incoming leads within seconds of submission.", outcome: "Scored Leads" },
  { icon: Headphones, title: "BPO Customer Support", desc: "Professional omnichannel support and contact center management for enterprise scale.", outcome: "Resolved SLA Tickets" },
  { icon: BarChart3, title: "CRM Pipeline Automation", desc: "Synchronize marketing campaigns, sales pipelines, and customer data into one automated stack.", outcome: "Connected Systems" },
];

export default function LiveCampaigns() {
  return (
    <section id="solutions" className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          badge="Active Solutions"
          title="Engineered Solutions for Real-World"
          highlight="Growth"
          subtitle="Battle-tested operational programs actively delivering results across target U.S. verticals today."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl mx-auto justify-center items-stretch">
          {campaigns.map((c) => (
            <StaggerItem key={c.title}>
              <div className="group p-8 lg:p-10 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col gap-5 text-center items-center justify-between">
                <div className="w-full flex flex-col gap-4 text-center items-center">
                  <div className="w-14 h-14 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center mb-2 group-hover:bg-[var(--accent)]/25 transition-all">
                    <c.icon className="w-7 h-7 text-[var(--accent-light)]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug text-[var(--text-primary)]">{c.title}</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">{c.desc}</p>
                </div>
                <div className="w-full mt-auto pt-6 border-t border-[var(--border-subtle)] flex flex-col items-center gap-4">
                  <div>
                    <span className="text-sm sm:text-base font-semibold tracking-wider uppercase text-[var(--accent-light)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                      {c.outcome}
                    </span>
                  </div>
                  <a href="#contact-form" className="inline-flex items-center gap-2 text-base font-bold text-[var(--accent-light)] hover:gap-3 transition-all">
                    Learn Solution <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
