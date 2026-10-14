/** The "short answer" callout that opens every guide section — same gold-border,
 *  cream-background pattern already used site-wide for quick-answer boxes. */
export function GuideAnswerBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-gold bg-[#fffbe6] p-6 mb-8">
      {title && <span className="block text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">{title}</span>}
      <p className="text-gray-700 leading-relaxed text-base">{children}</p>
    </div>
  )
}
