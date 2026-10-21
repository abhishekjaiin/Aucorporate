import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Singapore: Who Does What, and When",
  },
  description:
    "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.",
  alternates: guideAlternates("singapore", "incorporation-process"),
  openGraph: {
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Singapore: Who Does What, and When",
    description:
      "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.",
    url: "https://www.theaucorp.com/blog/singapore-to-india/incorporation-steps",
    locale: "en_GB",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Singapore: Who Does What, and When",
    description:
      "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
