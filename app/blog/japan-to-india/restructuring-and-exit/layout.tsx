import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Restructuring or Exiting an Indian Subsidiary of a Japanese Group",
  },
  description:
    "How a Japanese parent can restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with FEMA and tax steps.",
  alternates: guideAlternates("japan", "restructuring-and-exit"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Restructuring or Exiting an Indian Subsidiary of a Japanese Group",
    description:
      "How a Japanese parent can restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with FEMA and tax steps.",
    url: "https://www.theaucorp.com/blog/japan-to-india/restructuring-and-exit",
  },
  twitter: {
    title: "Restructuring or Exiting an Indian Subsidiary of a Japanese Group",
    description:
      "How a Japanese parent can restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with FEMA and tax steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
