import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Consolidate SEO signals: the default Vercel alias must not be
      // indexed as a duplicate of the official domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "tiger-preservation-site.vercel.app" }],
        destination: "https://www.tigerpreservationcenter.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
