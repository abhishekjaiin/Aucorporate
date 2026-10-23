import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-US Tax Treaty (DTAA) Explained for US Companies",
  },
  description:
    "How the India-US tax treaty works: who qualifies, which taxes it covers, how treaty and domestic law interact, residency, relief from double tax and disputes.",
  alternates: guideAlternates("usa", "india-dtaa"),
  openGraph: {
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India-US Tax Treaty (DTAA) Explained for US Companies",
    description:
      "How the India-US tax treaty works: who qualifies, which taxes it covers, how treaty and domestic law interact, residency, relief from double tax and disputes.",
    url: "https://www.theaucorp.com/blog/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide",
  },
  twitter: {
    title: "India-US Tax Treaty (DTAA) Explained for US Companies",
    description:
      "How the India-US tax treaty works: who qualifies, which taxes it covers, how treaty and domestic law interact, residency, relief from double tax and disputes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
