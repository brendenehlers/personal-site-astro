import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/config";
import viteCompression from 'vite-plugin-compression'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: SITE_URL,
  vite: {
    plugins: [viteCompression({ algorithm: 'brotliCompress'})]
  }
});
