/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  poweredByHeader: false,
  reactStrictMode: true
};

module.exports = nextConfig;