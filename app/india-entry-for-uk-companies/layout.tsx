import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for UK Companies | Subsidiary Setup & Compliance",
  },
  description:
    "How UK companies enter India — subsidiary vs branch structuring, DTAA benefits, FEMA compliance, and incorporation support.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-uk-companies",
  },
  openGraph: {
    title: "India Entry for UK Companies | Subsidiary Setup & Compliance",
    description:
      "How UK companies enter India — subsidiary vs branch structuring, DTAA benefits, FEMA compliance, and incorporation support.",
    url: "https://www.theaucorp.com/india-entry-for-uk-companies",
  },
  twitter: {
    title: "India Entry for UK Companies | Subsidiary Setup & Compliance",
    description:
      "How UK companies enter India — subsidiary vs branch structuring, DTAA benefits, FEMA compliance, and incorporation support.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
