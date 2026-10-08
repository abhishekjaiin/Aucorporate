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
          "/*.json$",
        ],
      },
      // Priority search engines - full access
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
      // AI / LLM crawlers - explicitly allowed for GEO (generative engine optimization)
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
        userAgent: "OAI-SearchBot",
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
      // Block aggressive SEO crawlers to preserve crawl budget
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
    // No `host` directive: it's a Yandex-only extension deprecated since
    // 2018, not part of the robots.txt standard (RFC 9309), and not
    // recognized by Google/Bing/any current crawler — some validators flag
    // it as invalid/non-standard syntax for no actual benefit.
  }
}
