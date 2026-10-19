import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Australia: FEMA and Form FC-GPR",
  },
  description:
    "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/funding-fema-fc-gpr",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/funding-fema-fc-gpr",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/funding-fema-fc-gpr",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Australia: FEMA and Form FC-GPR",
    description:
      "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
    url: "https://www.theaucorp.com/blog/australia-to-india/funding-fema-fc-gpr",
    locale: "en_AU",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Australia: FEMA and Form FC-GPR",
    description:
      "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
