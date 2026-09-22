import type { Metadata } from "next"

const title = "LLP Registration in India: Eligibility, Process, FDI and Compliance Guide"
const description =
  "How to register an LLP in India: the current 120-day resident-partner rule, the FDI automatic-route gate, registration steps, cost, tax treatment and annual compliance — explained by AU Corporate's regulatory practice."

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
