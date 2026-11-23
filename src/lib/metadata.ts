import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getAbsoluteUrl, isIndexableDeployment } from "@/lib/site-url";

export const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.groupName} — company information`,
  type: "image/png",
} as const;

export function robotsDirective(): Metadata["robots"] {
  return isIndexableDeployment() ? { index: true, follow: true } : { index: false, follow: false };
}

export function createPageMetadata({
  path,
  title,
  description,
}: Readonly<{
  path: string;
  title: string;
  description: string;
}>): Metadata {
  const url = getAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: robotsDirective(),
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${siteConfig.groupName}`,
      description,
      siteName: siteConfig.groupName,
      locale: "en_IN",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.groupName}`,
      description,
      images: [socialImage],
    },
  };
}
