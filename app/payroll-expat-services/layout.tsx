import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, ESI and Expat Services in India",
  },
  description:
    "Payroll, PF and ESI, professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/payroll-expat-services",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll, PF, ESI and Expat Services in India",
    description:
      "Payroll, PF and ESI, professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India.",
    url: "https://www.theaucorp.com/payroll-expat-services",
  },
  twitter: {
    title: "Payroll, PF, ESI and Expat Services in India",
    description:
      "Payroll, PF and ESI, professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
