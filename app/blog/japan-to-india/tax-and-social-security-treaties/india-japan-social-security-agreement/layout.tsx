import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Japan-India Social Security Agreement: Rules for Expats",
  },
  description:
    "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.",
  alternates: guideAlternates("japan", "social-security-agreement"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Japan-India Social Security Agreement: Rules for Expats",
    description:
      "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.",
    url: "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement",
  },
  twitter: {
    title: "Japan-India Social Security Agreement: Rules for Expats",
    description:
      "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
