import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { lingui } from "@lingui/vite-plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    lingui(),
    tailwindcss(),
    tsconfigPaths(),
    tanstackStart({
      customViteReactPlugin: true,
      prerender: {
        // Enable prerendering
        enabled: true,

        // Enable if you need pages to be at `/page/index.html` instead of `/page.html`
        autoSubfolderIndex: true,

        // How many prerender jobs to run at once
        concurrency: 14,

        // Whether to extract links from the HTML and prerender them also
        crawlLinks: true,
      },
      // Optional configuration for specific pages (without this it will still automatically
      // prerender all routes)
      pages: [
        {
          path: "/",
          prerender: { enabled: true, outputPath: "/index.html" },
        },
      ],
    }),
    viteReact(),
  ],
});
