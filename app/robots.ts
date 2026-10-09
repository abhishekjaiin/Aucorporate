import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          // Cloudflare-managed endpoints are not site content and can produce
          // crawler-only errors (including email-protection URLs).
          "/cdn-cgi/",
        ],
      },

      // Major search engines
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Slurp",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },

      // AI / LLM crawlers
      // Keep public AU Corporate content accessible for AI search/discovery.
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "OAI-AdsBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      {
        userAgent: "Perplexity-User",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },

      // These SEO crawlers are currently allowed. Change this only if there
      // is a deliberate decision to restrict their access.
      {
        userAgent: "AhrefsBot",
        allow: "/",
      },
      {
        userAgent: "SemrushBot",
        allow: "/",
      },
      {
        userAgent: "MJ12bot",
        allow: "/",
      },
      {
        userAgent: "DotBot",
        allow: "/",
      },
    ],
    sitemap: [
      "https://www.theaucorp.com/sitemap.xml",
    ],
  }
}
