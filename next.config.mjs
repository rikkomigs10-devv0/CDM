// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Needed for GitHub Pages static hosting
  output: 'export',
  basePath: '/v0-CDM',                // <-- your repo name
  assetPrefix: isProd ? '/v0-CDM/' : '',
  trailingSlash: true,                // generate /page/index.html

  // your original settings (kept)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },      // required for export (no Image Optimization)
}

export default nextConfig
