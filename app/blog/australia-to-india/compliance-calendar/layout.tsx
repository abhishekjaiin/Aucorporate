import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar for Australian Companies",
  },
  description:
    "The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/compliance-calendar",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/compliance-calendar",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/compliance-calendar",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar for Australian Companies",
    description:
      "The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
    url: "https://www.theaucorp.com/blog/australia-to-india/compliance-calendar",
    locale: "en_AU",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar for Australian Companies",
    description:
      "The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
