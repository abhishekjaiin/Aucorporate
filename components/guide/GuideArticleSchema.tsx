/**
 * Organization + Person + WebPage + Article JSON-LD for a guide page.
 * BreadcrumbList comes from the existing Breadcrumb component and FAQPage
 * from GuideFaqList — kept separate since not every guide page has FAQs.
 */
export function GuideArticleSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  isPartOfUrl,
  inLanguage = "en-US",
}: {
  url: string
  headline: string
  description: string
  datePublished: string
  dateModified: string
  /** The hub page's #webpage @id, when this is a spoke article. Omit on the hub itself. */
  isPartOfUrl?: string
  /** BCP 47 tag for the page's English variant, e.g. "en-AU" for the Australia cluster. */
  inLanguage?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": "https://www.theaucorp.com/#organization",
        name: "AU Corporate",
        url: "https://www.theaucorp.com/",
        slogan: "Growing Together",
        foundingDate: "2016",
        telephone: "+91-9999010513",
        address: {
          "@type": "PostalAddress",
          streetAddress: "408 Surya Kiran Building, 19 KG Marg",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110001",
          addressCountry: "IN",
        },
        sameAs: ["https://www.linkedin.com/company/a-u-corporate/", "https://www.instagram.com/aucorporate/"],
      },
      {
        "@type": "Person",
        "@id": "https://www.theaucorp.com/#abhishek-jaiin",
        name: "Abhishek Jaiin",
        jobTitle: "Chartered Accountant",
        worksFor: { "@id": "https://www.theaucorp.com/#organization" },
        url: "https://www.theaucorp.com/about",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Chartered Accountant, ICAI membership no. 544646",
          credentialCategory: "Professional certification",
          recognizedBy: { "@type": "Organization", name: "The Institute of Chartered Accountants of India" },
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: headline,
        description,
        inLanguage,
        dateModified,
        ...(isPartOfUrl ? { isPartOf: { "@id": `${isPartOfUrl}#webpage` } } : {}),
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline,
        description,
        author: { "@id": "https://www.theaucorp.com/#abhishek-jaiin" },
        publisher: { "@id": "https://www.theaucorp.com/#organization" },
        datePublished,
        dateModified,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        inLanguage,
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
