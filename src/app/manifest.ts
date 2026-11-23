import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.groupName,
    short_name: siteConfig.groupName,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#fafafa",
    theme_color: "#0f0f11",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
