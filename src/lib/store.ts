import { promises as fs } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "data");

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

export async function readCollection<T>(name: string): Promise<T[]> {
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
  const p = await filePath(name);
  await fs.writeFile(p, JSON.stringify(items, null, 2), "utf-8");
}

export async function readObject<T>(name: string): Promise<T | null> {
  try {
    const p = await filePath(name);
    const raw = await fs.readFile(p, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function writeObject<T>(name: string, value: T): Promise<void> {
  const p = await filePath(name);
  await fs.writeFile(p, JSON.stringify(value, null, 2), "utf-8");
}
