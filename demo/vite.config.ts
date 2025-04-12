import { defineConfig, viteConfig } from "@react-beauty/vite";

export default defineConfig({
  ...viteConfig,
  base: "./",
  build: { outDir: "dist" },
});
