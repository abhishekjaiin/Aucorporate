import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Market Entry Process | Step-by-Step Guide",
  },
  description:
    "A step-by-step walkthrough of the India market entry process, from entity selection through incorporation and initial compliance.",
  alternates: {
    canonical: "https://www.theaucorp.com/doing-business-in-india/entry-process",
  },
  openGraph: {
    title: "India Market Entry Process | Step-by-Step Guide",
    description:
      "A step-by-step walkthrough of the India market entry process, from entity selection through incorporation and initial compliance.",
    url: "https://www.theaucorp.com/doing-business-in-india/entry-process",
  },
  twitter: {
    title: "India Market Entry Process | Step-by-Step Guide",
    description:
      "A step-by-step walkthrough of the India market entry process, from entity selection through incorporation and initial compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
