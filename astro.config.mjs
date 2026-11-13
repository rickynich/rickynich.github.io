// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// When a custom domain is set up, change `site` to it and add public/CNAME (see README).
export default defineConfig({
  site: "https://rickynich.github.io",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
