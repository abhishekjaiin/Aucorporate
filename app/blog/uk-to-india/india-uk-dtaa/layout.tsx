import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-UK DTAA: Article-by-Article Guide to the Tax Treaty for UK Companies",
  },
  description:
    "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.",
  alternates: guideAlternates("uk", "india-dtaa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-UK DTAA: Article-by-Article Guide to the Tax Treaty for UK Companies",
    description:
      "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.",
    url: "https://www.theaucorp.com/blog/uk-to-india/india-uk-dtaa",
    locale: "en_GB",
  },
  twitter: {
    title: "India-UK DTAA: Article-by-Article Guide to the Tax Treaty for UK Companies",
    description:
      "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
