import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import Script from "next/script"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/PageTransition"
import { FloatingInquiryCTA } from "@/components/FloatingInquiryCTA"
import { StickyInquirySidebar } from "@/components/StickyInquirySidebar"

import { OFFICE_ADDRESSES_SCHEMA } from "@/lib/site"
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
      "Company Registration in India & Compliance | AU Corporate",
    template: "%s | AU Corporate",
  },

  description:
    "AU Corporate is an India-based, CA-led professional services firm supporting foreign companies with India entry, subsidiary setup, tax and ongoing compliance.",

  // No site-wide canonical: an inherited one would declare every page that
  // forgets its own canonical a copy of the homepage. Each page sets its own;
  // the homepage's is in app/page.tsx. No site-wide hreflang either: the
  // country guides set theirs through guideAlternates().

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

    url: "https://www.theaucorp.com/",

    siteName: "AU Corporate",

    title: "Company Registration in India & Compliance | AU Corporate",

    description:
      "CA-led firm for company incorporation and registration in India, serving clients across India and worldwide, with accounting, tax and FEMA compliance.",

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
      "AU Corporate | CA-Led India Entry, Tax & Compliance",

    description:
      "AU Corporate is an India-based, CA-led professional services firm supporting foreign companies with India entry, subsidiary setup, tax and ongoing compliance.",

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

        {/* BRAND META (application-name comes from metadata.applicationName) */}
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

        {/* GOOGLE TAG (gtag.js) — direct GA4 tag, separate from the GTM container above.
            2026-10-15: added back as a direct gtag.js per explicit instruction
            (measurement ID G-BCLWTC7VFH), alongside GTM-N23Z4X6Z. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCLWTC7VFH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCLWTC7VFH');
          `}
        </Script>

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

        {/* SITEWIDE ORGANIZATION + WEBSITE SCHEMA
            Keep global structured data intentionally small and valid. Page-specific
            schemas (BreadcrumbList, FAQPage, Article, Service, etc.) belong on the
            relevant page/layout instead of being emitted on every URL. */}
        <script
          id="site-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.theaucorp.com/#organization",
                  name: "AU Corporate",
                  alternateName: ["AU Corp", "A U Corporate"],
                  url: "https://www.theaucorp.com/",
                  logo: "https://www.theaucorp.com/logo.png",
                  foundingDate: "2016",
                  description:
                    "CA-led firm for company incorporation and registration in India, and the accounting, FEMA/RBI, tax, secretarial and payroll compliance that follows. Serves clients across India and foreign parent companies worldwide.",
                  address: OFFICE_ADDRESSES_SCHEMA,
                  areaServed: { "@type": "Country", name: "India" },
                  knowsAbout: [
                    "Company incorporation in India",
                    "Company registration in India",
                    "Private limited company registration",
                    "Foreign subsidiary registration in India",
                    "FEMA and RBI compliance",
                    "Indian tax, GST and transfer pricing",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/a-u-corporate/",
                    "https://www.instagram.com/aucorporate/",
                    "https://www.facebook.com/profile.php?id=61593816719018",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    telephone: "+91-9999010513",
                    email: "partner@theaucorp.com",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.theaucorp.com/#website",
                  // Google's site name for search results: name, alternateName
                  // and url must match the homepage exactly (with the slash).
                  name: "AU Corporate",
                  alternateName: ["AU Corp", "A U Corporate"],
                  url: "https://www.theaucorp.com/",
                  inLanguage: "en-IN",
                  publisher: {
                    "@id": "https://www.theaucorp.com/#organization",
                  },
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
          <PageTransition>{children}</PageTransition>
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
