import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Share Valuation for Australian Investment in India",
  },
  description:
    "Why shares issued to an Australian parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  alternates: guideAlternates("australia", "share-valuation"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Share Valuation for Australian Investment in India",
    description:
      "Why shares issued to an Australian parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
    url: "https://www.theaucorp.com/blog/australia-to-india/share-valuation",
    locale: "en_AU",
  },
  twitter: {
    title: "Share Valuation for Australian Investment in India",
    description:
      "Why shares issued to an Australian parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
