import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "About AU Corporate | CA-Led Incorporation Firm in India",
  },
  description:
    "CA-led firm founded in 2016 and led by Abhishek Jaiin, incorporating and running companies across India for Indian and foreign clients, from New Delhi.",
  alternates: {
    canonical: "https://www.theaucorp.com/about",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "About AU Corporate | CA-Led Incorporation Firm in India",
    description:
      "CA-led firm founded in 2016 and led by Abhishek Jaiin, incorporating and running companies across India for Indian and foreign clients, from New Delhi.",
    url: "https://www.theaucorp.com/about",
  },
  twitter: {
    title: "About AU Corporate | CA-Led Incorporation Firm in India",
    description:
      "CA-led firm founded in 2016 and led by Abhishek Jaiin, incorporating and running companies across India for Indian and foreign clients, from New Delhi.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
