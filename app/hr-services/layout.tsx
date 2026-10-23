import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "HR and Payroll Services in India | AU Corporate",
  },
  description:
    "Payroll processing, HR compliance, and recruitment support for foreign companies setting up and running operations in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/hr-services",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "HR and Payroll Services in India | AU Corporate",
    description:
      "Payroll processing, HR compliance, and recruitment support for foreign companies setting up and running operations in India.",
    url: "https://www.theaucorp.com/hr-services",
  },
  twitter: {
    title: "HR and Payroll Services in India | AU Corporate",
    description:
      "Payroll processing, HR compliance, and recruitment support for foreign companies setting up and running operations in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
