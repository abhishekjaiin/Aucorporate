import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
  },
  description:
    "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/tax-notices-and-litigation",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
    description:
      "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.",
    url: "https://www.theaucorp.com/blog/australia-to-india/tax-notices-and-litigation",
    locale: "en_AU",
  },
  twitter: {
    title: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
    description:
      "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
