import { AuthorLink } from "@/components/AuthorLink"

/**
 * Hero for the long-form "guide" content format (country-entry hubs and
 * their spoke articles under /blog). Breadcrumb renders separately, above
 * this, per the site's established convention — not as light-on-navy
 * crumbs inside the hero, which would be a one-off pattern just for this
 * template.
 */
export function GuideHero({
  eyebrow,
  title,
  dek,
  updated,
}: {
  eyebrow: string
  title: string
  dek?: string
  updated: string
}) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <span className="text-sm font-semibold uppercase tracking-wider text-gold">{eyebrow}</span>
        <h1 className="mb-4 mt-3 text-4xl font-bold md:text-5xl leading-tight">{title}</h1>
        {dek && <p className="mb-6 text-xl leading-relaxed text-white/85">{dek}</p>}
        <p className="text-sm text-white/70">
          By <AuthorLink className="font-semibold text-white hover:underline" />, Chartered Accountant (ICAI membership no. 544646), AU Corporate &middot; Last updated {updated}
        </p>
      </div>
    </section>
  )
}
