import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Claiming India-Japan Treaty Benefits: Forms and Documents",
  },
  description:
    "Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration.",
  alternates: guideAlternates("japan", "treaty-benefits-documents"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Claiming India-Japan Treaty Benefits: Forms and Documents",
    description:
      "Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration.",
    url: "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents",
  },
  twitter: {
    title: "Claiming India-Japan Treaty Benefits: Forms and Documents",
    description:
      "Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
