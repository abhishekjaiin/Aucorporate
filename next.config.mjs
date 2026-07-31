/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.corenexis.com",
      },
      {
        protocol: "https",
        hostname: "user8396.na.imgto.link",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.imageurlgenerator.com",
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
            key: "Cache-Control",
            value:
              "public, max-age=3600, stale-while-revalidate=86400",
          },

          // SECURITY + SEO TRUST SIGNALS
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

      // Content consolidation: these topics existed as near-duplicates in
      // both the /doing-business-in-india/ and /india-business-setup/
      // clusters, competing against each other in search instead of
      // reinforcing one ranking signal. Redirecting to the more developed
      // version of each (301, so any existing link equity carries over).
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
      // Folder was renamed from /blog/construction-arbitration-in-India (capital I)
      // to lowercase, matching every other blog slug's convention. This was
      // actively broken — the blog index linked to lowercase while the page's
      // own canonical declared the capital-I version, so anything crawled or
      // bookmarked with the old casing gets redirected rather than 404ing.
      {
        source: "/blog/construction-arbitration-in-India",
        destination: "/blog/construction-arbitration-in-india",
        permanent: true,
      },
    ]
  },

  // SEO consistency
  trailingSlash: false,

  // performance + security
  poweredByHeader: false,

  compress: true,

  reactStrictMode: true,
}

export default nextConfig