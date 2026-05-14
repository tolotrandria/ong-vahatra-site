import { describe, expect, it } from "vitest";

import { getSupabaseBrowserConfig } from "../lib/supabase/config";

describe("Supabase configuration", () => {
  it("reports missing public configuration without throwing", () => {
    const config = getSupabaseBrowserConfig({});

    expect(config.isConfigured).toBe(false);
    expect(config.url).toBeNull();
    expect(config.publishableKey).toBeNull();
  });

  it("accepts either publishable or anon public key names", () => {
    const config = getSupabaseBrowserConfig({
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon-key",
    });

    expect(config).toEqual({
      isConfigured: true,
      url: "https://example.supabase.co",
      publishableKey: "anon-key",
    });
  });

  it("does not expose unrelated server-only keys in browser configuration", () => {
    const config = getSupabaseBrowserConfig({
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "publishable-key",
      INTERNAL_SERVER_ONLY_KEY: "server-only",
    });

    expect(config).not.toHaveProperty("INTERNAL_SERVER_ONLY_KEY");
  });
});
