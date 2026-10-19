import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from the UK: A 12-Week Plan",
  },
  description:
    "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.",
  alternates: guideAlternates("uk", "incorporation-process"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from the UK: A 12-Week Plan",
    description:
      "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.",
    url: "https://www.theaucorp.com/blog/uk-to-india/incorporation-steps",
    locale: "en_GB",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from the UK: A 12-Week Plan",
    description:
      "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
