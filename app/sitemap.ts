import type { MetadataRoute } from "next";

const BASE = "https://pandinyo-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/demo", "/pricing", "/login", "/privacy", "/terms", "/support", "/contact"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
