import { createClient as createSupabaseClient } from "@supabase/supabase-js";

import { getSupabaseBrowserConfig } from "./config";

export function createSupabaseServerClient() {
  const config = getSupabaseBrowserConfig();

  if (!config.isConfigured || !config.url || !config.publishableKey) {
    return null;
  }

  return createSupabaseClient(config.url, config.publishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
