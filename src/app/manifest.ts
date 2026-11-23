import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.groupName,
    short_name: siteConfig.groupName,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#f7f8fc",
    theme_color: "#070b34",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
