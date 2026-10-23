import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
  },
  description:
    "How the India-Australia DTAA applies to payments to your Australian parent: withholding rates, the ATO residency certificate (NAT 75442), Form 41 and PE risk.",
  alternates: guideAlternates("australia", "dtaa-pe-risk"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
    description:
      "How the India-Australia DTAA applies to payments to your Australian parent: withholding rates, the ATO residency certificate (NAT 75442), Form 41 and PE risk.",
    url: "https://www.theaucorp.com/blog/australia-to-india/dtaa-pe-risk",
    locale: "en_AU",
  },
  twitter: {
    title: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
    description:
      "How the India-Australia DTAA applies to payments to your Australian parent: withholding rates, the ATO residency certificate (NAT 75442), Form 41 and PE risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
