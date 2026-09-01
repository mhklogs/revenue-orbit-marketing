"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/Animations";
import TiltCard from "@/components/TiltCard";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import DetailReveal from "@/components/DetailReveal";
import MobileExpand from "@/components/MobileExpand";

export default function WhatWeDo() {
  return (
    <section id="services" className="relative w-full flex flex-col items-center justify-center mx-auto">
      {/* Header Container */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
            What We Do
          </span>

          {/* Main Title */}
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug text-[var(--text-primary)] mb-8">
            Multiple Solutions. One Growth <span className="gradient-text">Ecosystem.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center mx-auto max-w-3xl text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed mb-16 font-normal">
            Eight dedicated service lines, each custom-engineered around your target metrics — never generic packages.
          </p>
        </FadeIn>

        {/* Grid Layout with detail reveal */}
        <DetailReveal collapsedHeight={720} label="Unhide all solutions">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 w-full max-w-7xl mx-auto justify-center items-stretch">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                {/* Card Container */}
                <TiltCard className="h-full rounded-2xl">
                  <div className="p-4 lg:p-9 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-between h-full hover:border-[var(--accent)]/50 transition-all hover-lift">
                  <div className="flex flex-col items-center w-full gap-3 sm:gap-5">
                    {/* Badge / Number */}
                    <span className="mx-auto text-xs sm:text-base font-semibold tracking-wider font-mono text-[var(--accent)] px-3 py-1 bg-[var(--accent)]/10 rounded-lg inline-block">
                      SOLUTION {s.num}
                    </span>

                    {/* Card Heading */}
                    <h3 className="text-sm sm:text-xl font-bold leading-[1.3] min-h-[2.4em] text-[var(--text-primary)]">{s.title}</h3>
                  </div>

                  {/* Main text + arrow to unhide the body on phones */}
                  <MobileExpand
                    buttonLabel="Unhide solution"
                    preview={<></>}
                  >
                    <p className="card-body text-center text-xs sm:text-base mb-3 sm:mb-4">
                      {s.desc}
                    </p>
                    <a href={`/services/${s.slug}`} className="inline-flex items-center justify-center gap-2 text-xs sm:text-base font-bold text-[var(--accent)] hover:underline">
                      Explore <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </MobileExpand>
                </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </DetailReveal>
      </div>
    </section>
  );
}
