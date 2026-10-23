import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, Labour Law & FRRO for Liaison Offices in India",
  },
  description:
    "Payroll, social security compliance, professional tax, TDS, Labour Codes and FRRO support for expats at the India liaison office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-payroll-compliance",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll, PF, Labour Law & FRRO for Liaison Offices in India",
    description:
      "Payroll, social security compliance, professional tax, TDS, Labour Codes and FRRO support for expats at the India liaison office of a foreign company.",
    url: "https://www.theaucorp.com/liaison-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, PF, Labour Law & FRRO for Liaison Offices in India",
    description:
      "Payroll, social security compliance, professional tax, TDS, Labour Codes and FRRO support for expats at the India liaison office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
