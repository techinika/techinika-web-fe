// app/sitemap.ts
import type { MetadataRoute } from "next";
import { consultancyProjects } from "@/data/portfolio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "https://techinika.co.rw";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/masterclass`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/consultancy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/community`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/story`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/media`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const dynamicProjectRoutes: MetadataRoute.Sitemap = consultancyProjects.map(
    (project) => ({
      url: `${BASE_URL}/consultancy/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...dynamicProjectRoutes];
}
