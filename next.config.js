/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "photos.google.com",
      "lh3.google.com",
      "i.ibb.co",
      "ibb.co",
      "cdn.jsdelivr.net",
    ],
  },
};

module.exports = nextConfig;
