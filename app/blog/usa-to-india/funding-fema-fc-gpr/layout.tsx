import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
  },
  description:
    "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/funding-fema-fc-gpr",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    description:
      "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
    url: "https://www.theaucorp.com/blog/usa-to-india/funding-fema-fc-gpr",
  },
  twitter: {
    title: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    description:
      "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
