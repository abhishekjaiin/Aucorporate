import { ArrowRight, CheckCircle2 } from 'lucide-react'

const HUBSPOT_FORM_URL = 'https://42mytp.share-na2.hsforms.com/2bAKyI8PPRNmfVjWKnDSIrg'

export function InquiryForm({
  title = 'Tell Us About Your Requirement',
  description = "Share a few details about what you're planning. Our India business team will help you understand the right next step.",
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-xl lg:p-7">
      <div className="mb-5">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Start a Conversation</span>
        <h2 className="mt-2 text-2xl font-bold text-[#081a42]">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="mb-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-1">
        {['India company setup & incorporation', 'Foreign subsidiary / WOS', 'FDI, FEMA & RBI support', 'Tax, compliance & ongoing support'].map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/*
        HubSpot's "Powered by HubSpot" attribution renders inside the
        iframe's own (cross-origin) document, so page CSS can't reach it
        directly. Same crop technique already used on /contact and the
        homepage: overflow-hidden on the wrapper + a negative margin-bottom
        on the iframe pulls the wrapper's visible area up short of the
        iframe's full rendered height, clipping the trailing branding strip
        outside the visible area. Fragile by nature: if HubSpot changes the
        footer height, or form content grows taller (validation errors,
        more fields), this may clip too little or too much. The reliable
        fix is removing branding at the HubSpot account level (Starter
        plan+), not this CSS hack.
      */}
      <div className="min-h-[620px] w-full overflow-hidden">
        <iframe
          src={HUBSPOT_FORM_URL}
          title="AU Corporate inquiry form"
          className="min-h-[620px] w-full border-0"
          style={{ marginBottom: -46 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <p className="mt-3 flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
        Tell us what you need <ArrowRight className="h-3 w-3" /> we&apos;ll help you plan the next step.
      </p>
    </div>
  )
}
