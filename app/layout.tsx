import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import Script from "next/script"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
      "One-Stop Solution for Foreign Companies | AU Corporate",
    template: "%s | AU Corporate",
  },

  description:
    "A one-stop solution for foreign companies establishing a subsidiary in India — market entry, incorporation, FEMA compliance, tax, and Virtual CFO services.",

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
      "One-Stop Solution for Foreign Companies | AU Corporate",

    description:
      "A one-stop solution for foreign companies establishing a subsidiary in India — market entry, incorporation, FEMA compliance, tax, and Virtual CFO services.",

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
      "One-Stop Solution for Foreign Companies | AU Corporate",

    description:
      "A one-stop solution for foreign companies establishing a subsidiary in India — market entry, incorporation, FEMA compliance, tax, and Virtual CFO services.",

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

        {/* GOOGLE ANALYTICS */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V2EZ4HBLZS"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-V2EZ4HBLZS');
          `}
        </Script>

        {/* BING CLARITY TRACKING */}
        <Script
          id="clarity-tracking"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xiq41z2mrh");
          `}
        </Script>

        {/* ORGANIZATION SCHEMA */}
<Script
  id="organization-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
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
        "https://www.linkedin.com/company/au-corporate",
      ],
    }),
  }}
/>

{/* WEBSITE SCHEMA */}
<Script
  id="website-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
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

{/* PROFESSIONAL SERVICE SCHEMA */}
<Script
  id="professional-service-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",

      name: "AU Corporate",

      image: "https://www.theaucorp.com/logo.png",

      url: "https://www.theaucorp.com",

      telephone: "+91-9999010513",

      email: "partner@theaucorp.com",

      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },

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

      {/* SERVICE CATALOG SCHEMA - 10 Core Services */}
      <Script
        id="service-catalog-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
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
