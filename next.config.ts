import type { NextConfig } from "next";

const API_INTERNAL_URL =
  process.env.API_INTERNAL_URL ?? "http://molu-api:8000";

const nextConfig: NextConfig = {
  // Emit a self-contained Node server bundle into .next/standalone
  // so the production Docker image only needs the runtime, not node_modules.
  output: "standalone",

  // Server-side proxy: browser hits /api/v1/* (same origin, no CORS),
  // Next.js forwards to the molu-api container on the shared docker network.
  // Backend is therefore NOT exposed to the public internet.
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${API_INTERNAL_URL}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
