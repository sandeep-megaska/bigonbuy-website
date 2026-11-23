import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/site-shell";
import { siteConfig } from "@/config/site";
import { robotsDirective } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const defaultTitle = `${siteConfig.groupName} | Company information`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: defaultTitle, template: `%s | ${siteConfig.groupName}` },
  description: siteConfig.description,
  applicationName: siteConfig.groupName,
  formatDetection: { telephone: false, email: false, address: false },
  robots: robotsDirective(),
  openGraph: {
    type: "website",
    siteName: siteConfig.groupName,
    title: defaultTitle,
    description: siteConfig.description,
    url: getSiteUrl(),
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: siteConfig.description },
};

export const viewport: Viewport = {
  themeColor: "#f7f8fc",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--color-canvas)] text-[var(--color-foreground)]">
        <SkipLink />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
