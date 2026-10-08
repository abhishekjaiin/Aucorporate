import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Foreign Subsidiary in India | Wholly Owned Subsidiary Setup Guide",
  },
  description:
    "How a foreign company sets up and runs a wholly owned subsidiary in India: choosing a structure, FDI/FEMA/RBI, incorporation, post-incorporation filings, ongoing operations, and repatriation or exit.",
  keywords: [
    "foreign subsidiary in India",
    "wholly owned subsidiary India",
    "WOS India setup",
    "foreign company subsidiary India",
    "India subsidiary compliance",
    "set up subsidiary in India",
  ],
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/foreign-subsidiary-india",
  },
  openGraph: {
    title: "Foreign Subsidiary in India | Wholly Owned Subsidiary Setup Guide",
    description:
      "How a foreign company sets up and runs a wholly owned subsidiary in India: structure, FDI/FEMA/RBI, incorporation, post-incorporation filings, ongoing operations, and repatriation or exit.",
    url: "https://www.theaucorp.com/india-business-setup/foreign-subsidiary-india",
  },
  twitter: {
    title: "Foreign Subsidiary in India | Wholly Owned Subsidiary Setup Guide",
    description:
      "How a foreign company sets up and runs a wholly owned subsidiary in India: structure, FDI/FEMA/RBI, incorporation, post-incorporation filings, ongoing operations, and repatriation or exit.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
