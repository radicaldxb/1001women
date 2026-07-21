import type { MetadataRoute } from "next";
import { discoveryFiles, publicPages, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = publicPages.map((page) => ({
    url: page.path ? `${siteUrl}${page.path}` : siteUrl,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const files = discoveryFiles.map((file) => ({
    url: `${siteUrl}${file.path}`,
    lastModified: now,
    changeFrequency: file.changeFrequency,
    priority: file.priority,
  }));

  return [...pages, ...files];
}
