import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-bcc2f0.netlify.app/",
  integrations: [preact()]
});