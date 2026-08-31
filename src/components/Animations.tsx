"use client";

import { Children, cloneElement, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || target === 0) return;
    const duration = 1800;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{target === 0 || count === 0 ? "0" : `${count.toLocaleString()}${suffix}`}</span>;
}

export function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`w-full mx-auto justify-center items-stretch ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
    >
      {Children.map(children, (child, i) =>
        cloneElement(child as React.ReactElement<{ index?: number }>, { index: i })
      )}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", index = 0 }: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: fromLeft ? -80 : 80 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ badge, title, highlight, subtitle }: {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mx-auto w-full max-w-7xl mb-14">
      {badge && (
        <span className="mx-auto inline-block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 rounded-full mb-6">
          {badge}
        </span>
      )}
      <h2 className="text-center mx-auto max-w-4xl text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.25] mb-5 text-[var(--text-primary)]">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-center mx-auto max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)] mb-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
