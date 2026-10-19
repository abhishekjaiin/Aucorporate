# Country cluster playbook

How to add a new "<Country> to India" guide cluster (UK, Singapore, Germany, Japan, ...) so that it ranks on its own and is not treated by Google as a copy of the USA or Australia clusters.

## Why this matters

Every country cluster covers the same India-side topics: incorporation, FEMA, transfer pricing, compliance and so on. The India rules are the same whichever country the parent is in, so a cluster written by swapping "US" for "UK" is around 90% identical to the others. Google then indexes one version and drops the rest as duplicates.

Three things prevent that:

1. **hreflang**: each topic page declares its sibling pages in other countries as regional variants (`en-US`, `en-AU`, `en-GB`, ...). This comes automatically from the registry in `lib/guides/countries.ts`.
2. **Country-specific content**: every topic page carries a "What's different for <country> companies" box, and the hub carries a country profile table. These come from `lib/guides/country-context.ts`.
3. **Unique titles and descriptions**: no two pages on the site may share a `<title>` or meta description.

## Steps for a new country

1. **Register the country** in `GUIDE_COUNTRIES` (`lib/guides/countries.ts`): name, adjective, locale (`en-GB`, `en-SG`, `en-DE`...), `basePath` (`/blog/uk-to-india`), and the topics it covers. Topics only that country has (like `india-dtaa` or `foreign-employee-treaty-ssa` for Australia) are added to `GuideTopic` and listed only for that country.
2. **Build the pages** under `app/blog/<country>-to-india/` with the `components/guide/*` components, following an existing cluster.
3. **In every layout**, use `alternates: guideAlternates("<country>", "<topic>")`. Do not hand-write canonical or hreflang URLs.
4. **On every topic page**, render `<GuideCountryContext country="<country>" topic="<topic>" />` before the first `<h2>`, and add `{ id: "country-specific", label: "What's different for <Adjective> companies" }` as the first TOC entry. On the hub, render `<GuideCountryProfile country="<country>" />` after the at-a-glance table.
5. **Write the country content** in `COUNTRY_CONTEXT` and `COUNTRY_PROFILE`: 2 to 3 points per topic, each specific to that country. Good sources of difference:
   - the India-<country> tax treaty: withholding rates, service PE days, the residency certificate the home tax authority issues
   - social security agreement with India (or none)
   - apostille or legalisation authority (for non-Hague countries: embassy legalisation)
   - the parent's financial year end against India's 31 March
   - time difference and working-hour overlap
   - home-country tax on the Indian subsidiary: CFC rules, dividend exemption or credit, parent-side reporting forms
   - whether the country is a reciprocating territory under Section 44A CPC and notified under the New York Convention
   - Press Note 3 (land-border countries need government approval)
   - trade agreements with India
   - home-country employment law expectations that do not carry over to India
6. **Write country-specific titles and descriptions**: name the country in each, for example "Resident Director Rules for a UK-Owned Indian Company", not the generic "Resident Director Requirement for an Indian Company".
7. **Register the URLs** in `lib/seo/public-routes.ts` (sitemap), `lib/seo/llms-page-descriptions.ts` and `public/llms.txt`, and link the hub from the navbar's "By Country" menu and the footer.
8. **Check before shipping**: build, start the site, then confirm on every page of the new cluster that
   - no title or description duplicates another page on the site,
   - the hreflang links are reciprocal (each page lists every sibling, and each sibling lists it back),
   - every internal link resolves.
9. **After deploy**, request indexing in Search Console for the hub and the most important topic pages, about 10 a day.

Every country fact must be checked by the team before publishing. The pages are general information, but a wrong treaty rate or deadline damages trust and rankings.
