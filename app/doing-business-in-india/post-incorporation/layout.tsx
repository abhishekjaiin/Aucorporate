import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Life After Incorporation: Strategic Priorities as You Scale in India",
  },
  description:
    "The strategic decisions that follow incorporating in India — building vs. outsourcing your finance function, governance as you scale, and common second-year mistakes.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/post-incorporation",
  },
  openGraph: {
    title: "Life After Incorporation: Strategic Priorities as You Scale in India",
    description:
      "The strategic decisions that follow incorporating in India — building vs. outsourcing your finance function, governance as you scale, and common second-year mistakes.",
    url: "https://www.theaucorp.com/doing-business-in-india/post-incorporation",
  },
  twitter: {
    title: "Life After Incorporation: Strategic Priorities as You Scale in India",
    description:
      "The strategic decisions that follow incorporating in India — building vs. outsourcing your finance function, governance as you scale, and common second-year mistakes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
