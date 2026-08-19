type BlogPostingSchemaProps = {
  headline: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
}

/**
 * Renders BlogPosting JSON-LD for a blog article. Centralized so every
 * post gets a consistent, correct shape instead of hand-rolled schema
 * per page (which is how the site ended up with zero blog posts having
 * any structured data at all).
 */
export function BlogPostingSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: BlogPostingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "AU Corporate",
      url: "https://www.theaucorp.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AU Corporate",
      logo: {
        "@type": "ImageObject",
        url: "https://www.theaucorp.com/logo.png",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
