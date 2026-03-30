/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@erp/database'],
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

module.exports = nextConfig;
