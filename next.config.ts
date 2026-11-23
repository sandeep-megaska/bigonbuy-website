import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // bigonbuy.com had no earlier pages to preserve at the time of writing. If old URLs turn
    // out to exist (for example from a previous store), add permanent redirects here.
    return [{ source: "/legal", destination: "/legal/privacy", permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
