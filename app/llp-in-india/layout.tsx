import type { Metadata } from "next"

const title = "LLP Registration in India: Eligibility, Process & Compliance"
const description =
  "How to register an LLP in India: the 120-day resident-partner rule, the FDI automatic-route gate, registration steps, cost, and annual compliance requirements."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "LLP registration in India",
    "LLP in India",
    "LLP eligibility criteria in India",
    "FDI in LLP India",
    "LLP vs private limited company India",
    "resident designated partner LLP India",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/llp-in-india",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/llp-in-india",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
