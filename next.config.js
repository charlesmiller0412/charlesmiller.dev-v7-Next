/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["github.com", "www.charlesmiller.dev", "charlesmiller.dev"],
    },
};

module.exports = nextConfig;
