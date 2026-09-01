import { readCollection, writeCollection, newId } from "./store";

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
  consent: boolean;
  createdAt: string;
};

const LEADS_FILE = "leads.json";

export async function readLeads(): Promise<Lead[]> {
  return readCollection<Lead>(LEADS_FILE);
}

export async function writeLeads(leads: Lead[]): Promise<void> {
  await writeCollection(LEADS_FILE, leads);
}

export async function addLead(
  input: Omit<Lead, "id" | "createdAt" | "status">
): Promise<Lead> {
  const leads = await readLeads();
  const lead: Lead = {
    ...input,
    consent: input.consent ?? false,
    id: newId(),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  await writeCollection(LEADS_FILE, [lead, ...leads]);
  return lead;
}