import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Using a Singapore Holding Company for India: Treaty Benefits, Substance and Limits",
  },
  description:
    "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.",
  alternates: guideAlternates("singapore", "holdco"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Using a Singapore Holding Company for India: Treaty Benefits, Substance and Limits",
    description:
      "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/singapore-holdco-for-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Using a Singapore Holding Company for India: Treaty Benefits, Substance and Limits",
    description:
      "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
