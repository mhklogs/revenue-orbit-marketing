"use client";

import { useMemo, useRef, useState, useEffect } from "react";

const outer = ["MARKETING", "SALES", "LEADS", "AI", "AUTOMATION", "REAL ESTATE", "INSURANCE", "LEGAL", "BPO", "CUSTOMER ACQ."];
const inner = ["GROWTH", "REVENUE", "DEMAND", "CONVERSION", "SCALE"];

type Node = { label: string; angle: number };

export default function OrbitVisual({ size = 640 }: { size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const [viewScale, setViewScale] = useState(1);

  const outerNodes = useMemo<Node[]>(
    () => outer.map((label, i) => ({ label, angle: (i / outer.length) * 360 })),
    []
  );
  const innerNodes = useMemo<Node[]>(
    () => inner.map((label, i) => ({ label, angle: (i / inner.length) * 360 })),
    []
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onLeave = () => setMouse(null);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 420) setViewScale(0.6);
      else if (w < 640) setViewScale(0.78);
      else if (w < 900) setViewScale(0.9);
      else setViewScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // returns repel offset in px for a node sitting at (nx, ny) in container space
  const repelOffset = (nx: number, ny: number) => {
    if (!mouse) return { x: 0, y: 0, active: false };
    const dx = nx - mouse.x;
    const dy = ny - mouse.y;
    const dist = Math.hypot(dx, dy);
    const repelRadius = 130;
    if (dist > 0 && dist < repelRadius) {
      const strength = (1 - dist / repelRadius) * 55;
      return {
        x: (dx / dist) * strength,
        y: (dy / dist) * strength,
        active: true,
      };
    }
    return { x: 0, y: 0, active: false };
  };

  const buildOuter = (n: Node) => {
    const radius = size / 2;
    const cx = size / 2;
    const cy = size / 2;
    const rad = (n.angle * Math.PI) / 180;
    const nx = cx + Math.cos(rad) * radius;
    const ny = cy + Math.sin(rad) * radius;
    const rep = repelOffset(nx, ny);
    return {
      radius,
      nx,
      ny,
      base: `rotate(${n.angle}deg) translateX(${radius}px) rotate(${-n.angle}deg)`,
      x: rep.x,
      y: rep.y,
      active: rep.active,
    };
  };

  const buildInner = (n: Node) => {
    const radius = size * 0.31;
    const cx = size / 2;
    const cy = size / 2;
    const rad = (n.angle * Math.PI) / 180;
    const nx = cx + Math.cos(rad) * radius;
    const ny = cy + Math.sin(rad) * radius;
    const rep = repelOffset(nx, ny);
    return {
      radius,
      nx,
      ny,
      base: `rotate(${n.angle}deg) translateX(${radius}px) rotate(${-n.angle}deg)`,
      x: rep.x,
      y: rep.y,
      active: rep.active,
    };
  };

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="orbit-container"
      style={{
        width: size,
        height: size,
        transform: `scale(${viewScale})`,
        transformOrigin: "center",
      }}
    >
      <div className="orbit-ring ring-outer" style={{ width: "100%", height: "100%" }} />
      <div className="orbit-ring ring-middle" style={{ width: "62%", height: "62%" }} />
      <div className="orbit-ring ring-inner" style={{ width: "32%", height: "32%" }} />

      {/* outer orbit nodes */}
      <div className="orbit-holder" style={{ width: "100%", height: "100%" }}>
        {outerNodes.map((n) => {
          const d = buildOuter(n);
          return (
            <span
              key={n.label}
              className={`orbit-node${d.active ? " repel" : ""}`}
              style={{ transform: `${d.base} translate(${d.x}px, ${d.y}px)` }}
              data-x={d.nx}
              data-y={d.ny}
            >
              <span className="orbit-node-label">{n.label}</span>
            </span>
          );
        })}
      </div>

      {/* inner orbit nodes */}
      <div className="orbit-holder" style={{ width: "62%", height: "62%" }}>
        {innerNodes.map((n) => {
          const d = buildInner(n);
          return (
            <span
              key={n.label}
              className={`orbit-node${d.active ? " repel" : ""}`}
              style={{ transform: `${d.base} translate(${d.x}px, ${d.y}px)` }}
            >
              <span className="orbit-node-label inner">{n.label}</span>
            </span>
          );
        })}
      </div>

      {/* glowing ROM core */}
      <div className="orbit-core">
        <span className="orbit-rom">ROM</span>
        <span className="orbit-sub">REVENUE ORBIT</span>
      </div>
    </div>
  );
}
