import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents for an Indian Subsidiary from the UK: Companies House, Notary and Apostille",
  },
  description:
    "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks.",
  alternates: guideAlternates("uk", "documents-and-apostille"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Documents for an Indian Subsidiary from the UK: Companies House, Notary and Apostille",
    description:
      "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks.",
    url: "https://www.theaucorp.com/blog/uk-to-india/documents-companies-house-apostille",
    locale: "en_GB",
  },
  twitter: {
    title: "Documents for an Indian Subsidiary from the UK: Companies House, Notary and Apostille",
    description:
      "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
