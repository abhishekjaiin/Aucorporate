import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Singapore DTAA: Article-by-Article Guide to the Tax Treaty for Singapore Companies",
  },
  description:
    "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.",
  alternates: guideAlternates("singapore", "india-dtaa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-Singapore DTAA: Article-by-Article Guide to the Tax Treaty for Singapore Companies",
    description:
      "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/india-singapore-dtaa",
    locale: "en_GB",
  },
  twitter: {
    title: "India-Singapore DTAA: Article-by-Article Guide to the Tax Treaty for Singapore Companies",
    description:
      "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
