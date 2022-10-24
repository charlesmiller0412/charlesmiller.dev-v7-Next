/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "github.com",
            "www.charlesmiller.dev",
            "github-stats-alpha.vercel.app",
            "github-readme-stats.vercel.app",
        ],
    },
};

module.exports = nextConfig;
