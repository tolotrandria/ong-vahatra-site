import { describe, expect, it } from "vitest";

import { contactMessageSchema } from "../lib/contact/schema";

describe("contact message validation", () => {
  it("accepts a complete partner contact message", () => {
    const result = contactMessageSchema.safeParse({
      name: "Anja Ramongo",
      email: "anja@example.com",
      organization: "Partenaire VAHATRA",
      message: "Nous souhaitons discuter d'un partenariat institutionnel avec votre équipe.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects short messages before they reach Supabase", () => {
    const result = contactMessageSchema.safeParse({
      name: "A",
      email: "not-an-email",
      organization: "",
      message: "Bonjour",
    });

    expect(result.success).toBe(false);
  });
});
