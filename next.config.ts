import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained Node server bundle into .next/standalone
  // so the production Docker image only needs the runtime, not node_modules.
  output: "standalone",
};

export default nextConfig;
