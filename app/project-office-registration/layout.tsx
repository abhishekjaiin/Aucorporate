import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Project Office Registration in India for Foreign Companies",
  },
  description:
    "Set up a project office in India for a contract awarded by an Indian company: general permission, Form FNC, ROC Form FC-1, PAN, TAN. Conditions, FAQs and fixed-fee quote.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-registration",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Project Office Registration in India for Foreign Companies",
    description:
      "Set up a project office in India for a contract awarded by an Indian company: general permission, Form FNC, ROC Form FC-1, PAN, TAN. Conditions, FAQs and fixed-fee quote.",
    url: "https://www.theaucorp.com/project-office-registration",
  },
  twitter: {
    title: "Project Office Registration in India for Foreign Companies",
    description:
      "Set up a project office in India for a contract awarded by an Indian company: general permission, Form FNC, ROC Form FC-1, PAN, TAN. Conditions, FAQs and fixed-fee quote.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
