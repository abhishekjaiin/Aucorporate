import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocating UK Staff to India: Visas, FRRO Registration, Housing and Day-Count Control",
  },
  description:
    "How to move a UK employee to India: employment visa or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking, family and the day-count controls.",
  alternates: guideAlternates("uk", "expat-visa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Relocating UK Staff to India: Visas, FRRO Registration, Housing and Day-Count Control",
    description:
      "How to move a UK employee to India: employment visa or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking, family and the day-count controls.",
    url: "https://www.theaucorp.com/blog/uk-to-india/relocate-uk-staff",
    locale: "en_GB",
  },
  twitter: {
    title: "Relocating UK Staff to India: Visas, FRRO Registration, Housing and Day-Count Control",
    description:
      "How to move a UK employee to India: employment visa or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking, family and the day-count controls.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
