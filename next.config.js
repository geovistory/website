/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      { source: '/resources', destination: '/documentation', permanent: true },
      { source: '/project/591', destination: '/processetti', permanent: true },
    ];
  },
};

module.exports = nextConfig;
