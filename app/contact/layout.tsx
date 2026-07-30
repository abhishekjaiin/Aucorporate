import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Contact AU Corporate | India Entry & Advisory Team",
  },
  description:
    "Get in touch with AU Corporate for India market entry, tax, compliance, and Virtual CFO advisory. New Delhi-based, serving clients across 10+ countries.",
  alternates: {
    canonical: "https://www.theaucorp.com/contact",
  },
  openGraph: {
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Get in touch with AU Corporate for India market entry, tax, compliance, and Virtual CFO advisory. New Delhi-based, serving clients across 10+ countries.",
    url: "https://www.theaucorp.com/contact",
  },
  twitter: {
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Get in touch with AU Corporate for India market entry, tax, compliance, and Virtual CFO advisory. New Delhi-based, serving clients across 10+ countries.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
