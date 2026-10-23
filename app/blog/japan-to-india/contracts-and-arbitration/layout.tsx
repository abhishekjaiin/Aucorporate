import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration in India for Japanese Companies",
  },
  description:
    "Contracts for a Japanese-owned Indian subsidiary: intercompany and customer agreements, governing law, arbitration seat and enforcing awards from Japan in India.",
  alternates: guideAlternates("japan", "contracts-and-arbitration"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Contracts and Arbitration in India for Japanese Companies",
    description:
      "Contracts for a Japanese-owned Indian subsidiary: intercompany and customer agreements, governing law, arbitration seat and enforcing awards from Japan in India.",
    url: "https://www.theaucorp.com/blog/japan-to-india/contracts-and-arbitration",
  },
  twitter: {
    title: "Contracts and Arbitration in India for Japanese Companies",
    description:
      "Contracts for a Japanese-owned Indian subsidiary: intercompany and customer agreements, governing law, arbitration seat and enforcing awards from Japan in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
