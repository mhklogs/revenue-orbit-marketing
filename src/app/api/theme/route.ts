import { NextResponse } from "next/server";
import { getTheme } from "@/lib/content";

export async function GET() {
  const theme = await getTheme();
  return NextResponse.json({ theme });
}
