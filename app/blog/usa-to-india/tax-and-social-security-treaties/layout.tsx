import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-US Tax Treaty and Social Security for US Expats",
  },
  description:
    "The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement.",
  alternates: guideAlternates("usa", "treaties-hub"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-US Tax Treaty and Social Security for US Expats",
    description:
      "The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties",
  },
  twitter: {
    title: "India-US Tax Treaty and Social Security for US Expats",
    description:
      "The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
