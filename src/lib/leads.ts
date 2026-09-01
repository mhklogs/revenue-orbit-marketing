import { promises as fs } from "fs";
import { join } from "path";

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "closed";
  createdAt: string;
};

const DATA_DIR = join(process.cwd(), "data");
const LEADS_FILE = join(DATA_DIR, "leads.json");

async function ensureStore(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(LEADS_FILE);
  } catch {
    await fs.writeFile(LEADS_FILE, JSON.stringify([]), "utf-8");
  }
}

export async function readLeads(): Promise<Lead[]> {
  await ensureStore();
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeLeads(leads: Lead[]): Promise<void> {
  await ensureStore();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function addLead(input: Omit<Lead, "id" | "createdAt" | "status">): Promise<Lead> {
  const leads = await readLeads();
  const lead: Lead = {
    ...input,
    id: crypto.randomUUID(),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  leads.unshift(lead);
  await writeLeads(leads);
  return lead;
}
