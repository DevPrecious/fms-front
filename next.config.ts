import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/benefits/speed-limiter-solutions",
        destination: "/services/speed-limiter-solutions",
        permanent: true,
      },
      {
        source: "/products/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
      {
        source: "/products/vehicle-fuel-managment",
        destination: "/services/vehicle-fuel-management",
        permanent: true,
      },
      {
        source: "/request-quote",
        destination: "/about-us/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
