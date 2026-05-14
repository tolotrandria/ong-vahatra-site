import { describe, expect, it } from "vitest";

import { activities, contact, mainNavigation, partners, siteStats } from "../data/site";
import { impactMetrics } from "../data/impact";
import { newsArticles } from "../data/news";
import { galleryItems } from "../data/gallery";

describe("VAHATRA institutional content", () => {
  it("covers every required public page", () => {
    const hrefs = mainNavigation.map((item) => item.href);

    expect(hrefs).toEqual([
      "/",
      "/about",
      "/activities",
      "/impact",
      "/news",
      "/gallery",
      "/contact",
    ]);
  });

  it("keeps the required contact channels from the source file", () => {
    expect(contact.address).toContain("Tomboarivo");
    expect(contact.phones).toContain("+261 33 15 247 47");
    expect(contact.phones).toContain("+261 33 14 94 847");
    expect(contact.emails).toContain("ongvahatra@gmail.com");
    expect(contact.facebook).toContain("facebook.com/ongvahatra");
  });

  it("has complete activity data for institutional storytelling", () => {
    expect(activities).toHaveLength(6);
    expect(activities.every((activity) => activity.title && activity.impact && activity.image)).toBe(true);
  });

  it("has enough mock impact, partner, news, and media data for a sellable demo", () => {
    expect(siteStats.length).toBeGreaterThanOrEqual(4);
    expect(impactMetrics.length).toBeGreaterThanOrEqual(4);
    expect(partners.length).toBeGreaterThanOrEqual(5);
    expect(newsArticles.length).toBeGreaterThanOrEqual(6);
    expect(galleryItems.length).toBeGreaterThanOrEqual(10);
  });
});
