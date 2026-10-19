export type GuideFaqItem = { q: string; a: string }

/**
 * Plain Q/A list (not an accordion) for the long-form guide format, matching
 * the uploaded source design. Renders the visible list and the matching
 * FAQPage JSON-LD together so they can't drift out of sync.
 */
export function GuideFaqList({
  faqs,
  seeAllHref,
  seeAllCount = 216,
  seeAllLabel,
  seeAllDescription = "Plain-English answers from pre-incorporation to closure, repatriation, ESOPs, capital increases, sale of business and mergers.",
}: {
  faqs: GuideFaqItem[]
  seeAllHref?: string
  seeAllCount?: number
  /** Overrides the default "See all {seeAllCount} questions" link text. */
  seeAllLabel?: string
  seeAllDescription?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  return (
    <div>
      <div className="divide-y divide-gray-200">
        {faqs.map((item) => (
          <div key={item.q} className="py-4">
            <h3 className="font-bold text-gray-900 mb-1.5">{item.q}</h3>
            <p className="text-gray-600 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
      {seeAllHref && (
        <a
          href={seeAllHref}
          className="block mt-5 rounded-lg border border-blue-800 p-4 hover:bg-secondary/30 transition-colors"
        >
          <strong className="text-blue-900">{seeAllLabel ?? `See all ${seeAllCount} questions`} &rarr;</strong>
          <span className="block text-sm text-gray-600 mt-0.5">{seeAllDescription}</span>
        </a>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
