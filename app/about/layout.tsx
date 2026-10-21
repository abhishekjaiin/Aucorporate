import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "About AU Corporate | CA-Led India Entry and Compliance Firm, New Delhi",
  },
  description:
    "AU Corporate is a CA-led firm in New Delhi and Gurugram, founded in 2016 and led by Abhishek Jaiin, that sets up and runs Indian subsidiaries for foreign companies.",
  alternates: {
    canonical: "https://www.theaucorp.com/about",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "About AU Corporate | CA-Led India Entry and Compliance Firm, New Delhi",
    description:
      "AU Corporate is a CA-led firm in New Delhi and Gurugram, founded in 2016 and led by Abhishek Jaiin, that sets up and runs Indian subsidiaries for foreign companies.",
    url: "https://www.theaucorp.com/about",
  },
  twitter: {
    title: "About AU Corporate | CA-Led India Entry and Compliance Firm, New Delhi",
    description:
      "AU Corporate is a CA-led firm in New Delhi and Gurugram, founded in 2016 and led by Abhishek Jaiin, that sets up and runs Indian subsidiaries for foreign companies.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
