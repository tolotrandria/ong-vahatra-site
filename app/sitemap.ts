import type { MetadataRoute } from "next";

import { mainNavigation, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNavigation.map((item) => ({
    url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date("2026-05-14"),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
