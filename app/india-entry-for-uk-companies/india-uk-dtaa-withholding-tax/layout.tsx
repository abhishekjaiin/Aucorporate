import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India-UK DTAA & Withholding Tax Rates Explained",
  },
  description:
    "Does India have a double taxation agreement with the UK? Yes — see the India-UK DTAA (tax treaty) withholding tax rates on dividends, interest, and royalties, with treaty article citations, and how to claim treaty benefits.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax",
  },
  openGraph: {
    title: "India-UK DTAA & Withholding Tax Rates Explained",
    description:
      "Does India have a double taxation agreement with the UK? Yes — see the India-UK DTAA (tax treaty) withholding tax rates on dividends, interest, and royalties, with treaty article citations, and how to claim treaty benefits.",
    url: "https://www.theaucorp.com/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax",
  },
  twitter: {
    title: "India-UK DTAA & Withholding Tax Rates Explained",
    description:
      "Does India have a double taxation agreement with the UK? Yes — see the India-UK DTAA (tax treaty) withholding tax rates on dividends, interest, and royalties, with treaty article citations, and how to claim treaty benefits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
