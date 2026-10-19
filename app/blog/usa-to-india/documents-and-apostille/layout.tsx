import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents and Apostille for an India Subsidiary (US Parent)",
  },
  description:
    "Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents.",
  alternates: guideAlternates("usa", "documents-and-apostille"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Documents and Apostille for an India Subsidiary (US Parent)",
    description:
      "Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents.",
    url: "https://www.theaucorp.com/blog/usa-to-india/documents-and-apostille",
  },
  twitter: {
    title: "Documents and Apostille for an India Subsidiary (US Parent)",
    description:
      "Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
