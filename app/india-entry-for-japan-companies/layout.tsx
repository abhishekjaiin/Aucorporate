import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for Japanese Companies | AU Corporate",
  },
  description:
    "How Japanese companies enter and set up business operations in India — JV vs WOS structuring, DTAA planning, and FEMA compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-japan-companies",
  },
  openGraph: {
    title: "India Entry for Japanese Companies | AU Corporate",
    description:
      "How Japanese companies enter and set up business operations in India — JV vs WOS structuring, DTAA planning, and FEMA compliance.",
    url: "https://www.theaucorp.com/india-entry-for-japan-companies",
  },
  twitter: {
    title: "India Entry for Japanese Companies | AU Corporate",
    description:
      "How Japanese companies enter and set up business operations in India — JV vs WOS structuring, DTAA planning, and FEMA compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
