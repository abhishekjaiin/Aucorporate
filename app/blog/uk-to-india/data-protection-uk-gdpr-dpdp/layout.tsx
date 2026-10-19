import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Data Protection for UK Companies in India: UK GDPR, the DPDP Act and Transfers to India",
  },
  description:
    "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules, timelines, and practical contract terms.",
  alternates: guideAlternates("uk", "data-protection"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Data Protection for UK Companies in India: UK GDPR, the DPDP Act and Transfers to India",
    description:
      "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules, timelines, and practical contract terms.",
    url: "https://www.theaucorp.com/blog/uk-to-india/data-protection-uk-gdpr-dpdp",
    locale: "en_GB",
  },
  twitter: {
    title: "Data Protection for UK Companies in India: UK GDPR, the DPDP Act and Transfers to India",
    description:
      "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules, timelines, and practical contract terms.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
