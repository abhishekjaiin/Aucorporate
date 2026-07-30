import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "About AU Corporate | India Entry & Compliance Advisory Firm",
  },
  description:
    "Learn about AU Corporate's team, credentials, and 30+ years of collective experience helping foreign companies enter and operate in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/about",
  },
  openGraph: {
    title: "About AU Corporate | India Entry & Compliance Advisory Firm",
    description:
      "Learn about AU Corporate's team, credentials, and 30+ years of collective experience helping foreign companies enter and operate in India.",
    url: "https://www.theaucorp.com/about",
  },
  twitter: {
    title: "About AU Corporate | India Entry & Compliance Advisory Firm",
    description:
      "Learn about AU Corporate's team, credentials, and 30+ years of collective experience helping foreign companies enter and operate in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
