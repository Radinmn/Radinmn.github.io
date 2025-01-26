// @ts-check
// Astro Configuration File
import { defineConfig } from "astro/config";

// Import integrations
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// Export the Astro configuration
export default defineConfig({
  site: "https://radinmn.github.io", // Your GitHub Pages URL
  base: "/", // Use "/" if deploying to the root of the repository
  integrations: [
    react(),
    tailwind({ 
      applyBaseStyles: false 
    }),
  ],
});
