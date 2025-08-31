import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
}

module.exports = nextConfig
