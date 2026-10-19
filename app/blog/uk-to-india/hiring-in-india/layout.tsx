import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India as a UK Employer: Contracts, Payroll, Labour Codes and Share Plans",
  },
  description:
    "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.",
  alternates: guideAlternates("uk", "hiring-and-payroll"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Hiring in India as a UK Employer: Contracts, Payroll, Labour Codes and Share Plans",
    description:
      "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.",
    url: "https://www.theaucorp.com/blog/uk-to-india/hiring-in-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Hiring in India as a UK Employer: Contracts, Payroll, Labour Codes and Share Plans",
    description:
      "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share plans to Indian employees.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
