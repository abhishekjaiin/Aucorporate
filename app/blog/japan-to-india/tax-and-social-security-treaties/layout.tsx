import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Japan Tax Treaty and Social Security for Expats",
  },
  description:
    "The India-Japan tax treaty (DTAA) and Social Security Agreement for Japanese companies and expats: 10% treaty rates, residency, EPF and pensions.",
  alternates: guideAlternates("japan", "treaties-hub"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India-Japan Tax Treaty and Social Security for Expats",
    description:
      "The India-Japan tax treaty (DTAA) and Social Security Agreement for Japanese companies and expats: 10% treaty rates, residency, EPF and pensions.",
    url: "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties",
  },
  twitter: {
    title: "India-Japan Tax Treaty and Social Security for Expats",
    description:
      "The India-Japan tax treaty (DTAA) and Social Security Agreement for Japanese companies and expats: 10% treaty rates, residency, EPF and pensions.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
