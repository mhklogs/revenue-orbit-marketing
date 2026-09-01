import { readCollection, writeCollection, newId } from "./store";

export type Certificate = {
  id: string;
  leadId: string;
  leadName: string;
  company: string;
  industry: string;
  outcome: string;
  issueDate: string;
  validUntil: string;
};

export const CERTIFICATES_FILE = "certificates.json";

export async function getCertificates(): Promise<Certificate[]> {
  return readCollection<Certificate>(CERTIFICATES_FILE);
}

export async function getCertificate(id: string): Promise<Certificate | null> {
  const all = await getCertificates();
  return all.find((c) => c.id === id) ?? null;
}

export async function issueCertificate(
  input: Omit<Certificate, "id" | "issueDate" | "validUntil">
): Promise<Certificate> {
  const all = await getCertificates();
  const cert: Certificate = {
    ...input,
    id: `CERT-${newId().toUpperCase()}`,
    issueDate: new Date().toISOString(),
    validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  };
  await writeCollection(CERTIFICATES_FILE, [cert, ...all]);
  return cert;
}