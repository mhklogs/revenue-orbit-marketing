import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: "ROM Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="rom-admin">{children}</div>;
}
