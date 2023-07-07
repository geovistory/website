/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [{ source: '/resources', destination: '/documentation', permanent: true }];
  },
};

module.exports = nextConfig;
