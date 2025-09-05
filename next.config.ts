import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    unoptimized: true, // Optional if you don’t want Next.js to optimize
  },
};

export default nextConfig;
