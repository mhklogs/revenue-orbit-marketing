"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Campaigns", href: "#solutions", dropdown: true },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact-form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Announcement Bar */}
      <div className="announcement-bar bg-[var(--dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
          <p className="text-[13px] sm:text-sm text-white/70 truncate">
            One Growth Partner. Marketing, Sales, Outsourcing &amp; AI.
          </p>
          <a href="#contact-form" className="announce-link text-sm shrink-0">
            GET STARTED <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "glass shadow-md shadow-black/5"
            : "bg-[var(--bg-header)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                <Image
                  src="/rom-logo.png"
                  alt="Revenue Orbit Marketing"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-sm font-bold tracking-wider text-[var(--text-primary)]">
                  REVENUE ORBIT
                </p>
                <p className="text-xs font-semibold tracking-widest text-[var(--accent)]">
                  MARKETING
                </p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium tracking-wide hover:text-[var(--accent)] transition-colors relative group py-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                aria-label="Toggle theme"
                title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
              <a
                href="#contact-form"
                className="hidden sm:inline-flex h-11 items-center justify-center gap-2 px-6 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--dark)" }}
              >
                GET STARTED
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>

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
              className="lg:hidden glass border-t border-[var(--accent)]/20 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-medium hover:text-[var(--accent)] transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact-form"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block w-full text-center h-11 px-6 py-2.5 text-sm font-semibold mt-4"
                >
                  GET STARTED NOW
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
