import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL || "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Singleton server-side client (service role bypasses RLS; never expose to client).
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!url || !serviceKey) {
    throw new Error("Supabase is not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY missing).");
  }
  if (!client) {
    client = createClient(url, serviceKey, {
      auth: { persistSession: false },
    });
  }
  return client;
}

export function hasSupabase(): boolean {
  return Boolean(url && serviceKey);
}