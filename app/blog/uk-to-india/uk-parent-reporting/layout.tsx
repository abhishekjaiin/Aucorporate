import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK Parent Obligations for an Indian Subsidiary: CFC Rules, Dividend Exemption and Transfer Pricing",
  },
  description:
    "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.",
  alternates: guideAlternates("uk", "parent-obligations"),
  openGraph: {
    siteName: "AU Corporate",
    title: "UK Parent Obligations for an Indian Subsidiary: CFC Rules, Dividend Exemption and Transfer Pricing",
    description:
      "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.",
    url: "https://www.theaucorp.com/blog/uk-to-india/uk-parent-reporting",
    locale: "en_GB",
  },
  twitter: {
    title: "UK Parent Obligations for an Indian Subsidiary: CFC Rules, Dividend Exemption and Transfer Pricing",
    description:
      "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
