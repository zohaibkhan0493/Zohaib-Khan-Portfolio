import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/zohaib",
        permanent: false,
      },
      {
        source: "/zohaib/index.html",
        destination: "/zohaib",
        permanent: false,
      },
      {
        source: "/esham",
        destination: "/zohaib",
        permanent: false,
      },
      {
        source: "/esham/:path*",
        destination: "/zohaib/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/zohaib",
        destination: "/zohaib/index.html",
      },
    ];
  },
};

export default nextConfig;
