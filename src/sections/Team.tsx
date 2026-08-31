"use client";

import { FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";

const roles = [
  "Leadership", "Sales Engineers", "Marketing Strategists", "Software Developers", "AI Specialists",
  "SDRs & BDRs", "Appointment Setters", "Account Executives", "Operations Leads", "Quality Assurance",
];

const leaders = [
  { title: "CEO", role: "Chief Executive Officer", desc: "Strategic vision and growth ecosystem architecture." },
  { title: "MD", role: "Managing Director", desc: "Operational scale, BPO compliance, and partner success." },
  { title: "VP Sales", role: "Head of Sales & Acquisition", desc: "Pipeline velocity, SDR management, and conversion SLAs." },
  { title: "CTO", role: "Head of Tech & AI", desc: "CRM automation, AI voice agent infrastructure, and data pipelines." },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          badge="Our People"
          title="The Human Workforce Behind the"
          highlight="Technology"
          subtitle="Technology creates massive leverage. People build lasting relationships. ROM unifies both into one formidable organization."
        />

        {/* Role Tags */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 max-w-3xl mx-auto mb-14">
            {roles.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full text-sm font-semibold leading-none glass border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all cursor-default"
                style={{ color: "var(--text-secondary)" }}
              >
                {role}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Leader Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto justify-center items-stretch">
          {leaders.map((leader) => (
            <StaggerItem key={leader.title}>
              <div className="p-6 lg:p-8 rounded-2xl glass border border-[var(--border-subtle)] text-center hover-lift h-full flex flex-col justify-between gap-5 items-center">
                <div className="w-full flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-[var(--accent-light)]">{leader.title}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-[1.3] min-h-[2.6em] text-[var(--text-primary)]">{leader.role}</h3>
                  <p className="text-sm font-semibold tracking-wider uppercase mb-1 text-[var(--accent-light)]">Revenue Orbit Marketing</p>
                  <p className="card-body text-center">{leader.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
