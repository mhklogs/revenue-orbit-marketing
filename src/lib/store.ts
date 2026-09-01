import { randomUUID } from "crypto";
import { getSupabase, hasSupabase } from "./supabase";
import { promises as fs } from "fs";
import { join } from "path";

// Collections live in the `rom_store` jsonb table (keyed by collection name).
// This keeps the exact app shapes (camelCase) intact and avoids column
// collisions with other apps sharing this Supabase project.
const DATA_DIR = join(process.cwd(), "data");

// Map the legacy filename (e.g. "blogs.json") to the rom_store key.
const STORE_KEY: Record<string, string> = {
  "blogs.json": "blogs",
  "teams.json": "team",
  "leads.json": "leads",
  "theme.json": "theme",
};

function keyFor(name: string): string {
  return STORE_KEY[name] || name.replace(/\.json$/, "");
}

// ---- Supabase rom_store helpers ----
async function readRow(name: string): Promise<unknown[] | unknown | null> {
  const db = getSupabase();
  const { data, error } = await db
    .from("rom_store")
    .select("data")
    .eq("key", keyFor(name))
    .maybeSingle();
  if (error) throw error;
  return data ? (data.data as unknown[] | unknown) : null;
}

async function writeRow(name: string, value: unknown): Promise<void> {
  const db = getSupabase();
  const { error } = await db.from("rom_store").upsert({
    key: keyFor(name),
    data: value,
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

// ---- local JSON fallback (used only when Supabase isn't configured) ----
async function filePath(name: string): Promise<string> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const p = join(DATA_DIR, name);
  try {
    await fs.access(p);
  } catch {
    await fs.writeFile(p, JSON.stringify([]), "utf-8");
  }
  return p;
}

// ---- public API (mirrors the old signature so callers are unchanged) ----

export async function readCollection<T>(name: string): Promise<T[]> {
  if (hasSupabase()) {
    try {
      const val = await readRow(name);
      if (Array.isArray(val)) return val as T[];
      if (val && typeof val === "object") return [val as T];
      return [];
    } catch (e) {
      console.error(`[store] readCollection(${name}) failed:`, e);
      return [];
    }
  }
  try {
    const p = await filePath(name);
    const raw = await fs.readFile(p, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeCollection<T>(name: string, items: T[]): Promise<void> {
  if (hasSupabase()) {
    try {
      await writeRow(name, items);
      return;
    } catch (e) {
      console.error(`[store] writeCollection(${name}) failed:`, e);
    }
  }
  const p = await filePath(name);
  await fs.writeFile(p, JSON.stringify(items, null, 2), "utf-8");
}

export async function readObject<T>(name: string): Promise<T | null> {
  if (hasSupabase()) {
    try {
      const val = await readRow(name);
      if (Array.isArray(val)) return (val[0] as T) ?? null;
      return (val as T) ?? null;
    } catch (e) {
      console.error(`[store] readObject(${name}) failed:`, e);
      return null;
    }
  }
  try {
    const p = await filePath(name);
    const raw = await fs.readFile(p, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed[0] as T) ?? null : (parsed as T);
  } catch {
    return null;
  }
}

export async function writeObject<T>(name: string, value: T): Promise<void> {
  if (hasSupabase()) {
    try {
      await writeRow(name, [value]);
      return;
    } catch (e) {
      console.error(`[store] writeObject(${name}) failed:`, e);
    }
  }
  const p = await filePath(name);
  await fs.writeFile(p, JSON.stringify(value, null, 2), "utf-8");
}

export function newId(): string {
  return randomUUID().slice(0, 16).replace(/-/g, "");
}