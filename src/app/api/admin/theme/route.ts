import { NextRequest, NextResponse } from "next/server";
import { getTheme, saveTheme, ThemeSettings } from "@/lib/content";

export async function GET() {
  const theme = await getTheme();
  return NextResponse.json({ theme });
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as Partial<ThemeSettings>;
  const theme = await saveTheme({
    accent: String(body.accent || ""),
    accentLight: String(body.accentLight || ""),
    accentDark: String(body.accentDark || ""),
  });
  return NextResponse.json({ success: true, theme });
}
