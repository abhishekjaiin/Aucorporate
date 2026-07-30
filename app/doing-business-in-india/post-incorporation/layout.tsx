import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Post-Incorporation Compliance in India | AU Corporate",
  },
  description:
    "Ongoing compliance obligations after incorporating in India — accounting, tax filings, FEMA returns, and statutory requirements.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/post-incorporation",
  },
  openGraph: {
    title: "Post-Incorporation Compliance in India | AU Corporate",
    description:
      "Ongoing compliance obligations after incorporating in India — accounting, tax filings, FEMA returns, and statutory requirements.",
    url: "https://www.theaucorp.com/doing-business-in-india/post-incorporation",
  },
  twitter: {
    title: "Post-Incorporation Compliance in India | AU Corporate",
    description:
      "Ongoing compliance obligations after incorporating in India — accounting, tax filings, FEMA returns, and statutory requirements.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
