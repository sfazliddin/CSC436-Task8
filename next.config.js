/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  }, images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placebear.com',
        port: '',
        pathname: '/200/200/**',
      },
    ],
  },
}

module.exports = nextConfig
