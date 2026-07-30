import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Pre-Incorporation Planning for India Entry | AU Corporate",
  },
  description:
    "What to plan before incorporating in India — entity structure, sector approval routes, and documentation foreign companies need upfront.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/pre-incorporation",
  },
  openGraph: {
    title: "Pre-Incorporation Planning for India Entry | AU Corporate",
    description:
      "What to plan before incorporating in India — entity structure, sector approval routes, and documentation foreign companies need upfront.",
    url: "https://www.theaucorp.com/doing-business-in-india/pre-incorporation",
  },
  twitter: {
    title: "Pre-Incorporation Planning for India Entry | AU Corporate",
    description:
      "What to plan before incorporating in India — entity structure, sector approval routes, and documentation foreign companies need upfront.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
