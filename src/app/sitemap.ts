import type { MetadataRoute } from "next";
import { resolutions } from "@/lib/resolutions";
import { comparisons } from "@/lib/comparisons";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const resolutionPages = resolutions.map((r) => ({
    url: `${SITE_URL}/resolution/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const comparisonPages = comparisons.map((c) => ({
    url: `${SITE_URL}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...resolutionPages,
    ...comparisonPages,
    ...blogPages,
  ];
}
