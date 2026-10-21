import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Singapore Parent Obligations: Tax, ACRA and Law for a Company with an Indian Subsidiary",
  },
  description:
    "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.",
  alternates: guideAlternates("singapore", "parent-obligations"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Singapore Parent Obligations: Tax, ACRA and Law for a Company with an Indian Subsidiary",
    description:
      "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/singapore-parent-obligations",
    locale: "en_GB",
  },
  twitter: {
    title: "Singapore Parent Obligations: Tax, ACRA and Law for a Company with an Indian Subsidiary",
    description:
      "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
