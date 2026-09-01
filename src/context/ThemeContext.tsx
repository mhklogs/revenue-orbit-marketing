"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

type Theme = "light" | "dark";
type AdminTheme = { accent: string; accentLight: string; accentDark: string } | null;

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("rom-theme");
  if (saved === "dark" || saved === "light") return saved;
  return "light";
}

// relative luminance helper (0..1); used to decide contrast against white/black.
function luminance(hex: string): number {
  let c = hex.replace("#", "");
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  if (c.length !== 6) return 0.5;
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Ensure the chosen brand accent stays visible in BOTH light and dark modes.
// A near-white "Off White" accent is invisible on a white (light) background, so
// in light mode we fall back to the darker variant for foreground elements while
// keeping the soft tint for backgrounds.
function effective(admin: AdminTheme, mode: Theme) {
  if (!admin) return null;
  const { accent, accentLight, accentDark } = admin;
  // try to parse all three; guard against malformed input
  const acc = accent || "";
  const light = accentLight || "";
  const dark = accentDark || "";
  const bgIsLight = mode === "light";

  // foreground accent that must contrast with the page background
  let foreground: string;
  if (bgIsLight) {
    // page bg is light → pick the darkest accent variant available for readability
    foreground = luminance(dark) < luminance(acc) ? dark : acc;
  } else {
    // page bg is dark → pick a bright accent variant for visibility
    foreground = luminance(light) > luminance(acc) ? light : acc;
  }

  return {
    accent: foreground,
    accentLight: bgIsLight ? acc : light,
    accentDark: dark,
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [admin, setAdmin] = useState<AdminTheme>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("rom-theme", theme);
  }, [theme]);

  // Fetch the admin-set brand accent once.
  useEffect(() => {
    async function applyAccent() {
      try {
        const res = await fetch("/api/theme");
        if (!res.ok) return;
        const data = await res.json();
        const t = data.theme;
        if (!t) return;
        setAdmin(t);
      } catch {
        /* keep defaults */
      }
    }
    applyAccent();
  }, []);

  // Re-apply theme-aware accent vars whenever mode or picked color changes.
  useEffect(() => {
    const eff = effective(admin, theme);
    if (!eff) return;
    const root = document.documentElement;
    root.style.setProperty("--accent", eff.accent);
    root.style.setProperty("--accent-light", eff.accentLight);
    root.style.setProperty("--accent-dark", eff.accentDark);
  }, [admin, theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
