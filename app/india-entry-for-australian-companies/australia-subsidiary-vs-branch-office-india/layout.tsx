import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Australia Subsidiary vs Branch Office in India | Comparison Guide",
  },
  description:
    "Comparing subsidiary and branch office structures for Australian companies entering India, including CFC attribution rules and DTAA withholding treatment.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india",
  },
  openGraph: {
    title: "Australia Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Comparing subsidiary and branch office structures for Australian companies entering India, including CFC attribution rules and DTAA withholding treatment.",
    url: "https://www.theaucorp.com/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india",
  },
  twitter: {
    title: "Australia Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Comparing subsidiary and branch office structures for Australian companies entering India, including CFC attribution rules and DTAA withholding treatment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
