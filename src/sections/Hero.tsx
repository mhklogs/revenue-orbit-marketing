"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn } from "@/components/Animations";
import BrandLogo from "@/components/BrandLogo";

const ticker = [
  "Performance Marketing", "Lead Generation", "Contact Center Solutions",
  "Digital Marketing", "BPO Outsourcing", "AI Automation", "CRM Systems",
  "Real Estate Growth",
];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export default function Hero() {
  return (
    <section id="hero-section" className="relative w-full flex flex-col items-center overflow-hidden bg-[#0B0C10]">
      {/* Cinematic video background (recolored to ROM sea-green) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/rom-logo-cutout.png"
          className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
          aria-hidden="true"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Teal color-grade so the video reads as ROM sea-green, never blue */}
        <div className="absolute inset-0" style={{ background: "#116466", mixBlendMode: "color", opacity: 0.62 }} />
        <div className="absolute inset-0" style={{ background: "#2EC4B0", mixBlendMode: "soft-light", opacity: 0.3 }} />
        {/* Dark gradient so centered light content stays readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,12,16,0.25)_0%,rgba(11,12,16,0.6)_55%,rgba(11,12,16,0.9)_100%)]" />
      </div>

      {/* Soft teal ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(46,196,176,0.18),transparent_65%)] blur-[70px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(17,100,102,0.3),transparent_65%)] blur-[80px]" />
      </div>

      {/* Single bg-less brand logo with orbiting line (subtle, theme-aware) */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="hero-logo-mark">
          <BrandLogo variant="auto" size={340} className="opacity-[0.16]" />
        </div>
      </div>

      {/* Centered hero content */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 lg:pt-44 pb-20 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#A9F0E6] bg-[#2EC4B0]/10 border border-[#2EC4B0]/30 px-4 py-1.5 rounded-full mb-8">
            Growth &amp; Technology Partner
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto max-w-4xl font-black tracking-tight leading-[1.08] text-white mb-6">
            YOU BRING THE <span className="animated-gradient">VISION.</span>
            <br />
            WE MAKE IT <span className="animated-gradient">HAPPEN.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="card-body mx-auto max-w-2xl text-lg lg:text-xl mb-10" style={{ color: "#FFFFFFED" }}>
            Revenue Orbit Marketing is a growth and technology partner helping businesses
            generate customers, accelerate revenue, streamline operations, and scale
            through marketing, sales, outsourcing, AI, and automation.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contact-form" className="btn-primary">
              GET STARTED <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact-form" className="btn-outline">
              <Calendar className="w-5 h-5" /> SCHEDULE A CONSULTATION
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Sub-footer ticker marquee */}
      <div className="relative z-[2] w-full border-t border-[#2EC4B0]/20 bg-[#0B0C10]/70 backdrop-blur-md">
        <div className="overflow-hidden py-3.5">
          <div
            className="flex whitespace-nowrap gap-8 items-center"
            style={{ animation: "marquee 25s linear infinite", width: "max-content" }}
          >
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-8 text-sm font-semibold tracking-wide text-[#9FB4C0]">
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-[#2EC4B0]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
