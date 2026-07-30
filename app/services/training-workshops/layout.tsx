import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Training & Workshops | AU Corporate",
  },
  description:
    "Professional development workshops in taxation, compliance, and business practices delivered by AU Corporate's advisory team.",
  alternates: {
    canonical: "https://www.theaucorp.com/services/training-workshops",
  },
  openGraph: {
    title: "Training & Workshops | AU Corporate",
    description:
      "Professional development workshops in taxation, compliance, and business practices delivered by AU Corporate's advisory team.",
    url: "https://www.theaucorp.com/services/training-workshops",
  },
  twitter: {
    title: "Training & Workshops | AU Corporate",
    description:
      "Professional development workshops in taxation, compliance, and business practices delivered by AU Corporate's advisory team.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
