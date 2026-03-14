import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Ananya_Portfolio",
  assetPrefix: "/Ananya_Portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;