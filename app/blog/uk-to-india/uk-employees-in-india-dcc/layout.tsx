import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK Employees in India: Tax Treaty, Residence and the Double Contributions Convention",
  },
  description:
    "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India.",
  alternates: guideAlternates("uk", "foreign-employee-treaty-ssa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "UK Employees in India: Tax Treaty, Residence and the Double Contributions Convention",
    description:
      "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India.",
    url: "https://www.theaucorp.com/blog/uk-to-india/uk-employees-in-india-dcc",
    locale: "en_GB",
  },
  twitter: {
    title: "UK Employees in India: Tax Treaty, Residence and the Double Contributions Convention",
    description:
      "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK employees working in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
