import type { MetadataRoute } from "next";
import { companies } from "@/config/site";
import { getAbsoluteUrl } from "@/lib/site-url";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const routes: readonly Entry[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/companies", priority: 0.9, changeFrequency: "monthly" },
  ...companies.map((company): Entry => ({ path: `/companies/${company.slug}`, priority: 0.9, changeFrequency: "monthly" })),
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
