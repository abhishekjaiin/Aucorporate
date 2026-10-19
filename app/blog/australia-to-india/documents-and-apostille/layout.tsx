import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents and Apostille for an India Subsidiary (Australian Parent)",
  },
  description:
    "Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and DFAT apostille work for Australian company documents.",
  alternates: guideAlternates("australia", "documents-and-apostille"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Documents and Apostille for an India Subsidiary (Australian Parent)",
    description:
      "Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and DFAT apostille work for Australian company documents.",
    url: "https://www.theaucorp.com/blog/australia-to-india/documents-and-apostille",
    locale: "en_AU",
  },
  twitter: {
    title: "Documents and Apostille for an India Subsidiary (Australian Parent)",
    description:
      "Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and DFAT apostille work for Australian company documents.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
