"use client";

import { FadeIn } from "@/components/Animations";
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 relative w-full flex flex-col items-center justify-center mx-auto overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6">
            Revenue Orbit Marketing
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] max-w-4xl mx-auto mb-8 text-center text-white">
            YOU BRING THE <span className="gradient-text">VISION.</span> WE MAKE IT <span className="gradient-text">HAPPEN.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-center text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-neutral-200">
            Tell us what you&apos;re trying to build, grow or automate. We&apos;ll partner with you to turn your strategic vision into a high-performing, scalable growth machine.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-5 mb-12">
            <a
              href="#contact-form"
              className="btn-primary h-13 px-8 py-3.5 text-base font-bold inline-flex items-center justify-center gap-2 rounded-xl"
            >
              GET STARTED NOW <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact-form"
              className="btn-outline h-13 px-8 py-3.5 text-base font-bold inline-flex items-center justify-center gap-2 rounded-xl"
            >
              <Calendar className="w-5 h-5 text-[var(--accent)]" /> SCHEDULE A CONSULTATION
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center gap-6 text-base font-medium text-neutral-300">
            <a href="tel:+13233068266" className="flex items-center gap-2 hover:text-[var(--accent-light)] transition-colors">
              <Phone className="w-5 h-5 text-[var(--accent-light)]" /> +1 (323) 306-8266
            </a>
            <a href="mailto:contact@revenueorbitmarketing.com" className="flex items-center gap-2 hover:text-[var(--accent-light)] transition-colors">
              <Mail className="w-5 h-5 text-[var(--accent-light)]" /> contact@revenueorbitmarketing.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
