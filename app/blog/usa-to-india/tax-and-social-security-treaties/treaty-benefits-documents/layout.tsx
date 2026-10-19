import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Claiming India-US Treaty Benefits: Form 6166 and Form 41",
  },
  description:
    "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.",
  alternates: guideAlternates("usa", "treaty-benefits-documents"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Claiming India-US Treaty Benefits: Form 6166 and Form 41",
    description:
      "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents",
  },
  twitter: {
    title: "Claiming India-US Treaty Benefits: Form 6166 and Form 41",
    description:
      "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
