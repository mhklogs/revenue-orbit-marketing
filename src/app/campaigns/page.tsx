import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { Building2, Shield, Stethoscope, Wrench, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Campaigns & Results | Revenue Orbit Marketing",
  description: "Live campaign metrics, performance case studies and proof points across legal, insurance, real estate and more.",
};

const metrics = [
  { value: "50K+", label: "QUALIFIED OPPORTUNITIES PROCESSED" },
  { value: "10K+", label: "APPOINTMENTS BOOKED" },
  { value: "32%", label: "AVERAGE CONVERSION BOOST" },
  { value: "2.5x", label: "AVERAGE CLIENT CAMPAIGN ROI" },
];

const campaigns = [
  { icon: Building2, title: "Real Estate Lead Generation", desc: "Motivated seller and buyer leads pre-verified and qualified directly for real estate professionals.", outcome: "Qualified Appointments" },
  { icon: Shield, title: "MVA & Personal Injury Intake", desc: "Time-critical intake for law firm partners — verified claimants ready for retainer execution.", outcome: "Signed Retainers" },
  { icon: Stethoscope, title: "Insurance Acquisition", desc: "Medicare Advantage, final expense, auto, and life campaigns — compliant TCPA live agent transfers.", outcome: "Verified Transfers" },
  { icon: Wrench, title: "HVAC, Solar & Trades Growth", desc: "Roofing, solar, HVAC, and remodeling demand — pre-booked straight into your sales rep diaries.", outcome: "Held Appointments" },
];

const caseStudies = [
  { client: "National Legal Practice", industry: "Legal", challenge: "High cost-per-acquisition & intake latency", strategy: "24/7 AI qualification & warm transfer team", result: "42% CPA Reduction" },
  { client: "Premier Insurance Group", industry: "Insurance", challenge: "Lead decay & low appointment show rate", strategy: "Outbound SDR setting & automated SMS nurture", result: "88% Show Rate" },
  { client: "National Real Estate Group", industry: "Real Estate", challenge: "Inconsistent seller lead pipeline bottlenecks", strategy: "Full-funnel seller acquisition & CRM sync", result: "4.2x Deal Expansion" },
];

export default function CampaignsPage() {
  return (
    <>
      <section className="pt-40 lg:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
              Active Campaigns & Results
            </span>
            <h1 className="max-w-4xl mx-auto font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-5">
              Growth Your Team Can <span className="gradient-text">Measure</span>
            </h1>
            <p className="card-body max-w-2xl mx-auto text-lg lg:text-xl text-[var(--text-secondary)]">
              Live campaign metrics, performance case studies and proof points across the verticals we serve today.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Proven Track Record" title="We Measure What" highlight="Truly Matters" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="p-8 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full text-center flex flex-col items-center justify-center gap-3">
                  <p className="font-black text-[var(--accent)] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>{m.value}</p>
                  <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>{m.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Live Programs" title="Engineered Solutions for Real-World" highlight="Growth" subtitle="Battle-tested operational programs delivering results across target verticals today." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaigns.map((c) => (
              <StaggerItem key={c.title}>
                <div className="p-6 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                  <p className="card-body flex-1 text-sm">{c.desc}</p>
                  <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">{c.outcome}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/campaigns-analytics.jpg"
              alt="Campaign analytics dashboard tracking qualified opportunities and booked appointments"
              className="w-full max-h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/90 via-transparent to-[var(--bg-secondary)]/10 pointer-events-none" />
          </div>
          <SectionHeading badge="Case Studies" title="Growth Partner Results You Can" highlight="Measure" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <StaggerItem key={c.client}>
                <div className="p-7 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col gap-5">
                  <div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">{c.industry}</span>
                    <h3 className="text-xl font-bold mt-3" style={{ color: "var(--text-primary)" }}>{c.client}</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div><p className="font-semibold mb-1" style={{ color: "var(--text-muted)" }}>Challenge</p><p style={{ color: "var(--text-secondary)" }}>{c.challenge}</p></div>
                    <div><p className="font-semibold mb-1" style={{ color: "var(--text-muted)" }}>Strategy</p><p style={{ color: "var(--text-secondary)" }}>{c.strategy}</p></div>
                    <div className="border-t border-[var(--border-subtle)] pt-4">
                      <p className="font-black text-[var(--accent)]" style={{ fontSize: "1.75rem" }}>{c.result}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="mt-16 text-center space-y-4">
              <TrendingUp className="w-10 h-10 text-[var(--accent)] mx-auto" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">Want results like these?</h2>
              <p className="card-body max-w-xl mx-auto text-[var(--text-secondary)]">Every campaign is custom-scoped around your target cost-per-acquisition and growth milestones.</p>
              <Link href="/contact" className="btn-primary inline-flex">Start Your Campaign <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
