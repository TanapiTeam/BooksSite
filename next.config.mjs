/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    output: 'standalone',

    images: {
        domains: ['picsum.photos','storage.googleapis.com'],
      },
};

export default nextConfig;
