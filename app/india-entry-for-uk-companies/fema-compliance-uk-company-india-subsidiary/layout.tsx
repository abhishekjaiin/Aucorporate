import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FEMA Compliance for UK Companies in India",
  },
  description:
    "The FC-GPR, FC-TRS, and FLA return filings a UK parent's Indian subsidiary needs for ongoing FEMA compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary",
  },
  openGraph: {
    title: "FEMA Compliance for UK Companies in India",
    description:
      "The FC-GPR, FC-TRS, and FLA return filings a UK parent's Indian subsidiary needs for ongoing FEMA compliance.",
    url: "https://www.theaucorp.com/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary",
  },
  twitter: {
    title: "FEMA Compliance for UK Companies in India",
    description:
      "The FC-GPR, FC-TRS, and FLA return filings a UK parent's Indian subsidiary needs for ongoing FEMA compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
