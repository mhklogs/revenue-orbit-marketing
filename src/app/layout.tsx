import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
