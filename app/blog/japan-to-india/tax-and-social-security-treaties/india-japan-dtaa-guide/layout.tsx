import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Japan Tax Treaty (DTAA) Explained",
  },
  description:
    "How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes.",
  alternates: guideAlternates("japan", "india-dtaa"),
  openGraph: {
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India-Japan Tax Treaty (DTAA) Explained",
    description:
      "How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes.",
    url: "https://www.theaucorp.com/blog/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide",
  },
  twitter: {
    title: "India-Japan Tax Treaty (DTAA) Explained",
    description:
      "How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
