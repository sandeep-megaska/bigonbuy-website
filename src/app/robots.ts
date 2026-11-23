import type { MetadataRoute } from "next";
import { getAbsoluteUrl, isIndexableDeployment } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableDeployment()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: getAbsoluteUrl("/sitemap.xml"),
  };
}
