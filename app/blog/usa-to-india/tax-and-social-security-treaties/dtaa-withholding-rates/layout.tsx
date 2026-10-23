import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-US DTAA Withholding Tax Rates for Payments to the US",
  },
  description:
    "Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them.",
  alternates: guideAlternates("usa", "dtaa-withholding-rates"),
  openGraph: {
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India-US DTAA Withholding Tax Rates for Payments to the US",
    description:
      "Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates",
  },
  twitter: {
    title: "India-US DTAA Withholding Tax Rates for Payments to the US",
    description:
      "Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
