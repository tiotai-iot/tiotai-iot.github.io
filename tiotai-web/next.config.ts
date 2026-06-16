import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tiotai-iot.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;