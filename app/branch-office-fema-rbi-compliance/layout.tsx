import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FEMA and RBI Compliance for Branch Offices in India",
  },
  description:
    "Form FNC, UIN, Annual Activity Certificate, profit remittance, additional offices, compounding and closure for the India branch office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-fema-rbi-compliance",
  },
  openGraph: {
    title: "FEMA and RBI Compliance for Branch Offices in India",
    description:
      "Form FNC, UIN, Annual Activity Certificate, profit remittance, additional offices, compounding and closure for the India branch office of a foreign company.",
    url: "https://www.theaucorp.com/branch-office-fema-rbi-compliance",
  },
  twitter: {
    title: "FEMA and RBI Compliance for Branch Offices in India",
    description:
      "Form FNC, UIN, Annual Activity Certificate, profit remittance, additional offices, compounding and closure for the India branch office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
