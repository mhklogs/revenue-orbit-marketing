"use client";

import { FadeIn } from "@/components/Animations";
import { Target, Eye } from "lucide-react";

const variables = [
  "Target Customers",
  "Sales Cycles",
  "Acquisition Costs",
  "Operational Workflows",
  "Tech Stack & Tools",
  "Compliance Rules",
];

export default function WhoWeAre() {
  return (
    <section id="about" className="relative w-full flex flex-col items-center justify-center mx-auto">
      {/* Section Container */}
      <div className="w-full max-w-6xl mx-auto text-center px-6 py-16">
        <FadeIn>
          {/* Badge Label */}
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6">
            Who We Are
          </span>

          {/* Main Title */}
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-white mb-8">
            A Growth Partner Built Around <span className="gradient-text">Your Business</span>
          </h2>

          <p className="text-center mx-auto text-lg lg:text-xl leading-relaxed text-neutral-200 max-w-3xl mb-8">
            Revenue Orbit Marketing is a customer acquisition, marketing, outsourcing, sales, and technology partner built to help businesses move seamlessly from opportunity to predictable revenue. Every business operates around distinct structural variables.
          </p>
        </FadeIn>

        {/* Variables Grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto w-full my-10">
            {variables.map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 text-center text-base sm:text-lg font-medium text-neutral-200 hover-lift"
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full mt-12">
          {/* Mission Card */}
          <FadeIn delay={0.2}>
            <div className="p-8 lg:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-center flex flex-col items-center justify-center gap-5 hover-lift h-full">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white">Mission</h3>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-300">
                Empower enterprise and scaling businesses through measurable customer acquisition, intelligent technology, high-performing BPO outsourcing, and reliable revenue engines.
              </p>
            </div>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn delay={0.3}>
            <div className="p-8 lg:p-10 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-center flex flex-col items-center justify-center gap-5 hover-lift h-full">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Eye className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white">Vision</h3>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-300">
                To become the premier growth and technology partner for U.S. enterprises seeking to acquire customers, optimize unit economics, and build automated future-proof operations.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
