"use client";

import { useRef, useState, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees (default 10). */
  max?: number;
  /** Show a radial glow following the cursor. */
  glow?: boolean;
}

/**
 * Cursor-tracking 3D tilt wrapper. Applies perspective transform + a moving
 * radial highlight so cards feel dimensional and interactive.
 */
export default function TiltCard({ children, className = "", max = 10, glow = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, on: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    setStyle({
      transform: `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.02)`,
    });
    setGlowPos({ x: px * 100, y: py * 100, on: true });
  };

  const handleLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
    setGlowPos((g) => ({ ...g, on: false }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{
            opacity: glowPos.on ? 1 : 0,
            background: `radial-gradient(320px circle at ${glowPos.x}% ${glowPos.y}%, rgba(212,175,55,0.16), transparent 65%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}