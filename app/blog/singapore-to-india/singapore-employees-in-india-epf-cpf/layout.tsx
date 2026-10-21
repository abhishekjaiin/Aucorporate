import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Singapore Employees in India: Treaty, EPF Exemption and CPF",
  },
  description:
    "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps.",
  alternates: guideAlternates("singapore", "foreign-employee-treaty-ssa"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Singapore Employees in India: Treaty, EPF Exemption and CPF",
    description:
      "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/singapore-employees-in-india-epf-cpf",
    locale: "en_GB",
  },
  twitter: {
    title: "Singapore Employees in India: Treaty, EPF Exemption and CPF",
    description:
      "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen exemption, and PR and foreign-national gaps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
