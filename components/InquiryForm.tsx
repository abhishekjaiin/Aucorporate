import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Web3Form } from './Web3Form'

const DEFAULT_CHECKLIST = ['India company setup & incorporation', 'Foreign subsidiary / WOS', 'FDI, FEMA & RBI support', 'Tax, compliance & ongoing support']

export function InquiryForm({
  title = 'Tell Us About Your Requirement',
  description = "Share a few details about what you're planning. Our India business team will help you understand the right next step.",
  eyebrow = 'Start a Conversation',
  checklist = DEFAULT_CHECKLIST,
  footerNote = (
    <>
      Tell us what you need <ArrowRight className="h-3 w-3" /> we&apos;ll help you plan the next step.
    </>
  ),
}: {
  title?: string
  description?: string
  eyebrow?: string
  checklist?: string[]
  footerNote?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-xl lg:p-7">
      <div className="mb-5">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</span>
        <h2 className="mt-2 text-2xl font-bold text-[#081a42]">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="mb-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-1">
        {checklist.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <Web3Form />

      <p className="mt-3 flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
        {footerNote}
      </p>
    </div>
  )
}
