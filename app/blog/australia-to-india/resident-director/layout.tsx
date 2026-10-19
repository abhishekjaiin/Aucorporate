import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director Rules for an Australian-Owned Indian Company",
  },
  description:
    "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Australian parents, and duties.",
  alternates: guideAlternates("australia", "resident-director"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Resident Director Rules for an Australian-Owned Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Australian parents, and duties.",
    url: "https://www.theaucorp.com/blog/australia-to-india/resident-director",
    locale: "en_AU",
  },
  twitter: {
    title: "Resident Director Rules for an Australian-Owned Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Australian parents, and duties.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
