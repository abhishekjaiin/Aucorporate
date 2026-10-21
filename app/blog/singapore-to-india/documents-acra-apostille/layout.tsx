import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents for an Indian Subsidiary: ACRA Records, Notary and Apostille from Singapore",
  },
  description:
    "The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers, notarisation and the Singapore Academy of Law apostille.",
  alternates: guideAlternates("singapore", "documents-and-apostille"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Documents for an Indian Subsidiary: ACRA Records, Notary and Apostille from Singapore",
    description:
      "The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers, notarisation and the Singapore Academy of Law apostille.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/documents-acra-apostille",
    locale: "en_GB",
  },
  twitter: {
    title: "Documents for an Indian Subsidiary: ACRA Records, Notary and Apostille from Singapore",
    description:
      "The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers, notarisation and the Singapore Academy of Law apostille.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
