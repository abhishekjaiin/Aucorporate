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
      // Retired pages: each old URL points to the page that replaced it, so
      // links and search rankings carry over instead of hitting a 404. Keep
      // specific paths above the ":path*" fallback for the same prefix.
      {
        source: "/liaison-office-roc-compliance",
        destination: "/foreign-company-roc-compliance",
        permanent: true,
      },
      {
        source: "/project-office-roc-compliance",
        destination: "/foreign-company-roc-compliance",
        permanent: true,
      },
      {
        source: "/branch-office-in-india",
        destination: "/branch-office-registration",
        permanent: true,
      },
      {
        source: "/liaison-office-in-india",
        destination: "/liaison-office-registration",
        permanent: true,
      },
      {
        source: "/project-office-in-india",
        destination: "/project-office-registration",
        permanent: true,
      },
      {
        source: "/india-business-setup",
        destination: "/india-business-setup/company-formation",
        permanent: true,
      },
      {
        source: "/india-business-setup/foreign-subsidiary-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/accounting-outsourcing-firm-for-united-states-cpas-firm",
        destination: "/outsourcing",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies",
        destination: "/blog/usa-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/annual-compliance-calendar",
        destination: "/blog/usa-to-india/compliance-calendar",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation",
        destination: "/blog/usa-to-india/restructuring-and-exit",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us",
        destination: "/blog/usa-to-india/incorporation-process",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary",
        destination: "/blog/usa-to-india/funding-fema-fc-gpr",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us",
        destination: "/blog/usa-to-india/incorporation-process",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/permanent-establishment-risk-india",
        destination: "/blog/usa-to-india/dtaa-pe-risk",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/register-company-in-india-from-usa",
        destination: "/blog/usa-to-india/incorporation-process",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax",
        destination: "/blog/usa-to-india/repatriating-profits",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary",
        destination: "/blog/usa-to-india/transfer-pricing",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india",
        destination: "/blog/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/:path*",
        destination: "/blog/usa-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies",
        destination: "/blog/uk-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk",
        destination: "/blog/uk-to-india/incorporation-steps",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary",
        destination: "/blog/uk-to-india/funding-and-fema",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk",
        destination: "/blog/uk-to-india/incorporation-steps",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax",
        destination: "/blog/uk-to-india/india-uk-dtaa",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india",
        destination: "/blog/uk-to-india/structure-options",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/:path*",
        destination: "/blog/uk-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-australian-companies",
        destination: "/blog/australia-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india",
        destination: "/blog/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
        permanent: true,
      },
      {
        source: "/india-entry-for-australian-companies/:path*",
        destination: "/blog/australia-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-japan-companies",
        destination: "/blog/japan-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-japan-companies/:path*",
        destination: "/blog/japan-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-japanese-companies",
        destination: "/blog/japan-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-japanese-companies/:path*",
        destination: "/blog/japan-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-singapore-companies",
        destination: "/blog/singapore-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-singapore-companies/:path*",
        destination: "/blog/singapore-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-german-companies/:path*",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/india-entry-for-china-companies/:path*",
        destination: "/india-subsidiary-registration",
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
