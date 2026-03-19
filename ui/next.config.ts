import type { NextConfig } from "next";

const BACKEND = process.env.MEOK_BACKEND_URL || "http://70.29.210.33:44565";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACKEND}/api/:path*`,
      },
      {
        source: "/auth/:path*",
        destination: `${BACKEND}/auth/:path*`,
      },
      {
        source: "/chat/:path*",
        destination: `${BACKEND}/chat/:path*`,
      },
      {
        source: "/mcp",
        destination: `${BACKEND}/mcp`,
      },
    ];
  },
};

export default nextConfig;
