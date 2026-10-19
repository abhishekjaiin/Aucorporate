import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "122 FAQs: Setting Up an India Subsidiary from the UK",
  },
  description:
    "122 plain answers for UK companies: incorporation, FEMA, the India-UK tax treaty, CETA, staff and social security, data protection, compliance, repatriation and exit.",
  alternates: guideAlternates("uk", "faq"),
  openGraph: {
    siteName: "AU Corporate",
    title: "122 FAQs: Setting Up an India Subsidiary from the UK",
    description:
      "122 plain answers for UK companies: incorporation, FEMA, the India-UK tax treaty, CETA, staff and social security, data protection, compliance, repatriation and exit.",
    url: "https://www.theaucorp.com/blog/uk-to-india/faq",
    locale: "en_GB",
  },
  twitter: {
    title: "122 FAQs: Setting Up an India Subsidiary from the UK",
    description:
      "122 plain answers for UK companies: incorporation, FEMA, the India-UK tax treaty, CETA, staff and social security, data protection, compliance, repatriation and exit.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
