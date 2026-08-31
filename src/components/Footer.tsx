"use client";

import { MessageCircle } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Why ROM", href: "#why-rom" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "#contact-form" },
  ],
  services: [
    { label: "Customer Acquisition", href: "#services" },
    { label: "BPO Solutions", href: "#services" },
    { label: "Contact Center", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Real Estate Marketing", href: "#services" },
    { label: "AI & Automation", href: "#services" },
    { label: "Remote Workforce", href: "#services" },
    { label: "CRM & Automation", href: "#services" },
  ],
  industries: [
    { label: "Legal", href: "#industries" },
    { label: "Insurance", href: "#industries" },
    { label: "Real Estate", href: "#industries" },
    { label: "Home Services", href: "#industries" },
    { label: "Automotive", href: "#industries" },
    { label: "Financial Services", href: "#industries" },
    { label: "Tax Services", href: "#industries" },
    { label: "Healthcare", href: "#industries" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "FAQ", href: "#faq" },
  ],
};

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    facebook: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    linkedin: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    instagram: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    youtube: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  };
  return icons[type] || null;
};

const socials = [
  { type: "facebook", href: "#", label: "Facebook" },
  { type: "linkedin", href: "#", label: "LinkedIn" },
  { type: "instagram", href: "#", label: "Instagram" },
  { type: "youtube", href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[var(--accent-light)] font-bold text-sm tracking-wider">ROM</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold tracking-wider" style={{ color: "var(--text-primary)" }}>
                  REVENUE ORBIT
                </p>
                <p className="text-xs font-semibold tracking-widest text-[var(--accent-light)]">
                  MARKETING
                </p>
              </div>
            </div>
            <p className="text-sm leading-normal" style={{ color: "var(--text-secondary)" }}>
              Revenue Orbit Marketing is a growth and technology partner helping businesses
              generate customers, accelerate revenue, streamline operations and scale through
              marketing, sales, outsourcing, AI and automation.
            </p>
            <p className="text-sm font-semibold italic text-[var(--accent-light)]">
              &ldquo;You Bring the Vision. We Make It Happen.&rdquo;
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--accent)]/20 hover:bg-[var(--accent)] hover:text-white transition-all"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <SocialIcon type={s.type} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {[
            { title: "Company", links: footerLinks.company },
            { title: "Services", links: footerLinks.services },
            { title: "Industries", links: footerLinks.industries },
            { title: "Resources", links: footerLinks.resources },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-primary)" }}>
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-normal hover:text-[var(--accent-light)] transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="flex flex-wrap gap-6 py-6 border-y border-[var(--border-subtle)] mb-8">
          <a href="tel:+13233068266" className="text-sm leading-normal hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--text-secondary)" }}>
            +1 (323) 306-8266
          </a>
          <a href="mailto:contact@revenueorbitmarketing.com" className="text-sm leading-normal hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--text-secondary)" }}>
            contact@revenueorbitmarketing.com
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm leading-normal" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Revenue Orbit Marketing. All rights reserved.
          </p>
          <p className="text-sm leading-normal" style={{ color: "var(--text-muted)" }}>
            You Bring the Vision. We Make It Happen.
          </p>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
}
