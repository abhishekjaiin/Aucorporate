import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Company Registration in India: Complete Guide for Foreign Companies (2026)",
  },
  description:
    "Complete guide to company registration in India for foreign investors — entity types, the SPICe+ process, FDI routes, documents, realistic costs and timelines, and post-incorporation compliance.",
  keywords: ["company registration in India", "company formation in India", "company incorporation in India", "private limited company registration in India", "documents required for company registration in India", "company registration cost in India", "how to register a company in India", "India subsidiary", "wholly owned subsidiary in India"],
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/company-formation",
  },
  openGraph: {
    title: "Company Registration in India: Complete Guide for Foreign Companies (2026)",
    description:
      "Complete guide to company registration in India for foreign investors — entity types, the SPICe+ process, FDI routes, documents, realistic costs and timelines, and post-incorporation compliance.",
    url: "https://www.theaucorp.com/india-business-setup/company-formation",
  },
  twitter: {
    title: "Company Registration in India: Complete Guide for Foreign Companies (2026)",
    description:
      "Complete guide to company registration in India for foreign investors — entity types, the SPICe+ process, FDI routes, documents, realistic costs and timelines, and post-incorporation compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
