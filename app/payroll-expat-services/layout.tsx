import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, ESI and Expat Services in India for Foreign Companies",
  },
  description:
    "Payroll, social security (PF and ESI), professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India. Reasonable fees.",
  alternates: {
    canonical: "https://www.theaucorp.com/payroll-expat-services",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Payroll, PF, ESI and Expat Services in India for Foreign Companies",
    description:
      "Payroll, social security (PF and ESI), professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India. Reasonable fees.",
    url: "https://www.theaucorp.com/payroll-expat-services",
  },
  twitter: {
    title: "Payroll, PF, ESI and Expat Services in India for Foreign Companies",
    description:
      "Payroll, social security (PF and ESI), professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India. Reasonable fees.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
