"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  Users, Megaphone, TrendingUp, Bot, Settings, Building2, BarChart3, Headset,
} from "lucide-react";

const engines = [
  { icon: Users, title: "Customer Acquisition", desc: "Generate qualified leads and convert them into high-value paying customers." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance-driven campaigns focused strictly on ROI and revenue, not vanity impressions." },
  { icon: TrendingUp, title: "Sales Development", desc: "Outbound prospecting, dedicated appointment setting, and sustained pipeline velocity." },
  { icon: Settings, title: "BPO & Outsourcing", desc: "Trained offshore & nearshore teams handling operations so you can focus on core vision." },
  { icon: Building2, title: "Real Estate Marketing", desc: "Motivated seller lead generation, buyer qualification, and custom CRM automations." },
  { icon: Bot, title: "AI Automation", desc: "Conversational voice agents, instant lead qualification, and automated workflow triggers." },
  { icon: Headset, title: "Contact Center", desc: "Inbound care and outbound prospecting tailored to your exact compliance SLAs." },
  { icon: BarChart3, title: "CRM & Business Automation", desc: "Connect your fragmented tech stack into one unified, scalable growth ecosystem." },
];

export default function ValueStatement() {
  return (
    <section className="py-20 md:py-32 relative w-full flex flex-col items-center justify-center mx-auto" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn className="text-center mx-auto w-full max-w-4xl mb-14">
          <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-5 text-[var(--text-primary)]">
            One Partner. <span className="gradient-text">Multiple Growth Engines.</span>
          </h2>
          <p className="text-center mx-auto max-w-2xl text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)]">
            Your business shouldn&apos;t need ten different partners to generate customers, manage
            conversations, automate operations and scale. Revenue Orbit Marketing brings all critical
            revenue functions together under one seamless growth ecosystem.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-6xl mx-auto justify-center items-stretch">
          {engines.map((e) => (
            <StaggerItem key={e.title}>
              <div className="p-8 lg:p-9 rounded-2xl glass border border-[var(--border-subtle)] hover-lift group h-full flex flex-col gap-5 text-center items-center justify-between">
                <div className="w-full flex flex-col gap-4 text-center items-center">
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/20 flex items-center justify-center mb-2 group-hover:bg-[var(--accent)]/25 transition-all">
                    <e.icon className="w-7 h-7 text-[var(--accent-light)]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug text-[var(--text-primary)]">
                    {e.title}
                  </h3>
                  <p className="card-body text-center">
                    {e.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
