import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
  },
  description:
    "What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs.",
  alternates: guideAlternates("australia", "tax-notices-and-litigation"),
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
