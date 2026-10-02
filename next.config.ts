import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Consolidate SEO signals: the *.vercel.app aliases of the production
    // deployment must not be indexed as duplicates of the official domain.
    // Applied only to production builds so preview deployments stay viewable.
    if (process.env.VERCEL_ENV !== "production") return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: "https://www.tigerpreservationcenter.org/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Photos change rarely; 30 days fresh, then serve-stale-while-refreshing.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=31536000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
