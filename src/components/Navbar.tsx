"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown, Sun, Moon, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { services, industries } from "@/lib/data";
import type { Service, Industry } from "@/lib/data";

const aboutLinks: { label: string; tagline: string; href: string }[] = [
  { label: "About Us", tagline: "Who we are and how we got here", href: "/about" },
  { label: "Leadership", tagline: "Message from the CEO and MD", href: "/about#leadership" },
  { label: "Why Choose Us", tagline: "Six reasons clients stay", href: "/about#why" },
  { label: "Our Process", tagline: "From discovery to optimization", href: "/about#process" },
  { label: "Values", tagline: "The standards we hold", href: "/about#values" },
  { label: "Compliance", tagline: "Privacy, security & SLA", href: "/about#compliance" },
  { label: "Our Team", tagline: "The people behind the work", href: "/about#team" },
  { label: "Careers", tagline: "Openings, benefits & culture", href: "/careers" },
];

type MegaMenu = null | "about" | "services" | "industries";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaMenu>(null);
  const [mobileMega, setMobileMega] = useState<MegaMenu>(null);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMega = (m: Exclude<MegaMenu, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(m);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const navBtn = (label: string, menu?: Exclude<MegaMenu, null>) =>
    menu ? (
      <button
        onMouseEnter={() => openMega(menu)}
        onMouseLeave={scheduleClose}
        onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
        className="inline-flex items-center gap-1 text-sm font-medium tracking-wide hover:text-[var(--accent)] transition-colors relative group py-2"
        style={{ color: openMenu === menu ? "var(--accent)" : "var(--text-secondary)" }}
      >
        {label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === menu ? "rotate-180" : ""}`} />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
      </button>
    ) : (
      <Link
        href={menuHref(label)}
        className="inline-flex items-center gap-1 text-sm font-medium tracking-wide hover:text-[var(--accent)] transition-colors relative group py-2"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
      </Link>
    );

  function menuHref(label: string) {
    switch (label) {
      case "Campaigns": return "/campaigns";
      case "Blog": return "/blog";
      case "Contact": return "/contact";
      default: return "#";
    }
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[100]" onMouseLeave={scheduleClose}>
      {/* Banner Notice Bar */}
      <div className="banner-bar" style={{ backgroundColor: "var(--dark)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-center">
          <p className="text-[13px] sm:text-sm text-center text-white/70">
            Revenue Orbit Marketing is now accepting new enterprise partners.{" "}
            <Link href="/contact" className="announce-link">
              Apply today <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-md shadow-black/5" : "bg-[var(--bg-header)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                <Image src="/rom-logo.png" alt="Revenue Orbit Marketing" fill sizes="48px" className="object-cover" priority />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-sm font-bold tracking-wider text-[var(--text-primary)]">REVENUE ORBIT</p>
                <p className="text-xs font-semibold tracking-widest text-[var(--accent)]">MARKETING</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="relative" onMouseLeave={scheduleClose}>
                {navBtn("About", "about")}
                <AnimatePresence>
                  {openMenu === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => openMega("about")}
                      className="absolute top-full left-0 pt-3 w-[680px]"
                    >
                      <div className="glass p-4 rounded-2xl border border-[var(--border-subtle)]">
                        <p className="text-xs font-semibold uppercase tracking-widest mb-3 px-2" style={{ color: "var(--text-muted)" }}>About</p>
                        <div className="grid grid-cols-4 gap-1">
                          {aboutLinks.map((l) => (
                            <Link key={l.label} href={l.href} onClick={() => setOpenMenu(null)} className="flex items-start gap-2 px-3 py-3 rounded-xl hover:bg-[var(--accent)]/5 transition-colors">
                              <div>
                                <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{l.label}</p>
                                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{l.tagline}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative" onMouseLeave={scheduleClose}>
                {navBtn("Services", "services")}
                <AnimatePresence>
                  {openMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => openMega("services")}
                      className="absolute top-full left-0 pt-3 w-[640px]"
                    >
                      <div className="glass p-4 rounded-2xl border border-[var(--border-subtle)]">
                        <p className="text-xs font-semibold uppercase tracking-widest mb-3 px-2" style={{ color: "var(--text-muted)" }}>Services</p>
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s: Service) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpenMenu(null)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[var(--accent)]/5 transition-colors">
                              <div>
                                <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{s.title}</p>
                                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.tagline}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link href="/services" onClick={() => setOpenMenu(null)} className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors">
                          View all 8 service lines <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative" onMouseLeave={scheduleClose}>
                {navBtn("Industries", "industries")}
                <AnimatePresence>
                  {openMenu === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => openMega("industries")}
                      className="absolute top-full left-0 pt-3 w-[680px]"
                    >
                      <div className="glass p-4 rounded-2xl border border-[var(--border-subtle)]">
                        <p className="text-xs font-semibold uppercase tracking-widest mb-3 px-2" style={{ color: "var(--text-muted)" }}>Industries</p>
                        <div className="grid grid-cols-2 gap-1">
                          {industries.map((ind: Industry) => (
                            <Link key={ind.slug} href={`/industries/${ind.slug}`} onClick={() => setOpenMenu(null)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[var(--accent)]/5 transition-colors">
                              <div>
                                <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{ind.title}</p>
                                <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--text-muted)" }}>{ind.tagline}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link href="/industries" onClick={() => setOpenMenu(null)} className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors">
                          See all targeted verticals <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navBtn("Campaigns")}
              {navBtn("Blog")}
              {navBtn("Contact")}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                aria-label="Toggle theme"
                title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <Link
                href="/contact"
                className="hidden sm:inline-flex h-11 items-center justify-center gap-2 px-6 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--dark)" }}
              >
                GET STARTED
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" style={{ color: "var(--text-primary)" }} />
                ) : (
                  <Menu className="w-6 h-6" style={{ color: "var(--text-primary)" }} />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-[var(--accent)]/20 shadow-lg overflow-y-auto max-h-[80vh]"
            >
              <div className="px-4 py-6 space-y-1">
                {(["about", "services", "industries"] as Exclude<MegaMenu, null>[]).map((m) => (
                  <div key={m} className="border-b border-[var(--border-subtle)] pb-3 mb-3">
                    <button
                      onClick={() => setMobileMega(mobileMega === m ? null : m)}
                      className="flex items-center justify-between w-full py-2 text-base font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {m[0].toUpperCase() + m.slice(1)}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileMega === m ? "rotate-180" : ""}`} style={{ color: "var(--accent)" }} />
                    </button>
                    <AnimatePresence>
                      {mobileMega === m && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2">
                            {m === "about" &&
                              aboutLinks.map((l) => (
                                <Link key={l.label} href={l.href} onClick={() => setIsOpen(false)} className="block py-2.5 px-2 rounded-lg">
                                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{l.label}</p>
                                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{l.tagline}</p>
                                </Link>
                              ))}
                            {m === "services" &&
                              services.map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsOpen(false)} className="block py-2.5 px-2 rounded-lg">
                                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</p>
                                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.tagline}</p>
                                </Link>
                              ))}
                            {m === "services" && (
                              <Link href="/services" onClick={() => setIsOpen(false)} className="block py-2.5 px-2 text-sm font-bold text-[var(--accent)]">View all 8 service lines →</Link>
                            )}
                            {m === "industries" &&
                              industries.map((ind) => (
                                <Link key={ind.slug} href={`/industries/${ind.slug}`} onClick={() => setIsOpen(false)} className="block py-2.5 px-2 rounded-lg">
                                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{ind.title}</p>
                                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{ind.tagline}</p>
                                </Link>
                              ))}
                            {m === "industries" && (
                              <Link href="/industries" onClick={() => setIsOpen(false)} className="block py-2.5 px-2 text-sm font-bold text-[var(--accent)]">See all targeted verticals →</Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link href="/campaigns" onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium" style={{ color: "var(--text-primary)" }}>Campaigns</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium" style={{ color: "var(--text-primary)" }}>Blog</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium" style={{ color: "var(--text-primary)" }}>Contact</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary block w-full text-center h-11 px-6 py-2.5 text-sm font-semibold mt-4">
                  GET STARTED NOW
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
