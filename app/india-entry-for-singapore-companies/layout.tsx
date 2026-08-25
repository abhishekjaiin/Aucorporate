import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for Singapore Companies | Subsidiary Setup Guide",
  },
  description:
    "How Singapore-based companies — India's largest FDI source for seven straight years — structure their India entry, including DTAA benefits, the Limitation of Benefits substance test, and FEMA compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-singapore-companies",
  },
  openGraph: {
    title: "India Entry for Singapore Companies | Subsidiary Setup Guide",
    description:
      "How Singapore-based companies — India's largest FDI source for seven straight years — structure their India entry, including DTAA benefits, the Limitation of Benefits substance test, and FEMA compliance.",
    url: "https://www.theaucorp.com/india-entry-for-singapore-companies",
  },
  twitter: {
    title: "India Entry for Singapore Companies | Subsidiary Setup Guide",
    description:
      "How Singapore-based companies — India's largest FDI source for seven straight years — structure their India entry, including DTAA benefits, the Limitation of Benefits substance test, and FEMA compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
