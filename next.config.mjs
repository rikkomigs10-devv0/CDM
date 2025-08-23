// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/CDM' : '',
  assetPrefix: isProd ? '/CDM/' : '',
  trailingSlash: true,
  images: { unoptimized: true },

  // keep your original relaxed checks
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
