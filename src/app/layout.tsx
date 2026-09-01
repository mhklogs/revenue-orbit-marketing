import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SiteShell from "@/components/SiteShell";

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Revenue Orbit Marketing (ROM) | Growth & Technology Partner",
  description:
    "Revenue Orbit Marketing helps businesses generate customers, accelerate revenue, streamline operations and scale through marketing, sales, outsourcing, AI and automation. You bring the vision. We make it happen.",
  icons: {
    icon: [
      { url: "/rom-icon.svg", type: "image/svg+xml" },
      { url: "/rom-logo.png", type: "image/png" },
    ],
    apple: "/rom-logo.png",
  },
  keywords: [
    "Revenue Orbit Marketing",
    "ROM",
    "Revenue Orbit Marketing lead gen",
    "customer acquisition",
    "BPO",
    "digital marketing",
    "AI automation",
    "lead generation",
    "contact center",
    "CRM automation",
    "real estate marketing",
  ],
  openGraph: {
    title: "Revenue Orbit Marketing | You Bring The Vision. We Make It Happen.",
    description:
      "Growth and technology partner helping businesses generate customers, accelerate revenue, streamline operations and scale.",
    type: "website",
    siteName: "Revenue Orbit Marketing",
    url: "https://rom-website.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Orbit Marketing | Growth & Technology Partner",
    description:
      "Growth and technology partner helping businesses generate customers, accelerate revenue, streamline operations and scale.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Revenue Orbit Marketing",
              alternateName: "ROM",
              url: "https://rom-website.vercel.app",
              slogan: "You Bring the Vision. We Make It Happen.",
              description:
                "Customer acquisition, marketing, outsourcing, sales and technology partner helping U.S. enterprises move from opportunity to predictable revenue.",
              areaServed: "US",
              knowsAbout: [
                "Customer Acquisition",
                "BPO",
                "Contact Center Solutions",
                "Digital Marketing",
                "Real Estate Marketing",
                "AI & Automation",
                "Remote Workforce Solutions",
                "CRM & Business Automation",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
