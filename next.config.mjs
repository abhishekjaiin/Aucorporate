/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
    ]
  },

  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

export default nextConfig
