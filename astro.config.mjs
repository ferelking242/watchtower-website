import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import fumadocs from "@fumadocs/astro";
import tailwindcss from "@tailwindcss/vite";

const base = process.env.GITHUB_ACTIONS === "true" ? "/watchtower-website" : "/";

export default defineConfig({
  site: "https://ferelking242.github.io",
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [
    react(),
    fumadocs({
      components: "./src/components/mdx.tsx",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
