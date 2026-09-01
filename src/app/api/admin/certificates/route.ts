import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readLeads } from "@/lib/leads";
import { getCertificates, issueCertificate } from "@/lib/certificates";

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  const certificates = await getCertificates();
  return NextResponse.json({ certificates });
}

export async function POST(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const body = await request.json().catch(() => ({}));
  const { leadId } = body;
  if (!leadId) {
    return NextResponse.json({ error: "leadId is required." }, { status: 400 });
  }

  const leads = await readLeads();
  const lead = leads.find((l) => l.id === leadId);
  if (!lead) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  const existing = await getCertificates();
  const already = existing.find((c) => c.leadId === lead.id);
  if (already) {
    return NextResponse.json({ success: true, certificate: already });
  }

  const certificate = await issueCertificate({
    leadId: lead.id,
    leadName: lead.name,
    company: lead.company || "",
    industry: lead.service || "Growth & Acquisition",
    outcome: "Qualified Growth Partnership",
  });
  return NextResponse.json({ success: true, certificate });
}