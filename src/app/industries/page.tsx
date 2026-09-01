import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Revenue Orbit Marketing",
  description: "High-growth U.S. verticals matrix with compliance breakdowns — legal, insurance, healthcare, financial services, home services, technology & SaaS, and professional services.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-40 lg:pt-44 pb-16 md:pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
              Industries
            </span>
            <h1 className="max-w-4xl mx-auto font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-5">
              High-Growth <span className="gradient-text">U.S. Verticals</span>
            </h1>
            <p className="card-body max-w-2xl mx-auto text-lg lg:text-xl text-[var(--text-secondary)]">
              Deep domain expertise across core industries, with active acquisition and BPO programs deployed in each.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <div className="p-7 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col scroll-mt-32">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-[1.3]" style={{ color: "var(--text-primary)" }}>{ind.title}</h3>
                    {ind.compliance && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                        <ShieldCheck className="w-3.5 h-3.5" /> {ind.compliance}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-[var(--accent)] mb-5">{ind.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ind.items.map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle className="w-3 h-3 text-[var(--accent)]" /> {item}
                      </span>
                    ))}
                  </div>
                  <Link href={`/industries/${ind.slug}`} className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all">
                    Explore {ind.title} Solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
