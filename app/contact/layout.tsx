import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Contact AU Corporate | India Entry & Advisory Team",
  },
  description:
    "Get in touch with AU Corporate for India market entry, tax, compliance, and Virtual CFO advisory. New Delhi-based, serving foreign companies entering and operating in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/contact",
  },
  openGraph: {
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Get in touch with AU Corporate for India market entry, tax, compliance, and Virtual CFO advisory. New Delhi-based, serving foreign companies entering and operating in India.",
    url: "https://www.theaucorp.com/contact",
  },
  twitter: {
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Get in touch with AU Corporate for India market entry, tax, compliance, and Virtual CFO advisory. New Delhi-based, serving foreign companies entering and operating in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
