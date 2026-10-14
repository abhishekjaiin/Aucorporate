import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Compliance for Liaison Offices in India: TDS, Annual Statement, PE",
  },
  description:
    "TDS, annual statement, permanent establishment risk, GST position and expat tax for the India liaison office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-tax-compliance",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Tax Compliance for Liaison Offices in India: TDS, Annual Statement, PE",
    description:
      "TDS, annual statement, permanent establishment risk, GST position and expat tax for the India liaison office of a foreign company.",
    url: "https://www.theaucorp.com/liaison-office-tax-compliance",
  },
  twitter: {
    title: "Tax Compliance for Liaison Offices in India: TDS, Annual Statement, PE",
    description:
      "TDS, annual statement, permanent establishment risk, GST position and expat tax for the India liaison office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
