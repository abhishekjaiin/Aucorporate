import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Branch Office Registration in India for Foreign Companies",
  },
  description:
    "Register a branch office of your foreign company in India: Form FNC, RBI and AD bank approval, UIN, Form FC-1, PAN and TAN. Eligibility, FAQs and fixed fee.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-registration",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Branch Office Registration in India for Foreign Companies",
    description:
      "Register a branch office of your foreign company in India: Form FNC, RBI and AD bank approval, UIN, Form FC-1, PAN and TAN. Eligibility, FAQs and fixed fee.",
    url: "https://www.theaucorp.com/branch-office-registration",
  },
  twitter: {
    title: "Branch Office Registration in India for Foreign Companies",
    description:
      "Register a branch office of your foreign company in India: Form FNC, RBI and AD bank approval, UIN, Form FC-1, PAN and TAN. Eligibility, FAQs and fixed fee.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
