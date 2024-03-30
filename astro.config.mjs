import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://buyers-hitachi/",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
    tailwind(), astroI18next(), react(),
  ],
});
