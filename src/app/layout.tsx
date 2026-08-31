import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Revenue Orbit Marketing | Growth & Technology Partner",
  description:
    "Revenue Orbit Marketing helps businesses generate customers, accelerate revenue, streamline operations and scale through marketing, sales, outsourcing, AI and automation.",
  keywords: [
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
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
