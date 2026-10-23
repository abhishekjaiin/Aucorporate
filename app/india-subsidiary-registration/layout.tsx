import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Indian Subsidiary Registration for Foreign Companies",
  },
  description:
    "Register your India subsidiary with AU Corporate: incorporation, PAN, TAN, bank account, share issue and FC-GPR in 4–6 weeks, USD 750–1,000 all-inclusive.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-subsidiary-registration",
  },
  openGraph: {
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Indian Subsidiary Registration for Foreign Companies",
    description:
      "Register your India subsidiary with AU Corporate: incorporation, PAN, TAN, bank account, share issue and FC-GPR in 4–6 weeks, USD 750–1,000 all-inclusive.",
    url: "https://www.theaucorp.com/india-subsidiary-registration",
  },
  twitter: {
    title: "Indian Subsidiary Registration for Foreign Companies",
    description:
      "Register your India subsidiary with AU Corporate: incorporation, PAN, TAN, bank account, share issue and FC-GPR in 4–6 weeks, USD 750–1,000 all-inclusive.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
