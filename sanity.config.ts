import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { schemaTypes } from "./sanity/schemaTypes"

/**
 * Studio config for the AU Corporate /insights content system.
 * Deployed to Sanity's hosted *.sanity.studio — NOT embedded in the
 * Next.js app (per explicit decision), so this file is only used when
 * running `sanity dev` / `sanity deploy` from this repo.
 */
export default defineConfig({
  name: "au-corporate-insights",
  title: "AU Corporate — Insights",

  projectId: "kyo68738",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
