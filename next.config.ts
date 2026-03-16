import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Ananya_Portfolio" : "",
  assetPrefix: isProd ? "/Ananya_Portfolio/" : "",
};

export default nextConfig;