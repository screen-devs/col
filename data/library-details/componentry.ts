import type { LibraryDetails } from "./types";

export default {
  docsUrl: "https://componentry.dev/docs",
  repoUrl: "https://github.com/harshjdhv/componentry",
  preview: {
    src: "https://componentry.dev/opengraph-image.png",
    alt: "Componentry animated components overview",
  },
  pricing: {
    model: "free",
    summary: "All of the components are free and open source under the MIT license; the Polar sponsorship tiers fund upkeep and gate nothing.",
    license: "MIT",
    source: "https://github.com/harshjdhv/componentry/blob/main/LICENSE",
  },
} satisfies LibraryDetails;
