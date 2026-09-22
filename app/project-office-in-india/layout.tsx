import type { Metadata } from "next"

const title = "Project Office in India: RBI Approval, Registration & Compliance Guide (2026)"
const description =
  "Project Office in India: FEMA/Regulation 5 eligibility, RBI/AD-bank approval via Form FNC-1, permanent establishment tax exposure, AAC compliance and closure."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "project office in India",
    "project office registration India",
    "RBI approval project office India",
    "Form FNC-1 project office",
    "project office Regulation 5",
    "project office permanent establishment India",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-in-india",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/project-office-in-india",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
