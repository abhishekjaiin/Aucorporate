import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Project Office Registration in India for Foreign Companies",
  },
  description:
    "Set up a project office in India for a contract from an Indian company: general permission, Form FNC, Form FC-1, PAN and TAN. Conditions, FAQs and fixed fee.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-registration",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Project Office Registration in India for Foreign Companies",
    description:
      "Set up a project office in India for a contract from an Indian company: general permission, Form FNC, Form FC-1, PAN and TAN. Conditions, FAQs and fixed fee.",
    url: "https://www.theaucorp.com/project-office-registration",
  },
  twitter: {
    title: "Project Office Registration in India for Foreign Companies",
    description:
      "Set up a project office in India for a contract from an Indian company: general permission, Form FNC, Form FC-1, PAN and TAN. Conditions, FAQs and fixed fee.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
