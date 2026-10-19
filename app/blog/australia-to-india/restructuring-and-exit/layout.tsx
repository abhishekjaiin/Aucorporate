import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Restructuring or Exiting an Australian-Owned Indian Subsidiary",
  },
  description:
    "Options for an Australian parent to restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation.",
  alternates: guideAlternates("australia", "restructuring-and-exit"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Restructuring or Exiting an Australian-Owned Indian Subsidiary",
    description:
      "Options for an Australian parent to restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation.",
    url: "https://www.theaucorp.com/blog/australia-to-india/restructuring-and-exit",
    locale: "en_AU",
  },
  twitter: {
    title: "Restructuring or Exiting an Australian-Owned Indian Subsidiary",
    description:
      "Options for an Australian parent to restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
