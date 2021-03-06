import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: "https://jasperdelanghe.com",
  integrations: [react(), tailwind(), partytown(), sitemap()],
});
