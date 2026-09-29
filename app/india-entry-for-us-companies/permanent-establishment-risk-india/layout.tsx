import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Permanent Establishment Risk in India for US Companies | AU Corporate",
  },
  description:
    "How US companies trigger permanent establishment risk in India — the four PE types, DTAA Article 5, key case law, and whether an EOR eliminates exposure.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies/permanent-establishment-risk-india",
  },
  openGraph: {
    title: "Permanent Establishment Risk in India for US Companies | AU Corporate",
    description:
      "How US companies trigger permanent establishment risk in India — the four PE types, DTAA Article 5, key case law, and whether an EOR eliminates exposure.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies/permanent-establishment-risk-india",
  },
  twitter: {
    title: "Permanent Establishment Risk in India for US Companies | AU Corporate",
    description:
      "How US companies trigger permanent establishment risk in India — the four PE types, DTAA Article 5, key case law, and whether an EOR eliminates exposure.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
