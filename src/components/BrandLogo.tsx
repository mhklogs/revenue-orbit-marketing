"use client";

import { useTheme } from "@/context/ThemeContext";

type Props = {
  variant?: "auto" | "light" | "dark";
  size?: number;
  className?: string;
  ring?: boolean;
};

// Bg-less brand mark: "ROM" wordmark with an orbiting line around it.
// No filled disk — text colour flips to contrast its background:
//   auto  -> white font in dark theme, dark font in light theme
//   light -> forced dark font (for light surfaces)
//   dark  -> forced white font (for dark surfaces)
export default function BrandLogo({ variant = "auto", size = 96, className = "", ring = true }: Props) {
  const { theme } = useTheme();
  const isDarkTheme = variant === "dark" || (variant === "auto" && theme === "dark");
  const isLightSurf = variant === "light" || (variant === "auto" && theme === "light");
  const textColor = isDarkTheme ? "#F8FAFC" : "#0B0C10";

  return (
    <div
      className={`relative shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="ROM — Revenue Orbit Marketing"
      role="img"
    >
      {/* orbiting line: full ring + travelling dot */}
      {ring && (
        <>
          <div
            className="absolute rounded-full"
            style={{ inset: 0, border: `1.5px solid var(--accent)`, opacity: 0.55 }}
          />
          <div className="absolute rounded-full orbit-ring-spin" style={{ inset: 0 }}>
            <span
              className="absolute rounded-full"
              style={{
                top: 0,
                left: "50%",
                width: size * 0.09,
                height: size * 0.09,
                marginLeft: -(size * 0.045),
                marginTop: -(size * 0.045),
                background: "var(--accent-light)",
                boxShadow: "0 0 10px var(--accent)",
              }}
            />
          </div>
        </>
      )}

      {/* ROM wordmark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-black leading-none"
          style={{
            fontFamily: "var(--font-display)",
            color: textColor,
            fontSize: size * 0.3,
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          ROM
        </span>
        <span
          className="font-bold leading-none mt-[2px]"
          style={{
            fontSize: size * 0.052,
            letterSpacing: "0.24em",
            color: isLightSurf ? "rgba(11,12,16,0.7)" : "rgba(248,250,252,0.75)",
          }}
        >
          REVENUE&nbsp;ORBIT
        </span>
      </div>
    </div>
  );
}