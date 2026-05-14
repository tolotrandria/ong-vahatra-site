import { describe, expect, it } from "vitest";

import { submitContactMessage } from "../app/contact/actions";

const validMessage = {
  name: "Anja Ramongo",
  email: "anja@example.com",
  organization: "ONG VAHATRA",
  message: "Nous souhaitons discuter d'un partenariat institutionnel avec votre equipe.",
};

describe("contact message submission", () => {
  it("does not claim success when Supabase is not configured", async () => {
    const result = await submitContactMessage(validMessage);

    expect(result.status).toBe("error");
    expect(result.message).toContain("Supabase");
  });
});
