import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** Base Next.js config with full types */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.lottielab.com',
        pathname: '/**', // Allow all image paths
      },
    ],
  },
  // Example additional options:
  // reactStrictMode: true,
  // swcMinify: true,
};

export default withNextIntl(nextConfig);
