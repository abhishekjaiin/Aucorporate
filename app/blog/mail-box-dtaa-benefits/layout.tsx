import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Mailbox Companies & DTAA Benefits | AU Corporate Blog",
  },
  description:
    "How Indian tax authorities scrutinize mailbox/shell entities claiming DTAA benefits, and what substance requirements apply.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog/mail-box-dtaa-benefits",
  },
  openGraph: {
    title: "Mailbox Companies & DTAA Benefits | AU Corporate Blog",
    description:
      "How Indian tax authorities scrutinize mailbox/shell entities claiming DTAA benefits, and what substance requirements apply.",
    url: "https://www.theaucorp.com/blog/mail-box-dtaa-benefits",
  },
  twitter: {
    title: "Mailbox Companies & DTAA Benefits | AU Corporate Blog",
    description:
      "How Indian tax authorities scrutinize mailbox/shell entities claiming DTAA benefits, and what substance requirements apply.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
