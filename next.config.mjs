/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logicc-tecnologia-s3.s3.amazonaws.com',
        port: '',
        pathname: '/system/user_default.webp',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
