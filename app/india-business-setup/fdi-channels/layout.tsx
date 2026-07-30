import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FDI Channels & Investment Routes in India",
  },
  description:
    "An overview of the Automatic and Government approval routes for foreign direct investment into India, by sector.",
  alternates: {
    canonical: "https://www.theaucorp.com/india-business-setup/fdi-channels",
  },
  openGraph: {
    title: "FDI Channels & Investment Routes in India",
    description:
      "An overview of the Automatic and Government approval routes for foreign direct investment into India, by sector.",
    url: "https://www.theaucorp.com/india-business-setup/fdi-channels",
  },
  twitter: {
    title: "FDI Channels & Investment Routes in India",
    description:
      "An overview of the Automatic and Government approval routes for foreign direct investment into India, by sector.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
