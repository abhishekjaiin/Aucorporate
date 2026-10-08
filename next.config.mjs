/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // No remotePatterns: every image on the public site — including new
    // Insights managed through the Postgres-backed dashboard — is
    // self-hosted from public/images/ or CSS/SVG. This lockdown was added
    // 2026-09-21 after hotlinked Unsplash images 404'd in production.
    // Sanity's cdn.sanity.io exception (added 2026-10-06) was removed when
    // Sanity was decommissioned in favor of the custom dashboard — do not
    // re-add an external image host without the same explicit
    // confirmation that exception required.
    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },

  // NON-WWW → WWW REDIRECT
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "theaucorp.com",
          },
        ],
        destination: "https://www.theaucorp.com/:path*",
        permanent: true,
      },
      {
        source: "/india-business-setup/why-india",
        destination: "/doing-business-in-india/why-india",
        permanent: true,
      },
      {
        source: "/india-business-setup/post-incorporation",
        destination: "/doing-business-in-india/post-incorporation",
        permanent: true,
      },
      {
        source: "/blog/accounting-outsourcing-india-us-businesses",
        destination: "/services/accounting-assurance",
        permanent: true,
      },
    ]
  },

  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

export default nextConfig
