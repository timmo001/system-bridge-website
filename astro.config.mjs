import { defineConfig } from "astro/config";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import remarkCallouts from "./src/plugins/remark-callouts.js";
import rehypeCallouts from "./src/plugins/rehype-callouts.js";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), robotsTxt(), sitemap(), tailwind()],
  site: "https://system-bridge.timmo.dev",
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkCallouts],
    rehypePlugins: [rehypeCallouts],
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: false,
    },
  },
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
  output: "static",
  adapter: vercel(),
});
