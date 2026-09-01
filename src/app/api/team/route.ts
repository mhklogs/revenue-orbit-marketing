import { NextResponse } from "next/server";
import { getTeam } from "@/lib/content";

export async function GET() {
  const team = await getTeam();
  return NextResponse.json({ team });
}
