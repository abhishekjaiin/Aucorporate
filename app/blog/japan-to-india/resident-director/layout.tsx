import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director Rules for a Japanese-Owned Indian Company",
  },
  description:
    "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties.",
  alternates: guideAlternates("japan", "resident-director"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Resident Director Rules for a Japanese-Owned Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties.",
    url: "https://www.theaucorp.com/blog/japan-to-india/resident-director",
  },
  twitter: {
    title: "Resident Director Rules for a Japanese-Owned Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
