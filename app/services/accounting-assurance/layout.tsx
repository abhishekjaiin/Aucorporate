import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting & Assurance Services | AU Corporate",
  },
  description:
    "Financial statement preparation, Ind AS/IFRS compliance, internal controls assessment, and audit assurance services for businesses in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/services/accounting-assurance",
  },
  openGraph: {
    title: "Accounting & Assurance Services | AU Corporate",
    description:
      "Financial statement preparation, Ind AS/IFRS compliance, internal controls assessment, and audit assurance services for businesses in India.",
    url: "https://www.theaucorp.com/services/accounting-assurance",
  },
  twitter: {
    title: "Accounting & Assurance Services | AU Corporate",
    description:
      "Financial statement preparation, Ind AS/IFRS compliance, internal controls assessment, and audit assurance services for businesses in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
