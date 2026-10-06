import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "kyo68738",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
})
