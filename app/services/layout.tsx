import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Our Services | AU Corporate — India Entry, Tax, Compliance & Advisory",
  },
  description:
    "Explore AU Corporate's full service range: India entry, GCC advisory, taxation, accounting, HR outsourcing, risk management, and Virtual CFO services.",
  alternates: {
    canonical: "https://www.theaucorp.com/services",
  },
  openGraph: {
    title: "Our Services | AU Corporate — India Entry, Tax, Compliance & Advisory",
    description:
      "Explore AU Corporate's full service range: India entry, GCC advisory, taxation, accounting, HR outsourcing, risk management, and Virtual CFO services.",
    url: "https://www.theaucorp.com/services",
  },
  twitter: {
    title: "Our Services | AU Corporate — India Entry, Tax, Compliance & Advisory",
    description:
      "Explore AU Corporate's full service range: India entry, GCC advisory, taxation, accounting, HR outsourcing, risk management, and Virtual CFO services.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
