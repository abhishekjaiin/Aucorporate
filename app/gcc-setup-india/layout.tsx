import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "GCC Setup in India | Global Capability Center Guide (2026)",
  },
  description:
    "How to set up a GCC in India: entity choice, FEMA/RBI filings, safe harbour tax rules, and the compliance calendar after incorporation.",
  keywords: ["GCC setup in India", "Global Capability Center India", "GCC vs subsidiary India", "GCC entity structure India", "how to set up a GCC in India", "GCC compliance India"],
  alternates: {
    canonical: "https://www.theaucorp.com/gcc-setup-india",
  },
  openGraph: {
    title: "GCC Setup in India | Global Capability Center Guide (2026)",
    description:
      "How to set up a GCC in India: entity choice, FEMA/RBI filings, safe harbour tax rules, and the compliance calendar after incorporation.",
    url: "https://www.theaucorp.com/gcc-setup-india",
  },
  twitter: {
    title: "GCC Setup in India | Global Capability Center Guide (2026)",
    description:
      "How to set up a GCC in India: entity choice, FEMA/RBI filings, safe harbour tax rules, and the compliance calendar after incorporation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
