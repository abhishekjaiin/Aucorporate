import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar for US Companies",
  },
  description:
    "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
  alternates: guideAlternates("usa", "compliance-calendar"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar for US Companies",
    description:
      "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
    url: "https://www.theaucorp.com/blog/usa-to-india/compliance-calendar",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar for US Companies",
    description:
      "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
