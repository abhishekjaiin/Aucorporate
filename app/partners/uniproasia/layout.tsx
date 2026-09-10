import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "UniproAsia Partnership: Expand into Hong Kong, Singapore & China | AU Corporate",
  },
  description:
    "AU Corporate partners with UniproAsia (Unipro Consulting Limited) to support clients expanding beyond India into Hong Kong, Singapore and Mainland China — company formation, accounting, tax, audit and compliance in one integrated engagement.",
  keywords: ["UniproAsia", "Unipro Consulting", "Hong Kong company formation", "Singapore company formation", "China business setup", "AU Corporate partner", "expand into Hong Kong from India", "expand into Singapore from India"],
  alternates: {
    canonical: "https://www.theaucorp.com/partners/uniproasia",
  },
  openGraph: {
    title: "UniproAsia Partnership: Expand into Hong Kong, Singapore & China | AU Corporate",
    description:
      "AU Corporate partners with UniproAsia (Unipro Consulting Limited) to support clients expanding beyond India into Hong Kong, Singapore and Mainland China.",
    url: "https://www.theaucorp.com/partners/uniproasia",
  },
  twitter: {
    title: "UniproAsia Partnership: Expand into Hong Kong, Singapore & China | AU Corporate",
    description:
      "AU Corporate partners with UniproAsia (Unipro Consulting Limited) to support clients expanding beyond India into Hong Kong, Singapore and Mainland China.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
