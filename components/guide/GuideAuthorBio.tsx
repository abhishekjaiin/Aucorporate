import Link from "next/link"

/** Author bio aside — identical content on every guide page, so it takes no props. */
export function GuideAuthorBio() {
  return (
    <aside className="flex gap-4 border rounded-xl p-5 mt-10 bg-white" aria-label="About the author">
      <div className="shrink-0 h-14 w-14 rounded-full bg-[#081a42] text-gold flex items-center justify-center font-bold">
        AJ
      </div>
      <div>
        <p className="font-bold text-[#081a42]">Abhishek Jaiin, Chartered Accountant</p>
        <p className="text-sm text-gray-600 mt-1">
          Abhishek Jaiin is a Chartered Accountant (ICAI membership no. 544646) and leads AU Corporate, a New Delhi
          advisory firm that helps foreign companies set up, run and scale operations in India. He advises on entity
          structuring, FEMA and RBI compliance, transfer pricing and cross-border tax.
        </p>
        <Link href="/about" className="text-sm font-semibold text-blue-800 hover:underline mt-1 inline-block">
          More about the author
        </Link>
      </div>
    </aside>
  )
}
