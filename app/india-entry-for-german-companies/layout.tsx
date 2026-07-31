import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for German Companies | AU Corporate",
  },
  description:
    "How German companies enter and set up business operations in India — DTAA planning, FEMA compliance, and entity structuring for German subsidiaries.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-german-companies",
  },
  openGraph: {
    title: "India Entry for German Companies | AU Corporate",
    description:
      "How German companies enter and set up business operations in India — DTAA planning, FEMA compliance, and entity structuring for German subsidiaries.",
    url: "https://www.theaucorp.com/india-entry-for-german-companies",
  },
  twitter: {
    title: "India Entry for German Companies | AU Corporate",
    description:
      "How German companies enter and set up business operations in India — DTAA planning, FEMA compliance, and entity structuring for German subsidiaries.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
