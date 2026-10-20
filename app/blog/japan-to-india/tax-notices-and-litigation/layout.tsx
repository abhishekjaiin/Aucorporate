import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Handling Indian Tax Notices for a Japanese-Owned Subsidiary",
  },
  description:
    "How a Japanese-owned Indian subsidiary should handle Indian income tax, GST and transfer pricing notices: deadlines, replies, appeals and the India-Japan MAP.",
  alternates: guideAlternates("japan", "tax-notices-and-litigation"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Handling Indian Tax Notices for a Japanese-Owned Subsidiary",
    description:
      "How a Japanese-owned Indian subsidiary should handle Indian income tax, GST and transfer pricing notices: deadlines, replies, appeals and the India-Japan MAP.",
    url: "https://www.theaucorp.com/blog/japan-to-india/tax-notices-and-litigation",
  },
  twitter: {
    title: "Handling Indian Tax Notices for a Japanese-Owned Subsidiary",
    description:
      "How a Japanese-owned Indian subsidiary should handle Indian income tax, GST and transfer pricing notices: deadlines, replies, appeals and the India-Japan MAP.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
