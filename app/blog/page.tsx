import { BlogIndex, type CountryGuideGroup } from "@/components/blog/BlogIndex"
import { GUIDE_COUNTRIES, type GuideCountryKey } from "@/lib/guides/countries"
import { pageMeta } from "@/lib/seo/llms-page-descriptions"
import { publicPages } from "@/lib/seo/public-routes"

const TAB_LABELS: Record<GuideCountryKey, string> = { usa: "USA", australia: "Australia", uk: "UK", singapore: "Singapore", japan: "Japan" }

/** Every page of each country guide cluster, in sitemap order, hub first. */
function countryGuides(): CountryGuideGroup[] {
  return (Object.keys(GUIDE_COUNTRIES) as GuideCountryKey[]).map((key) => {
    const { basePath, adjective } = GUIDE_COUNTRIES[key]
    const entry = (href: string) => ({
      href,
      title: pageMeta[href]?.title ?? href.split("/").pop()!.replace(/-/g, " "),
      desc: pageMeta[href]?.description ?? "",
    })
    const pages = publicPages
      .map((p) => p.path)
      .filter((path) => path.startsWith(`${basePath}/`))
      .map(entry)
    return { key, label: TAB_LABELS[key], adjective, hub: entry(basePath), pages }
  })
}

export default function BlogPage() {
  return <BlogIndex guides={countryGuides()} />
}
