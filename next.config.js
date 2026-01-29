/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export, but still use Next.js Image component for lazy loading
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimize bundle size
  compress: true,
  // Enable static page generation
  trailingSlash: false,
  // Optimize fonts
  optimizeFonts: true,
}

module.exports = nextConfig

