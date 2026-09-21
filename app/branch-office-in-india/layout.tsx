import type { Metadata } from "next"

const title = "Branch Office in India: RBI Approval, Process & Compliance Guide (2026)"
const description =
  "How to set up a Branch Office in India: RBI/FEMA 22(R) eligibility, the Automatic vs Approval route, Form FNC, permitted activities, tax treatment and closure."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "branch office in India",
    "branch office registration in India",
    "RBI approval for branch office in India",
    "branch office vs liaison office vs project office in India",
    "FEMA 22(R) 2016 branch office",
    "Form FNC branch office India",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-in-india",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/branch-office-in-india",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
