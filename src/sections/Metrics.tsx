"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { FadeIn } from "@/components/Animations";

const primaryMetrics = [
  { label: "QUALIFIED OPPORTUNITIES PROCESSED", target: 500000, suffix: "+" },
  { label: "APPOINTMENTS BOOKED", target: 120000, suffix: "+" },
  { label: "AVERAGE CONVERSION BOOST", target: 42, suffix: "%" },
];

const secondaryMetrics = [
  "3.8x AVERAGE CLIENT CAMPAIGN ROI",
  "99% SLA COMPLIANCE RATE",
  "96% CLIENT RETENTION RATE",
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (target === 0) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count === 0 ? "—" : `${count.toLocaleString()}${suffix}`}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-20 md:py-32 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20 text-center">
        {/* Section Header */}
        <div className="text-center mx-auto mb-12">
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-center mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-snug text-[var(--text-primary)] mb-8">
            We Measure What Truly Matters
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl text-[var(--text-secondary)] mb-16 font-normal leading-relaxed">
            Empirical performance indicators driving sustainable revenue growth across our partner network.
          </p>
        </div>

        {/* Key Performance Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl mx-auto justify-center items-stretch mb-4">
          {primaryMetrics.map((m) => (
            <FadeIn key={m.label}>
              <div className="p-8 lg:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-center gap-3 hover-lift h-full">
                <p className="font-black text-[var(--accent)] mb-2 leading-[1.1]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
                  <Counter target={m.target} suffix={m.suffix} />
                </p>
                <p className="text-base sm:text-lg font-bold tracking-wide leading-relaxed text-[var(--text-secondary)] uppercase">
                  {m.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary Metrics Grid — same card framing as primary for a clean 3x2 matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto w-full justify-center items-stretch">
          {secondaryMetrics.map((sm) => (
            <FadeIn key={sm}>
              <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-center gap-3 hover-lift h-full">
                <p className="font-black text-[var(--accent)] leading-[1.1]" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  {sm.split(" ")[0]}
                </p>
                <p className="text-base font-bold tracking-wide leading-relaxed text-[var(--text-secondary)] uppercase">
                  {sm.split(" ").slice(1).join(" ")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
