"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  children: ReactNode;
  collapsedHeight?: number;
  label?: string;
};

export default function DetailReveal({ children, collapsedHeight = 420, label = "Show all details" }: Props) {
  const [open, setOpen] = useState(false);
  const [canCollapse, setCanCollapse] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setCanCollapse(contentRef.current.scrollHeight > collapsedHeight);
    }
  }, [collapsedHeight]);

  return (
    <div className="detail-reveal">
      <div
        ref={contentRef}
        className="detail-reveal__content"
        style={
          open
            ? { maxHeight: "none" }
            : { maxHeight: collapsedHeight, overflow: "hidden" }
        }
      >
        {children}
        {!open && canCollapse && (
          <div className="detail-reveal__fade" aria-hidden="true" />
        )}
      </div>

      {canCollapse && (
        <div className="detail-reveal__toggle">
          <button
            className="btn-outline"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {open ? "Hide details" : label}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} style={{ color: "var(--accent)" }} />
          </button>
        </div>
      )}
    </div>
  );
}
