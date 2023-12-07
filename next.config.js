/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "s3-us-west-2.amazonaws.com" }],
  },
};

module.exports = nextConfig;
