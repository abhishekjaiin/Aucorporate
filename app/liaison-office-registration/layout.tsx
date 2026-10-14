import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Registration in India for Foreign Companies",
  },
  description:
    "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN, permitted tasks and FAQs, with a fixed-fee quote.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-registration",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Liaison Office Registration in India for Foreign Companies",
    description:
      "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN, permitted tasks and FAQs, with a fixed-fee quote.",
    url: "https://www.theaucorp.com/liaison-office-registration",
  },
  twitter: {
    title: "Liaison Office Registration in India for Foreign Companies",
    description:
      "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN, permitted tasks and FAQs, with a fixed-fee quote.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
