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
    <section className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20 text-center">
        {/* Section Header */}
        <div className="text-center mx-auto mb-12">
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white mb-8">
            We Measure What Truly Matters
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl text-neutral-200 mb-16 font-normal leading-relaxed">
            Empirical performance indicators driving sustainable revenue growth across our partner network.
          </p>
        </div>

        {/* Key Performance Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl mx-auto justify-center items-stretch mb-12">
          {primaryMetrics.map((m) => (
            <FadeIn key={m.label}>
              <div className="p-8 lg:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/60 text-center flex flex-col items-center justify-center gap-3 hover-lift h-full">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-emerald-400 mb-2 leading-[1.1]">
                  <Counter target={m.target} suffix={m.suffix} />
                </p>
                <p className="text-base sm:text-lg font-bold tracking-wide leading-relaxed text-neutral-200 uppercase">
                  {m.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto w-full justify-center items-stretch">
          {secondaryMetrics.map((sm) => (
            <FadeIn key={sm}>
              <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 text-center text-base sm:text-lg font-semibold tracking-wide leading-relaxed text-neutral-300">
                {sm}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
