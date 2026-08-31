import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { CheckCircle, ArrowRight, Calendar, ShieldCheck, Zap, ChartNoAxesColumn } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry | Revenue Orbit Marketing" };
  return {
    title: `${industry.title} Growth & Acquisition | Revenue Orbit Marketing`,
    description: `${industry.tagline}. ${industry.overview}`,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return notFound();

  const index = industries.findIndex((i) => i.slug === slug);
  const prev = industries[(index - 1 + industries.length) % industries.length];
  const next = industries[(index + 1) % industries.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 lg:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
              {industry.compliance ? (
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> {industry.compliance}</span>
              ) : (
                "Industry"
              )}
            </span>
            <h1 className="max-w-4xl mx-auto font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-4">
              <span className="gradient-text">{industry.title}</span> Growth &amp; Acquisition
            </h1>
            <p className="text-lg lg:text-xl font-semibold text-[var(--accent)] mb-6">{industry.tagline}</p>
            <p className="card-body max-w-3xl mx-auto text-lg lg:text-xl text-[var(--text-secondary)] mb-10">
              {industry.overview}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary"><Zap className="w-4 h-4" /> Get a {industry.title} Blueprint <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/contact" className="btn-outline"><Calendar className="w-5 h-5 text-[var(--accent)]" /> SCHEDULE A CONSULTATION</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="Capabilities" title={`${industry.title} Solutions`} subtitle="The acquisition and BPO programmes we run for this vertical." />
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industry.items.map((item) => (
              <FadeIn key={item}>
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
                  <CheckCircle className="w-4 h-4 text-[var(--accent)]" /> {item}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="What You Get" title={`${industry.title} Outcomes`} subtitle="The measurable results this vertical is engineered to deliver." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.outcomes.map((o) => (
              <StaggerItem key={o}>
                <div className="p-6 rounded-2xl glass border border-[var(--border-subtle)] text-center h-full flex flex-col items-center justify-center gap-3">
                  <CheckCircle className="w-8 h-8 text-[var(--accent)]" />
                  <p className="font-bold leading-snug" style={{ color: "var(--text-primary)" }}>{o}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="How It Works" title={`Running Your ${industry.title}`} highlight="Campaign" subtitle="A disciplined, compliance-aware process from discovery to scale." />
          <div className="space-y-4">
            {industry.workflows.map((step, i) => (
              <FadeIn key={step} delay={i * 0.06}>
                <div className="flex items-center gap-4 p-5 rounded-2xl glass border border-[var(--border-subtle)]">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center font-bold text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <div className="p-8 md:p-12 rounded-3xl border border-[var(--accent)]/30 bg-[var(--bg-card)]">
              <ShieldCheck className="w-14 h-14 text-[var(--accent)] mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-4">
                Ready to grow your {industry.title.toLowerCase()} pipeline?
              </h2>
              <p className="card-body max-w-2xl mx-auto mb-8 text-[var(--text-secondary)]">
                We come back with a scoped programme, a timeline, and a number — not a brochure. Tell us what you are trying to grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Start with {industry.title} <ArrowRight className="w-5 h-5" /></Link>
                <Link href="/contact" className="btn-outline"><ChartNoAxesColumn className="w-5 h-5 text-[var(--accent)]" /> Get a Scoped Blueprint</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href={`/industries/${prev.slug}`} className="group p-6 rounded-2xl glass border border-[var(--border-subtle)] hover-lift">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-[var(--text-muted)]">Previous Industry</p>
            <p className="font-bold text-lg group-hover:text-[var(--accent)]" style={{ color: "var(--text-primary)" }}>{prev.title}</p>
          </Link>
          <Link href={`/industries/${next.slug}`} className="group p-6 rounded-2xl glass border border-[var(--border-subtle)] hover-lift text-right sm:col-start-2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-[var(--text-muted)]">Next Industry</p>
            <p className="font-bold text-lg group-hover:text-[var(--accent)]" style={{ color: "var(--text-primary)" }}>{next.title}</p>
          </Link>
        </div>
      </section>
    </>
  );
}
