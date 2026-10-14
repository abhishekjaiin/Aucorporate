import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"

/** Navy CTA band used mid-article and at the end of every guide page. */
export function GuideCTA({ title, description }: { title: string; description: string }) {
  return (
    <aside className="rounded-xl bg-[#081a42] text-white p-7 my-10 flex flex-wrap gap-6 items-center justify-between">
      <div className="flex-1 min-w-[240px]">
        <h2 className="text-xl font-bold mb-1.5">{title}</h2>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="https://cal.com/abhishek-jaiin-ybbklq/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors"
        >
          Book a 30-minute consultation
        </Link>
        <InquiryTrigger className="inline-block rounded-lg border-2 border-white px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">
          Get a Quote
        </InquiryTrigger>
      </div>
    </aside>
  )
}
