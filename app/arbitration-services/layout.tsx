import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Arbitration & Dispute Resolution in India | AU Corporate",
  },
  description:
    "Arbitration, enforcement, and dispute resolution advisory for businesses facing commercial disputes in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/arbitration-services",
  },
  openGraph: {
    title: "Arbitration & Dispute Resolution in India | AU Corporate",
    description:
      "Arbitration, enforcement, and dispute resolution advisory for businesses facing commercial disputes in India.",
    url: "https://www.theaucorp.com/arbitration-services",
  },
  twitter: {
    title: "Arbitration & Dispute Resolution in India | AU Corporate",
    description:
      "Arbitration, enforcement, and dispute resolution advisory for businesses facing commercial disputes in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
