import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents and Apostille for a Japanese Parent Company",
  },
  description:
    "Which documents a Japanese parent must prepare to incorporate an Indian subsidiary, and how notarization, translation and apostille work in Japan.",
  alternates: guideAlternates("japan", "documents-and-apostille"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Documents and Apostille for a Japanese Parent Company",
    description:
      "Which documents a Japanese parent must prepare to incorporate an Indian subsidiary, and how notarization, translation and apostille work in Japan.",
    url: "https://www.theaucorp.com/blog/japan-to-india/documents-and-apostille",
  },
  twitter: {
    title: "Documents and Apostille for a Japanese Parent Company",
    description:
      "Which documents a Japanese parent must prepare to incorporate an Indian subsidiary, and how notarization, translation and apostille work in Japan.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
