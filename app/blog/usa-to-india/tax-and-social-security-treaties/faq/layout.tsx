import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Treaty and Social Security FAQs for India-US Expats",
  },
  description:
    "50 plain answers on the India-US tax treaty, DTAA withholding rates, Form 6166 and 41, expat tax, EPF, FICA and the missing totalization agreement.",
  alternates: guideAlternates("usa", "treaties-faq"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Treaty and Social Security FAQs for India-US Expats",
    description:
      "50 plain answers on the India-US tax treaty, DTAA withholding rates, Form 6166 and 41, expat tax, EPF, FICA and the missing totalization agreement.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/faq",
  },
  twitter: {
    title: "Treaty and Social Security FAQs for India-US Expats",
    description:
      "50 plain answers on the India-US tax treaty, DTAA withholding rates, Form 6166 and 41, expat tax, EPF, FICA and the missing totalization agreement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
