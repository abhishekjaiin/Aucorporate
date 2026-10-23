import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Case Studies: Indian Subsidiaries | AU Corporate",
  },
  description:
    "How foreign parents set up, run and fix the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation, FEMA compounding.",
  alternates: {
    canonical: "https://www.theaucorp.com/case-studies",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Case Studies: Indian Subsidiaries | AU Corporate",
    description:
      "How foreign parents set up, run and fix the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation, FEMA compounding.",
    url: "https://www.theaucorp.com/case-studies",
  },
  twitter: {
    title: "Case Studies: Indian Subsidiaries | AU Corporate",
    description:
      "How foreign parents set up, run and fix the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation, FEMA compounding.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
