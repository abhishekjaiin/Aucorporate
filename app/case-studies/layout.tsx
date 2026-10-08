import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Case Studies | AU Corporate",
  },
  description:
    "How foreign companies have set up and run their Indian subsidiaries with AU Corporate.",
  alternates: {
    canonical: "https://www.theaucorp.com/case-studies",
  },
  openGraph: {
    title: "Case Studies | AU Corporate",
    description:
      "How foreign companies have set up and run their Indian subsidiaries with AU Corporate.",
    url: "https://www.theaucorp.com/case-studies",
  },
  twitter: {
    title: "Case Studies | AU Corporate",
    description:
      "How foreign companies have set up and run their Indian subsidiaries with AU Corporate.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
