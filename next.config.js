/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: false,
  },
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

module.exports = nextConfig;
