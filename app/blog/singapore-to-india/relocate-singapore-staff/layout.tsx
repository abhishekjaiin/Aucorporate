import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocating Singapore Staff to India: Visas, OCI, FRRO and Day-Count Controls",
  },
  description:
    "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing.",
  alternates: guideAlternates("singapore", "expat-visa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Relocating Singapore Staff to India: Visas, OCI, FRRO and Day-Count Controls",
    description:
      "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/relocate-singapore-staff",
    locale: "en_GB",
  },
  twitter: {
    title: "Relocating Singapore Staff to India: Visas, OCI, FRRO and Day-Count Controls",
    description:
      "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin, FRRO registration, residence tests and housing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
