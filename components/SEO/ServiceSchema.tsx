import { Script } from "next/script"

export interface ServiceSchemaProps {
  name: string
  description: string
  image?: string
  areaServed?: string[]
  priceRange?: string
  availableLanguage?: string[]
  serviceType?: string[]
}

export function ServiceSchema({
  name,
  description,
  image,
  areaServed = ["IN"],
  priceRange = "Varies",
  availableLanguage = ["en"],
  serviceType = ["Professional Service"],
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    image: image || "https://www.theaucorp.com/logo.png",
    provider: {
      "@type": "LocalBusiness",
      name: "AU Corporate",
      url: "https://www.theaucorp.com",
      telephone: "+91-8800-AUCORP",
      email: "partner@theaucorp.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "New Delhi",
        addressCountry: "IN",
      },
    },
    areaServed: areaServed.map((area) => ({
      "@type": "Country",
      name: area,
    })),
    priceRange,
    availableLanguage,
    serviceType,
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}
