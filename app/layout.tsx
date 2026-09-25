import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import Script from "next/script"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingInquiryCTA } from "@/components/FloatingInquiryCTA"
import { StickyInquirySidebar } from "@/components/StickyInquirySidebar"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theaucorp.com"),

  applicationName: "AU Corporate",

  title: {
    default:
      "AU Corporate | India Business Setup, Tax & Compliance Firm",
    template: "AU Corporate | %s",
  },

  description:
    "AU Corporate — a New Delhi-based advisory firm (est. 2016) helping foreign companies enter India with entity setup, tax, GST, FEMA compliance and payroll.",

  alternates: {
    canonical: "https://www.theaucorp.com",
    languages: {
      "en": "https://www.theaucorp.com",
      "en-US": "https://www.theaucorp.com",
      "en-GB": "https://www.theaucorp.com",
      "en-AU": "https://www.theaucorp.com",
      "en-SG": "https://www.theaucorp.com",
      "en-IN": "https://www.theaucorp.com",
      "en-AE": "https://www.theaucorp.com",
      "x-default": "https://www.theaucorp.com",
    },
  },

  authors: [
    {
      name: "AU Corporate",
      url: "https://www.theaucorp.com",
    },
  ],

  creator: "AU Corporate",
  publisher: "AU Corporate",

  category: "Business Consulting",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://www.theaucorp.com",

    siteName: "AU Corporate",

    title:
      "AU Corporate | India Business Setup, Tax & Compliance Firm",

    description:
      "AU Corporate — a New Delhi-based advisory firm (est. 2016) helping foreign companies enter India with entity setup, tax, GST, FEMA compliance and payroll.",

    images: [
      {
        url: "https://www.theaucorp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AU Corporate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AU Corporate | India Business Setup, Tax & Compliance Firm",

    description:
      "AU Corporate — a New Delhi-based advisory firm (est. 2016) helping foreign companies enter India with entity setup, tax, GST, FEMA compliance and payroll.",

    images: ["https://www.theaucorp.com/og-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <head>

        {/* BRAND META */}
        <meta
          name="application-name"
          content="AU Corporate"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="AU Corporate"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />


        {/* GOOGLE TAG MANAGER — afterInteractive (not lazyOnload like the scripts below):
            GTM is a container that can fire other tags (conversion pixels, remarketing),
            so it needs to be available sooner than analytics-only scripts. Matches the
            strategy Next.js's own next/third-parties GoogleTagManager component defaults to. */}
        <Script id="gtm-container" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N23Z4X6Z');
          `}
        </Script>

        {/* GA4 (G-V2EZ4HBLZS) is intentionally NOT loaded here as a separate direct
            gtag.js script. It was previously duplicated alongside GTM below — GTM is
            already designed to load and configure GA4 itself via a GA4 Configuration
            tag inside the GTM container, so hardcoding a second, direct gtag.js here
            was redundant script weight on every page (flagged by PageSpeed Insights'
            "reduce unused JavaScript" audit). If GA4 property G-V2EZ4HBLZS is not
            already configured as a tag inside GTM container GTM-N23Z4X6Z, add it there
            (tagmanager.google.com) rather than restoring this direct script — verify
            GA4 data continuity in the GA4 Realtime report after this deploys. */}

        {/* BING CLARITY TRACKING — lazyOnload for the same reason */}
        <Script
          id="clarity-tracking"
          strategy="lazyOnload"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xiq41z2mrh");
          `}
        </Script>

        {/* ORGANIZATION SCHEMA — plain script tag, not next/script: this is inert
    JSON-LD data with no executable logic, so it doesn't need (and
    shouldn't use) a hydration-blocking loading strategy. */}
<script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",

      name: "AU Corporate",

      url: "https://www.theaucorp.com",

      logo: "https://www.theaucorp.com/logo.png",

      foundingDate: "2016",

      description:
        "AU Corporate provides comprehensive business advisory services: India Entry, GCC Advisory, Business Setup, Accounting, Payroll, Tax, Transfer Pricing, Virtual CFO, HR Outsourcing, and Compliance for global businesses.",

      knowsAbout: [
        "India Entry Strategy",
        "GCC Advisory Services",
        "Business Setup in India",
        "Accounting Outsourcing",
        "Payroll Management",
        "Transfer Pricing",
        "International Taxation",
        "Virtual CFO Services",
        "HR Outsourcing",
        "FEMA Compliance",
        "GST Advisory",
        "Regulatory Compliance",
      ],

      areaServed: [
        "India",
        "United States",
        "United Kingdom",
        "Singapore",
        "United Arab Emirates",
      ],

      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+91-9999010513",
        email: "partner@theaucorp.com",
      },

      sameAs: [
        "https://www.linkedin.com/company/a-u-corporate/",
        "https://www.instagram.com/aucorporate/",
        "https://www.facebook.com/profile.php?id=61593816719018",
      ],
    }),
  }}
/>

{/* WEBSITE SCHEMA — plain script tag, see note above */}
<script
  id="website-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",

      name: "AU Corporate",

      url: "https://www.theaucorp.com",

      inLanguage: "en-IN",

      publisher: {
        "@type": "Organization",
        name: "AU Corporate",
        url: "https://www.theaucorp.com",
      },
    }),
  }}
/>

{/* PROFESSIONAL SERVICE SCHEMA — plain script tag, see note above */}
<script
  id="professional-service-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",

      name: "AU Corporate",

      image: "https://www.theaucorp.com/logo.png",

      url: "https://www.theaucorp.com",

      telephone: "+91-9999010513",

      email: "partner@theaucorp.com",

      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "4O8 Surya Kiran Building, 19 KG Marg",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110001",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
      ],

      areaServed: [
        "India",
        "United States",
        "United Kingdom",
        "Singapore",
        "United Arab Emirates",
      ],

      serviceType: [
        "India Entry Services",
        "GCC Advisory Services",
        "Business Setup Services",
        "Accounting Services",
        "Payroll Services",
        "Tax Advisory Services",
        "Transfer Pricing Advisory",
        "Virtual CFO Services",
        "HR Outsourcing Services",
        "Compliance Services",
      ],
    }),
  }}
/>

      {/* SERVICE CATALOG SCHEMA - 10 Core Services — plain script tag, see note above */}
      <script
        id="service-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "AU Corporate - 10 Core Service Pillars",
            description: "Comprehensive business advisory services covering all aspects of international business operations",
            itemListElement: [
              {
                "@type": "Service",
                name: "India Entry Services",
                description: "Strategic entry planning and market analysis for foreign companies entering India",
              },
              {
                "@type": "Service",
                name: "GCC Advisory Services",
                description: "Global coordination center advisory and management services",
              },
              {
                "@type": "Service",
                name: "Business Setup Services",
                description: "End-to-end business incorporation and entity establishment",
              },
              {
                "@type": "Service",
                name: "Accounting Services",
                description: "Accounting outsourcing and bookkeeping services",
              },
              {
                "@type": "Service",
                name: "Payroll Services",
                description: "Comprehensive payroll processing and HR management",
              },
              {
                "@type": "Service",
                name: "Tax Advisory Services",
                description: "International tax planning and compliance advisory",
              },
              {
                "@type": "Service",
                name: "Transfer Pricing Services",
                description: "Transfer pricing documentation and compliance support",
              },
              {
                "@type": "Service",
                name: "Virtual CFO Services",
                description: "Remote Chief Financial Officer and financial consulting services",
              },
              {
                "@type": "Service",
                name: "HR Outsourcing Services",
                description: "Human resources management and employee services outsourcing",
              },
              {
                "@type": "Service",
                name: "Compliance Services",
                description: "Regulatory compliance and legal advisory services",
              },
            ],
          }),
        }}
      />
    </head>

    <body
      className={`${inter.variable} ${manrope.variable} font-sans antialiased m-0 p-0 overflow-x-hidden`}
    >
      {/* GOOGLE TAG MANAGER (noscript) — must be immediately after the opening <body>
          tag per Google's own installation requirement, for the no-JS fallback to work. */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N23Z4X6Z"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* NAVBAR */}
      <div className="relative z-60">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 pt-16 sm:pt-20">
          {children}
        </main>

        <Footer />
      </div>

      {/* SITEWIDE LEAD-GENERATION CTA — floating "Talk to an Expert" trigger (lg-2xl)
          and sticky bar (mobile) that open the enquiry form in a modal on every page,
          not just the handful of pages that already embed it inline. */}
      <FloatingInquiryCTA />

      {/* SITEWIDE LEAD-GENERATION SIDEBAR — a slim, click-to-open "Quick Enquiry"
          tab docked to the right edge on large desktop viewports (2xl+), replacing
          the floating trigger at that breakpoint. Starts collapsed (doesn't reserve
          any page width or open itself) and only expands into the form as a
          floating overlay when clicked. */}
      <StickyInquirySidebar />

      {/* APOLLO TRACKER */}
            <Script
        id="apollo"
        strategy="lazyOnload"
      >
        {`
          function initApollo() {
            var n = Math.random().toString(36).substring(7),
                o = document.createElement("script");

            o.src =
              "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" +
              n;

            o.async = true;
            o.defer = true;

            o.onload = function () {
              if (window.trackingFunctions) {
                window.trackingFunctions.onLoad({
                  appId: "69ef2f72e61a0c000d596f8e",
                });
              }
            };

            document.head.appendChild(o);
          }

          initApollo();
        `}
      </Script>
    </body>
  </html>
  )
}
