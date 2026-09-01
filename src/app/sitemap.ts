import type { MetadataRoute } from "next";
import { industries } from "@/lib/data";
import { getBlogs } from "@/lib/content";

const BASE = "https://rom-website.vercel.app";

const staticRoutes = [
  "", "/about", "/services", "/industries", "/blog", "/campaigns",
  "/careers", "/contact", "/terms", "/privacy", "/cookies",
];

const serviceSlugs = [
  "customer-acquisition", "business-process-outsourcing", "digital-marketing",
  "contact-center-solutions", "remote-workforce-solutions", "crm-business-automation",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogs();

  return [
    ...staticRoutes.map((r) => ({
      url: `${BASE}${r}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...serviceSlugs.map((s) => ({
      url: `${BASE}/services/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...industries.map((i) => ({
      url: `${BASE}/industries/${i.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}