import { ImageResponse } from "next/og";
import { companies, siteConfig } from "@/config/site";

export const alt = `${siteConfig.groupName} — company information`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#070b34",
          color: "#f7f8fc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: 10 }}>{siteConfig.groupName}</div>
          <div style={{ width: 120, height: 6, borderRadius: 3, background: "linear-gradient(90deg, #16e7d2, #4f8bff, #7b4dff)" }} />
          <div style={{ fontSize: 34, color: "#c3c8ec", marginTop: 16 }}>{siteConfig.tagline}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 26, color: "#c3c8ec" }}>
          {companies.map((company) => (
            <div key={company.id} style={{ display: "flex" }}>{company.legalName}</div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
