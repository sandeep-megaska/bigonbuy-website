import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { companies, siteConfig } from "@/config/site";

export const alt = `${siteConfig.groupName} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public", siteConfig.brand.logoPath));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#ffffff",
          color: "#0f0f11",
          fontFamily: "sans-serif",
          borderBottom: "16px solid #e10600",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <img src={logoSrc} width={545} height={110} alt="" />
          <div style={{ fontSize: 44, fontWeight: 600, maxWidth: 900 }}>{siteConfig.tagline}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 26, color: "#46474d" }}>
          {companies.map((company) => (
            <div key={company.id} style={{ display: "flex" }}>{company.legalName}</div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
