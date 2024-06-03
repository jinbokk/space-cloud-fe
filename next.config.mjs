import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['kr.object.ncloudstorage.com'],
  },
});

export default nextConfig;
