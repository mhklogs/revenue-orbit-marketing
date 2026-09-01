import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readLeads, writeLeads } from "@/lib/leads";

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  const leads = await readLeads();
  return NextResponse.json({ leads });
}

export async function PATCH(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const body = await request.json().catch(() => ({}));
  const { id, status } = body;
  const leads = await readLeads();
  const lead = leads.find((l) => l.id === id);
  if (!lead) return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  if (["new", "contacted", "qualified", "closed"].includes(status)) {
    lead.status = status;
  }
  await writeLeads(leads);
  return NextResponse.json({ success: true, lead });
}

export async function DELETE(request: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { id } = await request.json().catch(() => ({}));
  const leads = (await readLeads()).filter((l) => l.id !== id);
  await writeLeads(leads);
  return NextResponse.json({ success: true });
}
