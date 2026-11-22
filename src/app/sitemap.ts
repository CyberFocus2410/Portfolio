import { MetadataRoute } from "next";
import { SEED_PROJECTS } from "@/sanity/seed-data";
import { DOORS_DATA } from "@/data/doors-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vivanmittal.cv";
  const now = new Date();

  const staticRoutes = [
    "",
    "/work",
    "/projects",
    "/hackathons",
    "/certificates",
    "/skills",
    "/my-story",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = SEED_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const domainRoutes = DOORS_DATA.map((door) => ({
    url: `${baseUrl}${door.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...domainRoutes];
}
