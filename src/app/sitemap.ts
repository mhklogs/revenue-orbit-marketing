import type { MetadataRoute } from "next";

const BASE = "https://rom-website.vercel.app";

const staticRoutes = [
  "", "/about", "/services", "/industries", "/blog", "/campaigns",
  "/careers", "/contact", "/terms", "/privacy", "/cookies",
];

const serviceSlugs = [
  "customer-acquisition", "business-process-outsourcing", "digital-marketing",
  "contact-center-solutions", "remote-workforce-solutions", "crm-business-automation",
];

const industrySlugs = [
  "legal", "insurance", "healthcare", "financial-services",
  "home-services", "real-estate", "technology-saas", "professional-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
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
    ...industrySlugs.map((i) => ({
      url: `${BASE}/industries/${i}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
  return routes;
}
