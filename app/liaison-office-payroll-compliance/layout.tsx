import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, Social Security, Labour Law and FRRO for Liaison Offices in India",
  },
  description:
    "Payroll, social security compliance, professional tax, TDS, Labour Codes and FRRO support for expats at the India liaison office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-payroll-compliance",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Payroll, Social Security, Labour Law and FRRO for Liaison Offices in India",
    description:
      "Payroll, social security compliance, professional tax, TDS, Labour Codes and FRRO support for expats at the India liaison office of a foreign company.",
    url: "https://www.theaucorp.com/liaison-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, Social Security, Labour Law and FRRO for Liaison Offices in India",
    description:
      "Payroll, social security compliance, professional tax, TDS, Labour Codes and FRRO support for expats at the India liaison office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
