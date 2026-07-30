import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "US Subsidiary vs Branch Office in India | Comparison Guide",
  },
  description:
    "Comparing subsidiary and branch office structures for US companies entering India, including US tax reporting implications.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india",
  },
  openGraph: {
    title: "US Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Comparing subsidiary and branch office structures for US companies entering India, including US tax reporting implications.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india",
  },
  twitter: {
    title: "US Subsidiary vs Branch Office in India | Comparison Guide",
    description:
      "Comparing subsidiary and branch office structures for US companies entering India, including US tax reporting implications.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
