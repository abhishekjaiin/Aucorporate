import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FEMA & RBI Compliance in India: FC-GPR, FLA, ECB",
  },
  description:
    "FC-GPR, FC-TRS, FLA return, ECB, FDI approvals, compounding and RBI approvals for your Indian subsidiary, with every RBI deadline tracked by AU Corporate.",
  alternates: {
    canonical: "https://www.theaucorp.com/fema-rbi-compliance",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "FEMA & RBI Compliance in India: FC-GPR, FLA, ECB",
    description:
      "FC-GPR, FC-TRS, FLA return, ECB, FDI approvals, compounding and RBI approvals for your Indian subsidiary, with every RBI deadline tracked by AU Corporate.",
    url: "https://www.theaucorp.com/fema-rbi-compliance",
  },
  twitter: {
    title: "FEMA & RBI Compliance in India: FC-GPR, FLA, ECB",
    description:
      "FC-GPR, FC-TRS, FLA return, ECB, FDI approvals, compounding and RBI approvals for your Indian subsidiary, with every RBI deadline tracked by AU Corporate.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
