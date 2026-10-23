import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FEMA and RBI Compliance for Project Offices in India",
  },
  description:
    "Form FNC, Annual Activity Certificate, contract changes, surplus remittance on completion, compounding and closure for the India project office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-fema-rbi-compliance",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "FEMA and RBI Compliance for Project Offices in India",
    description:
      "Form FNC, Annual Activity Certificate, contract changes, surplus remittance on completion, compounding and closure for the India project office of a foreign company.",
    url: "https://www.theaucorp.com/project-office-fema-rbi-compliance",
  },
  twitter: {
    title: "FEMA and RBI Compliance for Project Offices in India",
    description:
      "Form FNC, Annual Activity Certificate, contract changes, surplus remittance on completion, compounding and closure for the India project office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
