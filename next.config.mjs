// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/v0-CDM' : '',
  assetPrefix: isProd ? '/v0-CDM/' : '',
  trailingSlash: true,
  images: { unoptimized: true },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
