import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Ananya-portfolio" : "",
  assetPrefix: isProd ? "/Ananya-portfolio/" : "",
};

export default nextConfig;