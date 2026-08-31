import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "@/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Revenue Orbit Marketing",
  description: "Schedule an executive growth consultation with Revenue Orbit Marketing. Call +1 (323) 306-8266 or request a scoped blueprint.",
};

const contactChannels = [
  { icon: Phone, title: "US Client Desk", value: "+1 (323) 306-8266", href: "tel:+13233068266" },
  { icon: Mail, title: "Email", value: "contact@revenueorbitmarketing.com", href: "mailto:contact@revenueorbitmarketing.com" },
  { icon: Clock, title: "Response SLA", value: "Within 24 hours", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 lg:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
              Contact
            </span>
            <h1 className="max-w-4xl mx-auto font-black tracking-tight leading-[1.08] text-[var(--text-primary)] mb-5">
              Let&apos;s Build Your Growth <span className="gradient-text">Blueprint</span>
            </h1>
            <p className="card-body max-w-2xl mx-auto text-lg lg:text-xl text-[var(--text-secondary)]">
              Tell us about your business model, target acquisition goals, or operational requirements. Our partners will deliver a customized execution proposal within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-8 md:py-12" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactChannels.map((c) => (
              <StaggerItem key={c.title}>
                <div className="p-7 rounded-2xl glass border border-[var(--border-subtle)] hover-lift h-full text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                    <c.icon className="w-7 h-7 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="font-bold text-lg hover:text-[var(--accent)] transition-colors" style={{ color: "var(--text-primary)" }}>{c.value}</a>
                  ) : (
                    <p className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>{c.value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SLA Intake Guarantee banner */}
      <section className="pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="p-6 md:p-8 rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg-card)] flex flex-col md:flex-row items-center gap-5 justify-between">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-[var(--accent)] shrink-0" />
                <div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>SLA Intake Guarantee</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Every consultation request is reviewed and responded to within one business day.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <MapPin className="w-5 h-5 text-[var(--accent)]" />
                <span style={{ color: "var(--text-secondary)" }}>Serving U.S. enterprises &amp; high-growth mid-market companies</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Consultation form */}
      <ContactForm />
    </>
  );
}
