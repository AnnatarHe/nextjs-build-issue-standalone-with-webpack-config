import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  /* config options here */
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => config
};

export default nextConfig;
