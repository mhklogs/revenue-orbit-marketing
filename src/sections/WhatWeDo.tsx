"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/Animations";
import {
  Users, Settings, Phone, Megaphone, Building2, Bot, Headphones, BarChart3, ArrowRight,
} from "lucide-react";

const services = [
  { num: "01", icon: Users, title: "Customer Acquisition", desc: "Generate, qualify, and convert high-intent customers through data-driven acquisition campaigns." },
  { num: "02", icon: Settings, title: "Business Process Outsourcing", desc: "Trained offshore & nearshore teams to manage operations while your core team focuses on strategy." },
  { num: "03", icon: Phone, title: "Contact Center Solutions", desc: "Inbound customer care and outbound sales prospecting tailored to your exact compliance SLAs." },
  { num: "04", icon: Megaphone, title: "Digital Marketing", desc: "Performance acquisition channels optimized strictly for pipeline velocity and bottom-line profit." },
  { num: "05", icon: Building2, title: "Real Estate Marketing", desc: "Custom lead acquisition, motivated seller qualification, and investor CRM workflows." },
  { num: "06", icon: Bot, title: "AI & Automation", desc: "Automate repetitive workflows, speed up lead response times, and deploy conversational voice agents." },
  { num: "07", icon: Headphones, title: "Remote Workforce Solutions", desc: "Vetted professionals who integrate seamlessly as a natural extension of your internal workforce." },
  { num: "08", icon: BarChart3, title: "CRM & Business Automation", desc: "End-to-end CRM implementation and business automations that synchronize your revenue engine." },
];

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

        {/* Grid Layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto justify-center items-stretch">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              {/* Card Container */}
              <div className="p-6 lg:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-center flex flex-col items-center justify-between h-full hover:border-[var(--accent)]/50 transition-all hover-lift">
                <div className="flex flex-col items-center w-full gap-5">
                  {/* Badge / Number */}
                  <span className="mx-auto text-sm sm:text-base font-semibold tracking-wider font-mono text-[var(--accent)] px-3 py-1 bg-[var(--accent)]/10 rounded-lg inline-block">
                    SOLUTION {s.num}
                  </span>

                  <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-[var(--accent)]" />
                  </div>

                  {/* Card Heading */}
                  <h3 className="text-xl font-bold leading-[1.3] min-h-[2.6em] text-[var(--text-primary)]">{s.title}</h3>

                  {/* Card Body Text */}
                  <p className="card-body text-center flex-grow">
                    {s.desc}
                  </p>
                </div>

                {/* Action Link */}
                <a href="#contact-form" className="mt-auto pt-6 text-base font-bold text-[var(--accent)] flex items-center justify-center gap-2 hover:underline">
                  Explore Solution <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
