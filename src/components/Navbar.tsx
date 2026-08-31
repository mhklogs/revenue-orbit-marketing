"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#faq" },
  { label: "Contact", href: "#contact-form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[var(--border-subtle)] shadow-md shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] opacity-40 group-hover:opacity-80 transition-opacity" />
              <div
                className="absolute inset-1 rounded-full border border-[var(--accent-light)] opacity-60"
                style={{ animation: "orbit 8s linear infinite" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[var(--accent-light)] font-bold text-sm lg:text-base tracking-wider">
                  ROM
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wider" style={{ color: "var(--text-primary)" }}>
                REVENUE ORBIT
              </p>
              <p className="text-xs font-semibold tracking-widest text-[var(--accent-light)]">
                MARKETING
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide hover:text-[var(--accent-light)] transition-colors relative group py-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-light)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[var(--accent-light)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--accent-light)]" />
              )}
            </button>

            <a
              href="#contact-form"
              className="btn-primary hidden sm:inline-flex h-11 px-6 py-2.5 text-sm font-semibold inline-flex items-center justify-center gap-2 rounded-lg"
            >
              GET STARTED
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
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
                  className="block text-base font-medium hover:text-[var(--accent-light)] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact-form"
                onClick={() => setIsOpen(false)}
                className="btn-primary block w-full text-center h-11 px-6 py-2.5 text-sm font-semibold rounded-lg mt-4"
              >
                GET STARTED NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
