/** Office addresses and author links shown across the site. Change them here, not in pages. */

export const OFFICES = {
  newDelhi: {
    label: "New Delhi (HQ)",
    lines: "408, Surya Kiran Building, 19 KG Marg, New Delhi-110001, India",
    streetAddress: "408, Surya Kiran Building, 19 KG Marg",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110001",
  },
  gurugram: {
    label: "Gurugram",
    lines: "4th Floor, G-27, South City-1, Gurugram, Haryana, India",
    streetAddress: "4th Floor, G-27, South City-1",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
  },
} as const

/** schema.org PostalAddress list for the Organization. */
export const OFFICE_ADDRESSES_SCHEMA = Object.values(OFFICES).map((o) => ({
  "@type": "PostalAddress",
  streetAddress: o.streetAddress,
  addressLocality: o.addressLocality,
  addressRegion: o.addressRegion,
  ...("postalCode" in o ? { postalCode: o.postalCode } : {}),
  addressCountry: "IN",
}))

export const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/abhishek-jaiin/"
