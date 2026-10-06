/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Every image on existing pages is still self-hosted from
    // public/images/ or CSS/SVG — that lockdown (added 2026-09-21 after
    // hotlinked Unsplash images 404'd in production) stays in force. The
    // one exception, added for the Sanity-backed /insights system
    // (approved 2026-10-06), is cdn.sanity.io, which hosts images
    // uploaded through Sanity Studio — a managed, stable asset host, not
    // an ad hoc hotlink. Do not add any other external image host
    // without the same explicit confirmation.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
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
        destination: "/accounting-outsourcing-firm-for-united-states-cpas-firm",
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
