import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "143 FAQs: Setting Up an India Subsidiary from Singapore",
  },
  description:
    "143 plain answers for Singapore companies: incorporation, FEMA, the India-Singapore tax treaty, holding companies, staff and provident fund, data protection, compliance, repatriation and exit.",
  alternates: guideAlternates("singapore", "faq"),
  openGraph: {
    siteName: "AU Corporate",
    title: "143 FAQs: Setting Up an India Subsidiary from Singapore",
    description:
      "143 plain answers for Singapore companies: incorporation, FEMA, the India-Singapore tax treaty, holding companies, staff and provident fund, data protection, compliance, repatriation and exit.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/faq",
    locale: "en_GB",
  },
  twitter: {
    title: "143 FAQs: Setting Up an India Subsidiary from Singapore",
    description:
      "143 plain answers for Singapore companies: incorporation, FEMA, the India-Singapore tax treaty, holding companies, staff and provident fund, data protection, compliance, repatriation and exit.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
