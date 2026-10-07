import Link from 'next/link'

export function InquiryForm({
  title = "Tell us your plan. We'll map your India path.",
  description = 'A free call with our team to cover entry structure, timeline, compliance and what to expect in your first year. We schedule around US time zones.',
  eyebrow = 'Talk to us',
  checklist = [
    'Entry structure recommendation',
    'Documents and steps from the US parent',
    'Compliance and tax overview for your case',
  ],
}: {
  title?: string
  description?: string
  eyebrow?: string
  checklist?: string[]
}) {
  return (
    <div className="w-full rounded-2xl border border-[#dbe1ea] bg-white shadow-lg">
      <div className="border-b border-[#e6eaf0] bg-[#0E1B4D] px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD21F]">{eyebrow}</p>
        <h2 className="mt-2 text-xl font-bold leading-tight text-white">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
      </div>

      <div className="px-5 py-5">
        <div className="space-y-2.5">
          {checklist.map((item) => (
            <div key={item} className="flex items-start gap-2.5 text-sm text-[#4b5563]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD21F]" />
              <span className="leading-5">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-[#e6eaf0] pt-5">
          <p className="text-sm font-semibold text-[#243047]">Choose how you&apos;d like to start</p>
          <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
            No obligation. Tell us your plan and we&apos;ll outline your India path.
          </p>

          <div className="mt-4 space-y-2.5">
            <a
              href="https://cal.com/abhishek-jaiin-ybbklq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg bg-[#FFD21F] px-4 py-2.5 text-center text-sm font-bold text-[#0E1B4D] transition hover:bg-[#F2B705]"
            >
              Book a 30-Minute Consultation
            </a>
            <a
              href="https://wa.me/919999010513"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg border border-[#0E1B4D] bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#0E1B4D] transition hover:bg-[#f5f7fb]"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-lg border border-[#d6dce6] bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#243047] transition hover:border-[#0E1B4D] hover:text-[#0E1B4D]"
            >
              Send Us a Message
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[#6b7280]">
            New Delhi: 408 Surya Kiran Building, 19 KG Marg, New Delhi 110001
            <span className="mx-1.5">·</span>
            Gurugram (by appointment)
            <span className="mx-1.5">·</span>
            <a href="tel:+919999010513" className="font-medium text-[#0E1B4D] hover:underline">
              +91-9999010513
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
