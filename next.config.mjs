import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com/"
      }
    ]
  },
  experimental: {
    swcMinify: true
  }
};

export default withContentlayer(nextConfig);
