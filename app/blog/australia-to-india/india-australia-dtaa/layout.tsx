import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies",
  },
  description:
    "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits.",
  alternates: guideAlternates("australia", "india-dtaa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies",
    description:
      "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits.",
    url: "https://www.theaucorp.com/blog/australia-to-india/india-australia-dtaa",
    locale: "en_AU",
  },
  twitter: {
    title: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies",
    description:
      "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence state: tax rates table, permanent establishment, business profits, dividends, interest, royalties, capital gains, employees, relief, MAP and how to claim treaty benefits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
