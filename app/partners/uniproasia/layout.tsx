import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "UniproAsia Partnership: Expand into Hong Kong, Singapore & China",
  },
  description:
    "AU Corporate partners with UniproAsia to help clients expand beyond India into Hong Kong, Singapore and China — formation, tax and compliance in one engagement.",
  keywords: ["UniproAsia", "Unipro Consulting", "Hong Kong company formation", "Singapore company formation", "China business setup", "AU Corporate partner", "expand into Hong Kong from India", "expand into Singapore from India"],
  alternates: {
    canonical: "https://www.theaucorp.com/partners/uniproasia",
  },
  openGraph: {
    title: "UniproAsia Partnership: Expand into Hong Kong, Singapore & China",
    description:
      "AU Corporate partners with UniproAsia to help clients expand beyond India into Hong Kong, Singapore and China — formation, tax and compliance in one engagement.",
    url: "https://www.theaucorp.com/partners/uniproasia",
  },
  twitter: {
    title: "UniproAsia Partnership: Expand into Hong Kong, Singapore & China",
    description:
      "AU Corporate partners with UniproAsia to help clients expand beyond India into Hong Kong, Singapore and China — formation, tax and compliance in one engagement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
