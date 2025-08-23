// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

// 👉 EXACT repo name on GitHub:
const repo = "CDM"

export default {
  // Next 15 static export
  output: "export",

  // Make the app work at https://<user>.github.io/<repo>/
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // Required for static export
  images: { unoptimized: true },

  // Avoids folder vs file 404s on GH Pages
  trailingSlash: true,

  // Expose basePath to client if ever needed
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
}
