import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Pre-Incorporation Planning for India Entry | AU Corporate",
  },
  description:
    "What to plan before incorporating in India — market feasibility, FDI eligibility, tax-efficient structuring, JV strategy, and location planning, before you commit to an entity.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/pre-incorporation",
  },
  openGraph: {
    title: "Pre-Incorporation Planning for India Entry | AU Corporate",
    description:
      "What to plan before incorporating in India — market feasibility, FDI eligibility, tax-efficient structuring, JV strategy, and location planning, before you commit to an entity.",
    url: "https://www.theaucorp.com/doing-business-in-india/pre-incorporation",
  },
  twitter: {
    title: "Pre-Incorporation Planning for India Entry | AU Corporate",
    description:
      "What to plan before incorporating in India — market feasibility, FDI eligibility, tax-efficient structuring, JV strategy, and location planning, before you commit to an entity.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
