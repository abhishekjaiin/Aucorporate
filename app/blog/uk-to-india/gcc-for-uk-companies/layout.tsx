import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global Capability Centres in India for UK Companies: Models, Regulation and Transfer Pricing",
  },
  description:
    "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm outsourcing rules, transfer pricing, PE risk, talent and governance.",
  alternates: guideAlternates("uk", "gcc"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Global Capability Centres in India for UK Companies: Models, Regulation and Transfer Pricing",
    description:
      "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm outsourcing rules, transfer pricing, PE risk, talent and governance.",
    url: "https://www.theaucorp.com/blog/uk-to-india/gcc-for-uk-companies",
    locale: "en_GB",
  },
  twitter: {
    title: "Global Capability Centres in India for UK Companies: Models, Regulation and Transfer Pricing",
    description:
      "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm outsourcing rules, transfer pricing, PE risk, talent and governance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
