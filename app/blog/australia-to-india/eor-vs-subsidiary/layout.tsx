import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?",
  },
  description:
    "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies.",
  alternates: guideAlternates("australia", "eor-vs-subsidiary"),
  openGraph: {
    siteName: "AU Corporate",
    title: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies.",
    url: "https://www.theaucorp.com/blog/australia-to-india/eor-vs-subsidiary",
    locale: "en_AU",
  },
  twitter: {
    title: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
