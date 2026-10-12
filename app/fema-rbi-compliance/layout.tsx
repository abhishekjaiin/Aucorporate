import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FEMA and RBI Compliance for Indian Subsidiaries | FC-GPR, FLA, ECB",
  },
  description:
    "FC-GPR, FC-TRS, FLA return, ECB, FDI approvals, compounding and RBI approvals for your Indian subsidiary. Reasonable fees, every RBI deadline tracked by AU Corporate.",
  alternates: {
    canonical: "https://www.theaucorp.com/fema-rbi-compliance",
  },
  openGraph: {
    title: "FEMA and RBI Compliance for Indian Subsidiaries | FC-GPR, FLA, ECB",
    description:
      "FC-GPR, FC-TRS, FLA return, ECB, FDI approvals, compounding and RBI approvals for your Indian subsidiary. Reasonable fees, every RBI deadline tracked by AU Corporate.",
    url: "https://www.theaucorp.com/fema-rbi-compliance",
  },
  twitter: {
    title: "FEMA and RBI Compliance for Indian Subsidiaries | FC-GPR, FLA, ECB",
    description:
      "FC-GPR, FC-TRS, FLA return, ECB, FDI approvals, compounding and RBI approvals for your Indian subsidiary. Reasonable fees, every RBI deadline tracked by AU Corporate.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
