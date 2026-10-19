import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "EOR vs Subsidiary in India: Which Is Right for a US Company?",
  },
  description:
    "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for US companies.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/usa-to-india/eor-vs-subsidiary",
    languages: {
      "en-US": "https://www.theaucorp.com/blog/usa-to-india/eor-vs-subsidiary",
      "en-AU": "https://www.theaucorp.com/blog/australia-to-india/eor-vs-subsidiary",
    },
  },
  openGraph: {
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
