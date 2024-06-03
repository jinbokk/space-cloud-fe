import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTwin({
  reactStrictMode: true,
});

export default nextConfig;
