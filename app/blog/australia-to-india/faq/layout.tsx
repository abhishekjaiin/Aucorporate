import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "266 FAQs: Setting Up an India Subsidiary from Australia",
  },
  description:
    "266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  alternates: guideAlternates("australia", "faq"),
  openGraph: {
    siteName: "AU Corporate",
    title: "266 FAQs: Setting Up an India Subsidiary from Australia",
    description:
      "266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
    url: "https://www.theaucorp.com/blog/australia-to-india/faq",
    locale: "en_AU",
  },
  twitter: {
    title: "266 FAQs: Setting Up an India Subsidiary from Australia",
    description:
      "266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
