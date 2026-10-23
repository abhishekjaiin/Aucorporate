import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Contact AU Corporate | India Entry & Advisory Team",
  },
  description:
    "Contact AU Corporate for company registration, tax, compliance and Virtual CFO support. Offices in New Delhi and Gurugram, serving clients across India.",
  alternates: {
    canonical: "https://www.theaucorp.com/contact",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Contact AU Corporate for company registration, tax, compliance and Virtual CFO support. Offices in New Delhi and Gurugram, serving clients across India.",
    url: "https://www.theaucorp.com/contact",
  },
  twitter: {
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Contact AU Corporate for company registration, tax, compliance and Virtual CFO support. Offices in New Delhi and Gurugram, serving clients across India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
