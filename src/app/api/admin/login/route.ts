import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials, createSessionToken, SESSION_COOKIE } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json().catch(() => ({}));
  if (!verifyCredentials(String(username || ""), String(password || ""))) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }
  const token = createSessionToken();
  const res = NextResponse.json({ success: true, user: String(username) });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return res;
}
