import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Services | Revenue Orbit Marketing",
  description: "Explore ROM's full-spectrum BPO, AI, and acquisition service directory — eight core service lines under one growth ecosystem.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 lg:pt-44 pb-16 md:pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
              Our Services
            </span>
            <h1 className="max-w-4xl mx-auto font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-5">
              One Partner. Eight Growth <span className="gradient-text">Engines.</span>
            </h1>
            <p className="card-body max-w-2xl mx-auto text-lg lg:text-xl text-[var(--text-secondary)]">
              Full-spectrum BPO, AI, and acquisition services engineered around your target metrics — never generic packages.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="block">
                  <div className="p-7 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-[var(--accent)] px-3 py-1 bg-[var(--accent)]/10 rounded-lg inline-block self-start mb-5">
                      SOLUTION {s.num}
                    </span>
                    <h3 className="text-xl font-bold leading-[1.3] mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                    <p className="text-sm font-semibold text-[var(--accent)] mb-3">{s.tagline}</p>
                    <p className="card-body flex-1 mb-6">{s.desc}</p>
                    <a href={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all">
                      Explore Service <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="mt-16 p-8 md:p-12 rounded-3xl text-center border border-[var(--accent)]/30 bg-[var(--bg-card)]">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-4">Not sure where to start?</h2>
              <p className="card-body max-w-2xl mx-auto mb-8 text-[var(--text-secondary)]">
                Every engagement is custom-scoped. Tell us your revenue goal and we&apos;ll architect the right mix of service lines to hit it.
              </p>
              <Link href="/contact" className="btn-primary">Get a Scoped Blueprint <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
