import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporation Process for an Indian Subsidiary, Step by Step",
  },
  description:
    "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  alternates: guideAlternates("usa", "incorporation-process"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Incorporation Process for an Indian Subsidiary, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
    url: "https://www.theaucorp.com/blog/usa-to-india/incorporation-process",
  },
  twitter: {
    title: "Incorporation Process for an Indian Subsidiary, Step by Step",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from the USA: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
