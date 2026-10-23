import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Handling Indian Tax Notices for a US-Owned Subsidiary",
  },
  description:
    "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.",
  alternates: guideAlternates("usa", "tax-notices-and-litigation"),
  openGraph: {
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Handling Indian Tax Notices for a US-Owned Subsidiary",
    description:
      "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-notices-and-litigation",
  },
  twitter: {
    title: "Handling Indian Tax Notices for a US-Owned Subsidiary",
    description:
      "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
