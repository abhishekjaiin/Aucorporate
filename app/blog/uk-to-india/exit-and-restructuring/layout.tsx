import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Selling, Restructuring or Closing an Indian Subsidiary: A Guide for UK Parents",
  },
  description:
    "How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI reporting and the UK substantial shareholding exemption.",
  alternates: guideAlternates("uk", "restructuring-and-exit"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Selling, Restructuring or Closing an Indian Subsidiary: A Guide for UK Parents",
    description:
      "How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI reporting and the UK substantial shareholding exemption.",
    url: "https://www.theaucorp.com/blog/uk-to-india/exit-and-restructuring",
    locale: "en_GB",
  },
  twitter: {
    title: "Selling, Restructuring or Closing an Indian Subsidiary: A Guide for UK Parents",
    description:
      "How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI reporting and the UK substantial shareholding exemption.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
