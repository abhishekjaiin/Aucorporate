import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Share Valuation for Japanese Investment in an Indian Subsidiary",
  },
  description:
    "Why shares issued to a Japanese parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  alternates: guideAlternates("japan", "share-valuation"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Share Valuation for Japanese Investment in an Indian Subsidiary",
    description:
      "Why shares issued to a Japanese parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
    url: "https://www.theaucorp.com/blog/japan-to-india/share-valuation",
  },
  twitter: {
    title: "Share Valuation for Japanese Investment in an Indian Subsidiary",
    description:
      "Why shares issued to a Japanese parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
