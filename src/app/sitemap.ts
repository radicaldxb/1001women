import type { MetadataRoute } from "next";
import { publicPages, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicPages.map((page) => ({
    url: page.path ? `${siteUrl}${page.path}` : siteUrl,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
