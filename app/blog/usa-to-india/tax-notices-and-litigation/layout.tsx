import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Handling Indian Tax Notices and Disputes for a US-Owned Subsidiary",
  },
  description:
    "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and advance pricing agreements.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/tax-notices-and-litigation",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Handling Indian Tax Notices and Disputes for a US-Owned Subsidiary",
    description:
      "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and advance pricing agreements.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-notices-and-litigation",
  },
  twitter: {
    title: "Handling Indian Tax Notices and Disputes for a US-Owned Subsidiary",
    description:
      "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and advance pricing agreements.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
