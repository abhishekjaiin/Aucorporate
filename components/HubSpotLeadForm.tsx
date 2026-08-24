"use client"

import Script from "next/script"

const HUBSPOT_PORTAL_ID = "246295501"
const HUBSPOT_FORM_ID = "6c02b223-c3cf-44d9-9f56-358a9c3488ae"

export function HubSpotLeadForm({ title = "Planning to Set Up Your Business in India?", description = "Tell us about your requirements and our India business team will get in touch." }: { title?: string; description?: string }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm" aria-labelledby="lead-form-title">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#081a42] p-8 text-white md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Talk to AU Corporate</span>
          <h2 id="lead-form-title" className="mt-3 text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-4 leading-relaxed text-white/70">{description}</p>
          <ul className="mt-7 space-y-3 text-sm text-white/80">
            <li>• Company incorporation and entity selection</li>
            <li>• FDI, FEMA and regulatory guidance</li>
            <li>• Tax, banking and post-incorporation support</li>
          </ul>
        </div>
        <div className="relative min-h-[620px] bg-white p-2 sm:p-4">
          <Script
            src={`https://js-na2.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`}
            strategy="afterInteractive"
          />
          {/*
            Same crop technique already used on /contact: overflow-hidden on
            the wrapper + a negative margin-bottom on the iframe clips the
            trailing "Powered by HubSpot" strip outside the visible area
            (the branding lives inside the cross-origin iframe document, so
            it can't be targeted directly). Fragile by nature — see
            /contact/page.tsx for the full caveat. The reliable fix is
            removing branding at the HubSpot account level (Starter plan+).
          */}
          <div className="hubspot-form-crop h-[610px] w-full overflow-hidden">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id={HUBSPOT_FORM_ID}
              data-portal-id={HUBSPOT_PORTAL_ID}
            />
          </div>
          <style jsx>{`
            .hubspot-form-crop :global(iframe) {
              margin-bottom: -46px;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
