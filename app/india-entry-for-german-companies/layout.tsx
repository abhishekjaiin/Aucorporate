import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for German Companies | DTAA & Subsidiary Setup Guide",
  },
  description:
    "How German manufacturing and engineering companies set up an Indian subsidiary — the India-Germany DTAA's flat 10% rate, entity structuring, and FEMA compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-german-companies",
  },
  openGraph: {
    title: "India Entry for German Companies | DTAA & Subsidiary Setup Guide",
    description:
      "How German manufacturing and engineering companies set up an Indian subsidiary — the India-Germany DTAA's flat 10% rate, entity structuring, and FEMA compliance.",
    url: "https://www.theaucorp.com/india-entry-for-german-companies",
  },
  twitter: {
    title: "India Entry for German Companies | DTAA & Subsidiary Setup Guide",
    description:
      "How German manufacturing and engineering companies set up an Indian subsidiary — the India-Germany DTAA's flat 10% rate, entity structuring, and FEMA compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
