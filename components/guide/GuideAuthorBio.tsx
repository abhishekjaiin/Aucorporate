import Image from "next/image"
import Link from "next/link"
import { AUTHOR_LINKEDIN } from "@/lib/site"

/** Author bio aside — identical content on every guide page, so it takes no props. */
export function GuideAuthorBio() {
  return (
    <aside className="flex gap-4 border rounded-xl p-5 mt-10 bg-white" aria-label="About the author">
      <Image
        src="/images/authors/abhishek-jaiin.jpg"
        alt="Abhishek Jaiin"
        width={56}
        height={56}
        className="shrink-0 h-14 w-14 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-[#081a42]">Abhishek Jaiin, Chartered Accountant</p>
        <p className="text-sm text-gray-600 mt-1">
          Abhishek Jaiin is a Chartered Accountant (ICAI membership no. 544646) and leads AU Corporate, a New Delhi
          advisory firm that helps foreign companies set up, run and scale operations in India. He advises on entity
          structuring, FEMA and RBI compliance, transfer pricing and cross-border tax.
        </p>
        <p className="mt-1 flex flex-wrap gap-x-4 text-sm font-semibold">
          <a href={AUTHOR_LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
            Abhishek Jaiin on LinkedIn
          </a>
          <Link href="/about" className="text-blue-800 hover:underline">
            More about the author
          </Link>
        </p>
      </div>
    </aside>
  )
}
