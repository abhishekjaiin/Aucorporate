import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EOR vs Subsidiary in India: Right for a Japanese Company?",
  },
  description:
    "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies.",
  alternates: guideAlternates("japan", "eor-vs-subsidiary"),
  openGraph: {
    siteName: "AU Corporate",
    title: "EOR vs Subsidiary in India: Right for a Japanese Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies.",
    url: "https://www.theaucorp.com/blog/japan-to-india/eor-vs-subsidiary",
  },
  twitter: {
    title: "EOR vs Subsidiary in India: Right for a Japanese Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
