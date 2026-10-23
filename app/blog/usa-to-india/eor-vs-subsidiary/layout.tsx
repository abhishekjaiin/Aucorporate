import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EOR vs Subsidiary in India: Which Is Right for a US Company?",
  },
  description:
    "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.",
  alternates: guideAlternates("usa", "eor-vs-subsidiary"),
  openGraph: {
    locale: "en_US",
    siteName: "AU Corporate",
    title: "EOR vs Subsidiary in India: Which Is Right for a US Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.",
    url: "https://www.theaucorp.com/blog/usa-to-india/eor-vs-subsidiary",
  },
  twitter: {
    title: "EOR vs Subsidiary in India: Which Is Right for a US Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
