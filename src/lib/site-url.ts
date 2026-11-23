import { siteConfig } from "@/config/site";

export function getSiteUrl(): string {
  return siteConfig.productionUrl;
}

export function getAbsoluteUrl(path = "/"): string {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

/**
 * Only the production deployment is indexed. Set NEXT_PUBLIC_SITE_URL on the Vercel production
 * environment; previews and local builds stay `noindex`.
 */
export function isIndexableDeployment(): boolean {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelEnvironment = process.env.VERCEL_ENV;

  if (!configuredUrl) return false;
  return vercelEnvironment === undefined || vercelEnvironment === "production";
}
