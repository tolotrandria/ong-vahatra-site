type SupabaseEnv = Partial<Record<string, string | undefined>>;

export type SupabaseBrowserConfig = {
  isConfigured: boolean;
  url: string | null;
  publishableKey: string | null;
};

export function getSupabaseBrowserConfig(env: SupabaseEnv = process.env): SupabaseBrowserConfig {
  const url = env.NEXT_PUBLIC_SUPABASE_URL?.trim() || null;
  const publishableKey =
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    null;

  return {
    isConfigured: Boolean(url && publishableKey),
    url,
    publishableKey,
  };
}
