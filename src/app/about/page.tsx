import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { Target, Eye, ShieldCheck, CheckCircle, ArrowRight, Award, HeartHandshake, Shield, Gem, Compass, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Revenue Orbit Marketing",
  description: "One Partner. Multiple Growth Engines. Meet the team behind Revenue Orbit Marketing — mission, vision, leadership, values, compliance and SLA guarantees.",
};

const variables = [
  "Target Customers",
  "Sales Cycles",
  "Acquisition Costs",
  "Operational Workflows",
  "Tech Stack & Tools",
  "Compliance Rules",
];

const leaders = [
  { title: "CEO", role: "Chief Executive Officer", desc: "Strategic vision and growth ecosystem architecture." },
  { title: "MD", role: "Managing Director", desc: "Operational scale, BPO compliance, and partner success." },
  { title: "VP Sales", role: "Head of Sales & Acquisition", desc: "Pipeline velocity, SDR management, and conversion SLAs." },
  { title: "CTO", role: "Head of Tech & AI", desc: "CRM automation, AI voice agent infrastructure, and data pipelines." },
];

const reasons = [
  "Revenue-First Mindset",
  "Customized Architecture",
  "Technology-Driven Infrastructure",
  "Performance & SLA Focused",
  "Scalable Infrastructure",
  "Single Unified Growth Ecosystem",
];

const teamRoles = [
  "Leadership", "Sales Engineers", "Marketing Strategists", "Software Developers", "AI Specialists",
  "SDRs & BDRs", "Appointment Setters", "Account Executives", "Operations Leads", "Quality Assurance",
];

const slaGuarantees = [
  "99% SLA compliance rate across active programs",
  "96% client retention across the partner network",
  "24-hour scoped blueprint on every new engagement",
  "Real-time reporting on leads, transfers, and outcomes",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 lg:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
              About Us
            </span>
            <h1 className="max-w-4xl mx-auto font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-5">
              One Partner. <span className="gradient-text">Multiple Growth Engines.</span>
            </h1>
            <p className="card-body max-w-2xl mx-auto text-lg lg:text-xl text-[var(--text-secondary)]">
              Your business shouldn&apos;t need ten different partners to generate customers, manage conversations, automate operations and scale. Revenue Orbit Marketing brings all critical revenue functions together under one seamless growth ecosystem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Key Operational Variables */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionHeading badge="How We Work" title="Key Operational" highlight="Variables" subtitle="Every business operates around distinct structural variables. We build around yours." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {variables.map((v) => (
              <StaggerItem key={v}>
                <div className="px-6 py-5 rounded-xl glass border border-[var(--border-subtle)] text-center font-semibold" style={{ color: "var(--text-secondary)" }}>
                  {v}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="p-8 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full text-center flex flex-col items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Mission</h2>
              <p className="card-body">Empower enterprise and scaling businesses through measurable customer acquisition, intelligent technology, high-performing BPO outsourcing, and reliable revenue engines.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full text-center flex flex-col items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Vision</h2>
              <p className="card-body">To become the premier growth and technology partner for U.S. enterprises seeking to acquire customers, optimize unit economics, and build automated future-proof operations.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Process" title="From Discovery to" highlight="Optimization" subtitle="A disciplined, repeatable engagement lifecycle." />
          <div className="space-y-4">
            {["Discovery & audit", "Scoped blueprint & SLA", "Team build & calibration", "Launch & integration", "Optimization & scale"].map((step, i) => (
              <FadeIn key={step} delay={i * 0.06}>
                <div className="flex items-center gap-4 p-5 rounded-2xl glass border border-[var(--border-subtle)]">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center font-bold text-[var(--accent)]">{i + 1}</span>
                  <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Why Choose Us" title="Six Reasons Clients" highlight="Stay" subtitle="The standards we hold and the value we protect." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <StaggerItem key={r}>
                <div className="p-6 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-1 text-[var(--accent)]" />
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{r}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Values" title="The Standards We" highlight="Hold" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Relentless pursuit of measurable outcomes and quality in every deliverable." },
              { icon: HeartHandshake, title: "Partnership", desc: "We win when our clients win. Long-term alignment over short-term gain." },
              { icon: Shield, title: "Integrity", desc: "Compliance-first, transparent reporting, and honest recommendations." },
              { icon: Gem, title: "Craft", desc: "Every workflow, script, and system is engineered with obsessive attention to detail." },
              { icon: Compass, title: "Accountability", desc: "Clear SLAs and ownership — we measure what matters and own the results." },
              { icon: Scale, title: "Fairness", desc: "Ethical standards across every campaign and every teammate we deploy." },
            ].map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-7 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full text-center flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                    <v.icon className="w-7 h-7 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                  <p className="card-body">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Compliance & SLA */}
      <section id="compliance" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Compliance & SLA" title="Privacy, Security &" highlight="SLA Guarantees" subtitle="Compliance isn't a checkbox — it's engineered into every system we deploy." />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slaGuarantees.map((g) => (
              <StaggerItem key={g}>
                <div className="p-6 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex items-center gap-4">
                  <ShieldCheck className="w-8 h-8 shrink-0 text-[var(--accent)]" />
                  <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{g}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Leadership" title="Message from the" highlight="CEO & MD" subtitle="Technology creates massive leverage. People build lasting relationships. ROM unifies both." />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((l) => (
              <StaggerItem key={l.title}>
                <div className="p-8 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full text-center flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[var(--accent)]">{l.title}</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{l.role}</h3>
                  <p className="card-body">{l.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Our Team" title="The People Behind" highlight="The Work" subtitle="A formidable mix of human talent and technology." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamRoles.map((r) => (
              <StaggerItem key={r}>
                <div className="px-5 py-4 rounded-xl glass border border-[var(--accent)]/20 text-center font-semibold" style={{ color: "var(--text-secondary)" }}>{r}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn>
            <div className="mt-16 text-center">
              <Link href="/contact" className="btn-primary">Work With Our Team <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
