import { Web3Form } from "./Web3Form"

export function LeadForm({ title = "Planning to Set Up Your Business in India?", description = "Tell us about your requirements and our India business team will get in touch." }: { title?: string; description?: string }) {
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
        <div className="flex min-h-[500px] items-center bg-white p-8 sm:p-10">
          <div className="w-full">
            <Web3Form />
          </div>
        </div>
      </div>
    </section>
  )
}
