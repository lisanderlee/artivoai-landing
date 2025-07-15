/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** Base config object */
const nextConfig = {
  // Your existing or future Next.js config options go here
  // e.g. reactStrictMode: true,
};

export default withNextIntl(nextConfig);
