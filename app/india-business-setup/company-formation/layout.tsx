import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Company Formation in India: Registration & Setup Guide 2026",
  },
  description:
    "How to form, set up and register a company in India: entity types, SPICe+ incorporation, documents, cost and timeline, for foreign and Indian founders.",
  keywords: ["company formation in India", "company registration in India", "company setup in India", "establish entity in India", "business setup in India", "company incorporation in India", "private limited company registration in India", "documents required for company registration in India", "company registration cost in India", "how to register a company in India", "India subsidiary", "wholly owned subsidiary in India"],
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/company-formation",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Company Formation in India: Registration & Setup Guide 2026",
    description:
      "How to form, set up and register a company in India: entity types, SPICe+ incorporation, documents, cost and timeline, for foreign and Indian founders.",
    url: "https://www.theaucorp.com/india-business-setup/company-formation",
  },
  twitter: {
    title: "Company Formation in India: Registration & Setup Guide 2026",
    description:
      "How to form, set up and register a company in India: entity types, SPICe+ incorporation, documents, cost and timeline, for foreign and Indian founders.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
