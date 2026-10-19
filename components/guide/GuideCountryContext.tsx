import { GUIDE_COUNTRIES, type GuideCountryKey, type GuideTopic } from "@/lib/guides/countries"
import { COUNTRY_CONTEXT, COUNTRY_PROFILE } from "@/lib/guides/country-context"

/** "What's different for <country> companies" box on a guide topic page —
 *  the home-country specifics that set this cluster's page apart from the
 *  same topic in another country's cluster. Renders nothing if the topic has
 *  no entry for this country. */
export function GuideCountryContext({ country, topic }: { country: GuideCountryKey; topic: GuideTopic }) {
  const points = COUNTRY_CONTEXT[country][topic]
  if (!points?.length) return null
  const { adjective } = GUIDE_COUNTRIES[country]

  return (
    <aside className="rounded-xl border border-blue-800/20 bg-secondary/30 p-6 mb-10" aria-labelledby="country-specific">
      <h2 id="country-specific" className="text-xl font-bold text-gray-900 mb-3">
        What&apos;s different for {adjective} companies
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </aside>
  )
}

/** Country profile table for a cluster's hub page. */
export function GuideCountryProfile({ country }: { country: GuideCountryKey }) {
  const { adjective } = GUIDE_COUNTRIES[country]
  const rows = COUNTRY_PROFILE[country]

  return (
    <>
      <h2 id="country-profile" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        What is specific to {adjective} companies
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <tbody>
            {rows.map(([k, v]) => (
              <tr key={k} className="odd:bg-secondary/30">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                <td className="border border-gray-300 p-3 align-top">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
