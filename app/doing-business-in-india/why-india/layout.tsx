import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Why Invest in India | Doing Business in India Guide",
  },
  description:
    "Key reasons global companies are choosing India — market size, growth rate, talent, and strategic advantages for foreign investors.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/why-india",
  },
  openGraph: {
    title: "Why Invest in India | Doing Business in India Guide",
    description:
      "Key reasons global companies are choosing India — market size, growth rate, talent, and strategic advantages for foreign investors.",
    url: "https://www.theaucorp.com/doing-business-in-india/why-india",
  },
  twitter: {
    title: "Why Invest in India | Doing Business in India Guide",
    description:
      "Key reasons global companies are choosing India — market size, growth rate, talent, and strategic advantages for foreign investors.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
