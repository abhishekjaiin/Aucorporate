import createImageUrlBuilder from "@sanity/image-url"
import type { Image } from "sanity"

import { projectId, dataset } from "./client"

const builder = createImageUrlBuilder({ projectId, dataset })

export function urlForImage(source: Image | undefined) {
  if (!source?.asset?._ref) return undefined
  return builder.image(source)
}
