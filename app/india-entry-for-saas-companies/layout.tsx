import type { Metadata } from "next"

const title = "India Entry for AI, SaaS and Technology Companies: Entity Setup & Tax Guide (2026)"
const description =
  "Deciding whether and how to set up in India as an AI, SaaS or tech company? Entity structure, FEMA/RBI basics, tax treatment and GST after incorporation."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "India entry for SaaS companies",
    "India entry for tech companies",
    "India subsidiary for SaaS company",
    "wholly owned subsidiary India SaaS",
    "AI company India entry",
    "SaaS company India expansion",
    "India entry strategy for SaaS companies",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-saas-companies",
  },
  openGraph: {
    title,
    description,
    url: "https://www.theaucorp.com/india-entry-for-saas-companies",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
