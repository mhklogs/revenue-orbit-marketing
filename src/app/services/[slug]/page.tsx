import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { CheckCircle, ArrowRight, Calendar, ShieldCheck, Zap, ChartNoAxesColumn } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service | Revenue Orbit Marketing" };
  return {
    title: `${service.title} | Revenue Orbit Marketing`,
    description: `${service.tagline}. ${service.desc}`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 lg:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
              Solution {service.num}
            </span>
            <h1 className="max-w-4xl mx-auto font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-4">
              {service.title}
            </h1>
            <p className="text-lg lg:text-xl font-semibold text-[var(--accent)] mb-5">{service.tagline}</p>
            <p className="card-body max-w-2xl mx-auto text-lg lg:text-xl text-[var(--text-secondary)] mb-10">
              {service.desc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary"><Zap className="w-4 h-4" /> {service.cta} <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/contact" className="btn-outline"><Calendar className="w-5 h-5 text-[var(--accent)]" /> SCHEDULE A CONSULTATION</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="What You Get" title={`${service.title} Outcomes`} subtitle="The measurable results this service line is engineered to deliver." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.outcomes.map((o) => (
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
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SectionHeading badge="How It Works" title="The Execution" highlight="Workflow" subtitle="A repeatable, disciplined process from discovery to optimization." />
          <div className="space-y-4">
            {service.workflows.map((step, i) => (
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

      {/* SLA / CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <div className="p-8 md:p-12 rounded-3xl border border-[var(--accent)]/30 bg-[var(--bg-card)]">
              <ShieldCheck className="w-14 h-14 text-[var(--accent)] mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-4">
                Backed by SLA-Guaranteed Performance
              </h2>
              <p className="card-body max-w-2xl mx-auto mb-8 text-[var(--text-secondary)]">
                Every {service.title.toLowerCase()} engagement ships with clear service-level agreements, real-time reporting, and a dedicated partner on your account. We measure what matters and optimize until it moves.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">Start with {service.title} <ArrowRight className="w-5 h-5" /></Link>
                <Link href="/contact" className="btn-outline"><ChartNoAxesColumn className="w-5 h-5 text-[var(--accent)]" /> Get a Scoped Blueprint</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href={`/services/${prev.slug}`} className="group p-6 rounded-2xl glass border border-[var(--border-subtle)] hover-lift">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-[var(--text-muted)]">Previous</p>
            <p className="font-bold text-lg group-hover:text-[var(--accent)]" style={{ color: "var(--text-primary)" }}>{prev.title}</p>
          </Link>
          <Link href={`/services/${next.slug}`} className="group p-6 rounded-2xl glass border border-[var(--border-subtle)] hover-lift text-right sm:col-start-2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-[var(--text-muted)]">Next</p>
            <p className="font-bold text-lg group-hover:text-[var(--accent)]" style={{ color: "var(--text-primary)" }}>{next.title}</p>
          </Link>
        </div>
      </section>
    </>
  );
}
