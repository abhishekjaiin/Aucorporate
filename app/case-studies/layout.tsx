import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Case Studies: Indian Subsidiaries Set Up and Run | AU Corporate",
  },
  description:
    "Case studies of foreign parents setting up, running and fixing the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation and FEMA compounding.",
  alternates: {
    canonical: "https://www.theaucorp.com/case-studies",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "Case Studies: Indian Subsidiaries Set Up and Run | AU Corporate",
    description:
      "Case studies of foreign parents setting up, running and fixing the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation and FEMA compounding.",
    url: "https://www.theaucorp.com/case-studies",
  },
  twitter: {
    title: "Case Studies: Indian Subsidiaries Set Up and Run | AU Corporate",
    description:
      "Case studies of foreign parents setting up, running and fixing the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation and FEMA compounding.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
