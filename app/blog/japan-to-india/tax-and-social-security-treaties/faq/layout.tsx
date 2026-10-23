import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Treaty and Social Security FAQs for India-Japan Expats",
  },
  description:
    "50 plain answers on the India-Japan tax treaty, 10% withholding rates, certificate of residence, Form 41, expat tax and the Japan-India social security agreement.",
  alternates: guideAlternates("japan", "treaties-faq"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Treaty and Social Security FAQs for India-Japan Expats",
    description:
      "50 plain answers on the India-Japan tax treaty, 10% withholding rates, certificate of residence, Form 41, expat tax and the Japan-India social security agreement.",
    url: "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/faq",
  },
  twitter: {
    title: "Treaty and Social Security FAQs for India-Japan Expats",
    description:
      "50 plain answers on the India-Japan tax treaty, 10% withholding rates, certificate of residence, Form 41, expat tax and the Japan-India social security agreement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
