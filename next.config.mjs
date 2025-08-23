// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// ⚠️ If your site will be at https://USERNAME.github.io/REPO_NAME
// set repo below and leave isProjectPage = true.
// If you’re using a user/org root (https://USERNAME.github.io), set isProjectPage = false.
const repo = 'REPO_NAME'         // <-- change to your repo name, e.g. 'CDM'
const isProjectPage = true       // true for project pages, false for user/org root

const nextConfig = {
  output: 'export',              // writes static site to ./out
  images: { unoptimized: true }, // needed for export
  trailingSlash: true,           // helps with static hosting

  // These ensure assets/links work on GitHub Pages project sites
  basePath: isProd && isProjectPage ? `/${repo}` : '',
  assetPrefix: isProd && isProjectPage ? `/${repo}/` : undefined,
}

export default nextConfig
