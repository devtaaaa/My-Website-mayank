import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85, 90, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Required for static export — Next.js image optimization needs a server
    unoptimized: true,
  },
  // Ensure GSAP can be bundled correctly
  transpilePackages: ['gsap'],
};

export default nextConfig;
