import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Image optimization for better SEO and performance
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'tryllekenneth.dk',
      },
    ],
  },
  // Compression and optimization
  compress: true,
  // Enable trailing slashes for consistent URLs
  trailingSlash: false,
  // Generate ETags for caching
  generateEtags: true,
  // PWA-friendly configuration
  reactStrictMode: true,
  // Use swcMinify for faster builds
  swcMinify: true,
  // Optimize font loading
  optimizeFonts: true,
}

export default withNextIntl(nextConfig)

