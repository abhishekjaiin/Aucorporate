import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Company Incorporation in India | Process & Requirements",
  },
  description:
    "How company incorporation works in India under the Companies Act, 2013 — documentation, filings, and typical timelines.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/incorporation",
  },
  openGraph: {
    title: "Company Incorporation in India | Process & Requirements",
    description:
      "How company incorporation works in India under the Companies Act, 2013 — documentation, filings, and typical timelines.",
    url: "https://www.theaucorp.com/doing-business-in-india/incorporation",
  },
  twitter: {
    title: "Company Incorporation in India | Process & Requirements",
    description:
      "How company incorporation works in India under the Companies Act, 2013 — documentation, filings, and typical timelines.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
