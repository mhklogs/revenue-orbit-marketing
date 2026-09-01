import { notFound } from "next/navigation";
import Link from "next/link";
import { getCertificate } from "@/lib/certificates";
import CertPrintButton from "./CertPrintButton";
import "./print.css";

export const metadata = { title: "Partnership Certificate | Revenue Orbit Marketing", robots: { index: false } };

export default async function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cert = await getCertificate(id);
  if (!cert) notFound();

  const issue = new Date(cert.issueDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const valid = new Date(cert.validUntil).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="cert-page">
      <style>{`@media print { .no-print { display:none !important } }`}</style>

      <div className="cert-actions no-print">
        <Link href="/admin" className="cert-link">&larr; Admin</Link>
        <CertPrintButton />
      </div>

      <div className="cert-sheet">
        <div className="cert-inner">
          <img src="/rom-logo-dark.png" alt="Revenue Orbit Marketing" className="cert-logo" />

          <div className="cert-band">OFFICIAL PARTNERSHIP CERTIFICATE</div>

          <h1 className="cert-title">This certifies that</h1>

          <div className="cert-name">{cert.leadName}</div>
          {cert.company && <div className="cert-company">{cert.company}</div>}

          <p className="cert-body">
            has been recognized as a qualified partner in the{" "}
            <strong>{cert.industry}</strong> program and is enrolled in a
            Revenue Orbit Marketing <strong>{cert.outcome}</strong> engagement,
            delivered under our performance and operations framework.
          </p>

          <div className="cert-meta">
            <div>
              <div className="cert-meta-label">Issue Date</div>
              <div className="cert-meta-value">{issue}</div>
            </div>
            <div>
              <div className="cert-meta-label">Certificate ID</div>
              <div className="cert-meta-value">{cert.id}</div>
            </div>
            <div>
              <div className="cert-meta-label">Valid Through</div>
              <div className="cert-meta-value">{valid}</div>
            </div>
          </div>

          <div className="cert-sign">
            <div className="cert-sign-line">Revenue Orbit Marketing</div>
            <div className="cert-sign-role">Growth &amp; Technology Partner</div>
          </div>

          <img src="/rom-logo-dark.png" alt="" aria-hidden className="cert-watermark" />
        </div>
      </div>
    </div>
  );
}