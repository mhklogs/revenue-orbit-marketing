"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/Animations";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    client: "National Legal Practice",
    industry: "Legal",
    challenge: "High cost-per-acquisition & intake latency",
    strategy: "24/7 AI qualification & warm transfer team",
    result: "42% CPA Reduction",
  },
  {
    client: "Premier Insurance Group",
    industry: "Insurance",
    challenge: "Lead decay & low appointment show rate",
    strategy: "Outbound SDR setting & automated SMS nurture",
    result: "88% Show Rate",
  },
  {
    client: "National Real Estate Group",
    industry: "Real Estate",
    challenge: "Inconsistent seller lead pipeline bottlenecks",
    strategy: "Full-funnel seller acquisition & CRM sync",
    result: "4.2x Deal Expansion",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
            Case Studies
          </span>
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug text-[var(--text-primary)] mb-8">
            Growth Partner Results You Can{" "}
            <span className="gradient-text">Measure</span>
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl text-[var(--text-secondary)] mb-16 leading-relaxed font-normal">
            Empirical proof of how ROM transforms client acquisition and operational unit economics.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mx-auto justify-center items-stretch">
          {caseStudies.map((c) => (
            <StaggerItem key={c.client}>
              <div className="p-6 lg:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-between gap-6 h-full hover-lift">
                <div className="w-full flex flex-col items-center gap-5">
                  {/* Client Title */}
                  <h3 className="text-xl font-bold leading-[1.3] min-h-[2.6em] text-[var(--text-primary)]">{c.client}</h3>
                  <span className="text-sm sm:text-base font-semibold tracking-wider px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] inline-block">
                    {c.industry}
                  </span>

                  {/* Data Metrics List */}
                  <div className="w-full space-y-5 my-4 text-center">
                    <div>
                      <span className="text-sm font-semibold tracking-wider text-[var(--text-secondary)] block mb-2">Challenge</span>
                      <span className="card-body block">{c.challenge}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold tracking-wider text-[var(--text-secondary)] block mb-2">Strategy</span>
                      <span className="card-body block">{c.strategy}</span>
                    </div>
                    <div className="border-t border-[var(--border-subtle)] pt-5">
                      <span className="text-sm font-semibold tracking-wider text-[var(--text-secondary)] block mb-2">Verified Result</span>
                      <span className="font-black text-[var(--accent)] block leading-snug" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>{c.result}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Link */}
                <a
                  href="#contact-form"
                  className="pt-6 border-t border-[var(--border-subtle)] w-full mt-auto text-base font-bold text-[var(--accent)] hover:underline inline-flex items-center justify-center gap-2"
                >
                  View Case Study Breakdown <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
