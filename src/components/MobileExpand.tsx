"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  preview: ReactNode;
  children: ReactNode;
  buttonLabel?: string;
};

// On phones (below md) the detail content is hidden behind an arrow —
// tap to expand. On md+ the full content is always shown so desktop
// layouts stay uncluttered and wide.
export default function MobileExpand({ preview, children, buttonLabel = "Show details" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {preview}
      <div className={`${open ? "block" : "hidden md:block"}`}>{children}</div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-auto pt-3 md:hidden inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent)]"
      >
        {open ? "Hide" : buttonLabel}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}