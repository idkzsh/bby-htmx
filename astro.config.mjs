import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), htmx()],
  output: "server",
  adapter: vercel()
});