import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global VAT for Japanese Companies Selling Abroad",
  },
  description:
    "How VAT works for Japanese companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
  alternates: guideAlternates("japan", "global-vat"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Global VAT for Japanese Companies Selling Abroad",
    description:
      "How VAT works for Japanese companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
    url: "https://www.theaucorp.com/blog/japan-to-india/global-vat",
  },
  twitter: {
    title: "Global VAT for Japanese Companies Selling Abroad",
    description:
      "How VAT works for Japanese companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
