"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ArrowLeft, ArrowUp } from "lucide-react";

export default function BackHome() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isAdmin) return null;

  return (
    <div className="backhome-fab" aria-label="Site navigation controls">
      {scrolled && (
        <button
          className="backhome-btn"
          aria-label="Back to top"
          title="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <button
        className="backhome-btn"
        aria-label="Go back"
        title="Back"
        onClick={() => window.history.length > 1 ? window.history.back() : null}
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      {!isHome && (
        <Link className="backhome-btn backhome-home" href="/" aria-label="Back to home" title="Back to home">
          <Home className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}
