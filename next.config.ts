import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.clerk.dev",
        pathname: "/uploaded/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon/**",
      },
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "zod.dev",
      },
      {
        protocol: "https",
        hostname: "static.expo.dev",
      },
      {
        protocol: "https",
        hostname: "posthog.com",
      },
      {
        protocol: "https",
        hostname: "www.chartjs.org",
      },
      {
        protocol: "https",
        hostname: "tamagui.dev",
      },
      {
        protocol: "https",
        hostname: "react-hook-form.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
