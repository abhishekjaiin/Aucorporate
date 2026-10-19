import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Restructuring, Mergers and Exit for an Indian Subsidiary",
  },
  description:
    "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/australia-to-india/restructuring-and-exit",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    description:
      "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.",
    url: "https://www.theaucorp.com/blog/australia-to-india/restructuring-and-exit",
    locale: "en_AU",
  },
  twitter: {
    title: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    description:
      "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
