import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Japan: FEMA and FC-GPR",
  },
  description:
    "How a Japanese parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  alternates: guideAlternates("japan", "funding-fema-fc-gpr"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Japan: FEMA and FC-GPR",
    description:
      "How a Japanese parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
    url: "https://www.theaucorp.com/blog/japan-to-india/funding-fema-fc-gpr",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Japan: FEMA and FC-GPR",
    description:
      "How a Japanese parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
