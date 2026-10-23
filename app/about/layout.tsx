import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "About AU Corporate | CA-Led Company Incorporation and Compliance Firm in India",
  },
  description:
    "AU Corporate is a CA-led firm, founded in 2016 and led by Abhishek Jaiin, that incorporates and runs companies across India for Indian and foreign clients, from offices in New Delhi and Gurugram.",
  alternates: {
    canonical: "https://www.theaucorp.com/about",
  },
  openGraph: {
    siteName: "AU Corporate",
    title: "About AU Corporate | CA-Led Company Incorporation and Compliance Firm in India",
    description:
      "AU Corporate is a CA-led firm, founded in 2016 and led by Abhishek Jaiin, that incorporates and runs companies across India for Indian and foreign clients, from offices in New Delhi and Gurugram.",
    url: "https://www.theaucorp.com/about",
  },
  twitter: {
    title: "About AU Corporate | CA-Led Company Incorporation and Compliance Firm in India",
    description:
      "AU Corporate is a CA-led firm, founded in 2016 and led by Abhishek Jaiin, that incorporates and runs companies across India for Indian and foreign clients, from offices in New Delhi and Gurugram.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
