import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for Japanese Companies | Japan Plus & Subsidiary Guide",
  },
  description:
    "How Japanese companies enter India via the Japan Plus government desk — JV vs wholly-owned subsidiary structuring, DTAA planning, and FEMA compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-japan-companies",
  },
  openGraph: {
    title: "India Entry for Japanese Companies | Japan Plus & Subsidiary Guide",
    description:
      "How Japanese companies enter India via the Japan Plus government desk — JV vs wholly-owned subsidiary structuring, DTAA planning, and FEMA compliance.",
    url: "https://www.theaucorp.com/india-entry-for-japan-companies",
  },
  twitter: {
    title: "India Entry for Japanese Companies | Japan Plus & Subsidiary Guide",
    description:
      "How Japanese companies enter India via the Japan Plus government desk — JV vs wholly-owned subsidiary structuring, DTAA planning, and FEMA compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
