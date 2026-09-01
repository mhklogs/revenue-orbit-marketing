import { createHmac, timingSafeEqual, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const ADMIN_USER = process.env.ADMIN_USER || "admin";
export const ADMIN_PASS = process.env.ADMIN_PASS || "rom-admin-2026";
const SECRET = process.env.ADMIN_SECRET || "rom-admin-secret-change-me";
export const SESSION_COOKIE = "rom_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

export function verifyCredentials(username: string, password: string): boolean {
  const a = Buffer.from(username);
  const b = Buffer.from(ADMIN_USER);
  const c = Buffer.from(password);
  const d = Buffer.from(ADMIN_PASS);
  const ok1 = a.length === b.length && timingSafeEqual(a, b);
  const ok2 = c.length === d.length && timingSafeEqual(c, d);
  return ok1 && ok2;
}

function sign(payload: string): string {
  return createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function createSessionToken(): string {
  const token = randomBytes(32).toString("hex");
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `${token}.${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidSession(value: string | undefined): boolean {
  if (!value) return false;
  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const exp = Number(parts[1]);
  const sig = parts[2];
  if (!Number.isFinite(exp) || exp < Date.now()) return false;
  const expected = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function requireAdmin(): Promise<NextResponse | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  if (!isValidSession(session)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
