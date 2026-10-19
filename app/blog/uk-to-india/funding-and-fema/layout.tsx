import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from the UK: FEMA, Pricing, Valuation and Form FC-GPR",
  },
  description:
    "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.",
  alternates: guideAlternates("uk", "funding-fema-fc-gpr"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from the UK: FEMA, Pricing, Valuation and Form FC-GPR",
    description:
      "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.",
    url: "https://www.theaucorp.com/blog/uk-to-india/funding-and-fema",
    locale: "en_GB",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from the UK: FEMA, Pricing, Valuation and Form FC-GPR",
    description:
      "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day allotment rule and Form FC-GPR.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
