const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets0.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets1.auto.dev",
      },
      {
        protocol: "http",
        hostname: "vehicle-photos-published.vauto.com",
      },
      {
        protocol: "https",
        hostname: "production-assets2.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets3.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets4.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets5.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets6.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets7.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets8.auto.dev",
      },
      {
        protocol: "https",
        hostname: "production-assets9.auto.dev",
      },

      {
        protocol: "https",
        hostname: "production-assets10.auto.dev",
      },
    ],
  },
};

module.exports = nextConfig;
