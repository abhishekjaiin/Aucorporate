import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Treatment of Loan Waiver in India | Supreme Court Ruling",
  },
  description:
    "How Indian courts settled the tax treatment of loan waivers — from T.V. Sundaram Iyengar to the Supreme Court's final word on Sections 28(iv) and 41(1).",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/tax-loan-waiver-india",
  },
  openGraph: {
    title: "Tax Treatment of Loan Waiver in India | Supreme Court Ruling",
    description:
      "How Indian courts settled the tax treatment of loan waivers — from T.V. Sundaram Iyengar to the Supreme Court's final word on Sections 28(iv) and 41(1).",
    url: "https://www.theaucorp.com/blog/tax-loan-waiver-india",
  },
  twitter: {
    title: "Tax Treatment of Loan Waiver in India | Supreme Court Ruling",
    description:
      "How Indian courts settled the tax treatment of loan waivers — from T.V. Sundaram Iyengar to the Supreme Court's final word on Sections 28(iv) and 41(1).",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
