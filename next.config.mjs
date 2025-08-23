// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

// 👉 Change this to your repo name exactly as it appears on GitHub.
const repo = "CDM"

export default {
  // Use static export so we can host on GitHub Pages
  output: "export",

  // Make the site work from https://<user>.github.io/<repo>/
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // next/image must be unoptimized for static export
  images: {
    unoptimized: true,
  },

  // Optional but helps avoid 404s on GH Pages when requesting folders
  trailingSlash: true,

  // Expose the base path to your client code (for <img> and CSS urls)
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
}
