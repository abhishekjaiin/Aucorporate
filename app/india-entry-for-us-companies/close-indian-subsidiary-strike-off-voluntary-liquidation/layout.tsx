import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Closing an Indian Subsidiary: Strike-Off vs Voluntary Liquidation Guide | AU Corporate",
  },
  description:
    "How to close an Indian subsidiary: choosing between Section 248 strike-off and IBBI voluntary liquidation, RBI remittance-of-assets rules, and what it means for your US parent's Form 5471 filing.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation",
  },
  openGraph: {
    title: "Closing an Indian Subsidiary: Strike-Off vs Voluntary Liquidation Guide | AU Corporate",
    description:
      "How to close an Indian subsidiary: choosing between Section 248 strike-off and IBBI voluntary liquidation, RBI remittance-of-assets rules, and what it means for your US parent's Form 5471 filing.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation",
  },
  twitter: {
    title: "Closing an Indian Subsidiary: Strike-Off vs Voluntary Liquidation Guide | AU Corporate",
    description:
      "How to close an Indian subsidiary: choosing between Section 248 strike-off and IBBI voluntary liquidation, RBI remittance-of-assets rules, and what it means for your US parent's Form 5471 filing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
