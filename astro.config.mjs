import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  integrations: [mdx(), sitemap(), icon({
    iconPacks: ["mdi"],
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
