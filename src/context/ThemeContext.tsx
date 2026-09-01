"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

type Theme = "light" | "dark";

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

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("rom-theme", theme);
  }, [theme]);

  // Apply the admin-set accent color to the site's CSS variables.
  useEffect(() => {
    async function applyAccent() {
      try {
        const res = await fetch("/api/theme");
        if (!res.ok) return;
        const data = await res.json();
        const t = data.theme;
        if (!t) return;
        const root = document.documentElement;
        if (t.accent) root.style.setProperty("--accent", t.accent);
        if (t.accentLight) root.style.setProperty("--accent-light", t.accentLight);
        if (t.accentDark) root.style.setProperty("--accent-dark", t.accentDark);
      } catch {
        /* keep defaults */
      }
    }
    applyAccent();
  }, []);

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
