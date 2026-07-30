import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry for Australian Companies | AU Corporate",
  },
  description:
    "How Australian companies enter and set up business operations in India, including entity structuring and compliance essentials.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-australian-companies",
  },
  openGraph: {
    title: "India Entry for Australian Companies | AU Corporate",
    description:
      "How Australian companies enter and set up business operations in India, including entity structuring and compliance essentials.",
    url: "https://www.theaucorp.com/india-entry-for-australian-companies",
  },
  twitter: {
    title: "India Entry for Australian Companies | AU Corporate",
    description:
      "How Australian companies enter and set up business operations in India, including entity structuring and compliance essentials.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
