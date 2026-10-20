import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "216 FAQs: Setting Up an India Subsidiary from Japan",
  },
  description:
    "216 plain answers for Japanese companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  alternates: guideAlternates("japan", "faq"),
  openGraph: {
    siteName: "AU Corporate",
    title: "216 FAQs: Setting Up an India Subsidiary from Japan",
    description:
      "216 plain answers for Japanese companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
    url: "https://www.theaucorp.com/blog/japan-to-india/faq",
  },
  twitter: {
    title: "216 FAQs: Setting Up an India Subsidiary from Japan",
    description:
      "216 plain answers for Japanese companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
