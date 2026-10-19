import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
  },
  description:
    "What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/tax-notices-and-litigation",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/tax-notices-and-litigation",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/tax-notices-and-litigation",
    },
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
    description:
      "What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs.",
    url: "https://www.theaucorp.com/blog/australia-to-india/tax-notices-and-litigation",
    locale: "en_AU",
  },
  twitter: {
    title: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
    description:
      "What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
