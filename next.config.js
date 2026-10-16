const path = require('path');
const withTM = require('next-transpile-modules')([
    '@matdata/yasgui-geo-plugin',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    async redirects() {
        return [
            { source: "/resources", destination: "/documentation", permanent: true },
            { source: "/project/591", destination: "/processetti", permanent: true },
        ];
    },
    webpack: (config) => {
        config.resolve.alias['../node_modules/leaflet'] = path.resolve(__dirname, 'node_modules/leaflet');
        return config;
    },
};

module.exports = withTM(nextConfig);