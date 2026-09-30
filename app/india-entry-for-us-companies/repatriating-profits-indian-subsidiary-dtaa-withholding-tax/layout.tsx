import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from Your Indian Subsidiary to a US Parent: DTAA & Withholding Tax Rates | AU Corporate",
  },
  description:
    "How a US parent company repatriates profits from its Indian subsidiary under the India-US DTAA: sourced treaty rates, the 2026 buyback rules, and net FTC cost.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax",
  },
  openGraph: {
    title: "Repatriating Profits from Your Indian Subsidiary to a US Parent: DTAA & Withholding Tax Rates | AU Corporate",
    description:
      "How a US parent company repatriates profits from its Indian subsidiary under the India-US DTAA: sourced treaty rates, the 2026 buyback rules, and net FTC cost.",
    url: "https://www.theaucorp.com/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax",
  },
  twitter: {
    title: "Repatriating Profits from Your Indian Subsidiary to a US Parent: DTAA & Withholding Tax Rates | AU Corporate",
    description:
      "How a US parent company repatriates profits from its Indian subsidiary under the India-US DTAA: sourced treaty rates, the 2026 buyback rules, and net FTC cost.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
