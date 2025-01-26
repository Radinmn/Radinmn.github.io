// @ts-check
// Astro Configuration File
import { defineConfig } from "astro/config";

// Import integrations
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// Export the Astro configuration
export default defineConfig({
  integrations: [
    react(),
    tailwind({ 
      applyBaseStyles: false 
    }),
  ],
});
