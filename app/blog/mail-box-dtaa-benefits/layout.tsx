import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Tiger Global Ruling: DTAA & Mailbox Companies in India",
  },
  description:
    "The Tiger Global Supreme Court ruling reshapes DTAA treaty benefits for mailbox companies lacking real substance — what it means for foreign investors and GAAR.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/mail-box-dtaa-benefits",
  },
  openGraph: {
    title: "Tiger Global Ruling: DTAA & Mailbox Companies in India",
    description:
      "The Tiger Global Supreme Court ruling reshapes DTAA treaty benefits for mailbox companies lacking real substance — what it means for foreign investors and GAAR.",
    url: "https://www.theaucorp.com/blog/mail-box-dtaa-benefits",
  },
  twitter: {
    title: "Tiger Global Ruling: DTAA & Mailbox Companies in India",
    description:
      "The Tiger Global Supreme Court ruling reshapes DTAA treaty benefits for mailbox companies lacking real substance — what it means for foreign investors and GAAR.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
