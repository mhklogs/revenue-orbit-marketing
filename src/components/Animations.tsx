"use client";

import { motion } from "framer-motion";

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const offset = { up: { y: 15, x: 0 }, down: { y: -15, x: 0 }, left: { y: 0, x: 15 }, right: { y: 0, x: -15 } }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`w-full mx-auto ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  return <span>{target === 0 ? "—" : `${target.toLocaleString()}${suffix}`}</span>;
}

export function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`w-full mx-auto justify-center items-stretch ${className}`}>{children}</div>;
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`w-full h-full ${className}`}>{children}</div>;
}

export function SectionHeading({ badge, title, highlight, subtitle }: {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mx-auto w-full max-w-6xl mb-16">
      {badge && (
        <span className="mx-auto inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
          {badge}
        </span>
      )}
      <h2 className="text-center mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] mb-6 text-[var(--text-primary)]">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-center mx-auto max-w-3xl text-xl lg:text-2xl leading-relaxed text-[var(--text-secondary)] mb-14">
          {subtitle}
        </p>
      )}
    </div>
  );
}
