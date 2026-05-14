import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Supabase schema", () => {
  it("does not grant broad authenticated reads for contact messages", () => {
    const schema = readFileSync("supabase/schema.sql", "utf8");

    expect(schema).toContain("enable row level security");
    expect(schema).toContain("for insert");
    expect(schema).not.toContain("for select\nto authenticated\nusing (true)");
  });
});
