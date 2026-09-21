import type { Metadata } from "next"

const title = "Liaison Office in India: RBI Approval, Eligibility & Compliance Guide"
const description =
  "A complete guide to Liaison Offices in India — FEMA eligibility, RBI/AD bank approval via Form FNC, permitted activities, PE and GST exposure, AAC compliance, and closure."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "liaison office in India",
    "liaison office registration in India",
    "RBI approval liaison office India",
    "liaison office India FEMA FNC form",
    "liaison office compliance India",
    "liaison office vs branch office India",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-in-india",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/liaison-office-in-india",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
