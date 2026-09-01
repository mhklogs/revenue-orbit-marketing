"use client";

export default function CertPrintButton() {
  return (
    <button onClick={() => window.print()} className="cert-btn">
      Download PDF / Print
    </button>
  );
}