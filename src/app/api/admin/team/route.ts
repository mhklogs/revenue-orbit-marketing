import { NextRequest, NextResponse } from "next/server";
import { getTeam, upsertTeamMember, deleteTeamMember, TeamMember } from "@/lib/content";

export async function GET() {
  const team = await getTeam();
  return NextResponse.json({ team });
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as Partial<TeamMember>;
  const name = String(body.name || "").trim();
  const role = String(body.role || "").trim();
  if (!name || !role) {
    return NextResponse.json({ error: "Name and role are required." }, { status: 400 });
  }
  const member = await upsertTeamMember({
    id: String(body.id || crypto.randomUUID()),
    name,
    role,
    bio: String(body.bio || ""),
    email: String(body.email || ""),
    createdAt: String(body.createdAt || new Date().toISOString()),
  });
  return NextResponse.json({ success: true, member });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json().catch(() => ({}));
  await deleteTeamMember(String(id || ""));
  return NextResponse.json({ success: true });
}
