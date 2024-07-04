/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['*', "www.pluralsight.com", "peasandcrayons.com", "www.technewsworld.com", "the-shooting-star.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
