"use client";

import { useMemo } from "react";

const outer = ["MARKETING", "SALES", "LEADS", "AI", "AUTOMATION", "REAL ESTATE", "INSURANCE", "LEGAL", "BPO", "CUSTOMER ACQ."];
const inner = ["GROWTH", "REVENUE", "DEMAND", "CONVERSION", "SCALE"];

export default function OrbitVisual({ size = 640 }: { size?: number }) {
  const outerNodes = useMemo(
    () =>
      outer.map((label, i) => ({
        label,
        angle: (i / outer.length) * 360,
      })),
    []
  );
  const innerNodes = useMemo(
    () =>
      inner.map((label, i) => ({
        label,
        angle: (i / inner.length) * 360,
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="orbit-container"
      style={{ width: size, height: size }}
    >
      {/* rotating ring guides */}
      <div className="orbit-ring ring-outer" style={{ width: "100%", height: "100%" }} />
      <div className="orbit-ring ring-middle" style={{ width: "62%", height: "62%" }} />
      <div className="orbit-ring ring-inner" style={{ width: "32%", height: "32%" }} />

      {/* outer orbit nodes */}
      <div
        className="orbit-holder"
        style={{ width: "100%", height: "100%" }}
      >
        {outerNodes.map((n) => (
          <span
            key={n.label}
            className="orbit-node"
            style={{
              transform: `rotate(${n.angle}deg) translateX(${size / 2}px)`,
            }}
          >
            <span className="orbit-node-label">{n.label}</span>
          </span>
        ))}
      </div>

      {/* inner orbit nodes */}
      <div className="orbit-holder" style={{ width: "62%", height: "62%" }}>
        {innerNodes.map((n) => (
          <span
            key={n.label}
            className="orbit-node"
            style={{
              transform: `rotate(${n.angle}deg) translateX(${size * 0.31}px)`,
            }}
          >
            <span className="orbit-node-label inner">{n.label}</span>
          </span>
        ))}
      </div>

      {/* glowing ROM core */}
      <div className="orbit-core">
        <span className="orbit-rom">ROM</span>
        <span className="orbit-sub">REVENUE ORBIT</span>
      </div>
    </div>
  );
}
