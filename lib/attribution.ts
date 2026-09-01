const STORAGE_KEY = "au_corp_attribution"

const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"] as const

type Attribution = Partial<Record<(typeof TRACKED_PARAMS)[number] | "landing_page" | "referrer", string>>

function readStored(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : null
  } catch {
    return null
  }
}

/**
 * Captures ad click IDs and UTM params on landing. Overwrites stored
 * attribution only when the current URL carries new tracked params, so a
 * visitor who lands from an ad and browses several pages before submitting
 * an inquiry keeps that ad's attribution rather than losing it to a bare
 * internal link.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return
  const params = new URLSearchParams(window.location.search)
  const found: Attribution = {}
  for (const key of TRACKED_PARAMS) {
    const value = params.get(key)
    if (value) found[key] = value
  }
  if (Object.keys(found).length === 0) return

  found.landing_page = window.location.href
  found.referrer = document.referrer || ""

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found))
  } catch {
    // localStorage unavailable (private browsing, etc.) — attribution is best-effort
  }
}

export function getStoredAttribution(): Attribution {
  if (typeof window === "undefined") return {}
  return readStored() ?? {}
}
