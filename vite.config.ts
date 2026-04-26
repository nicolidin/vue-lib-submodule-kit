import path from "node:path";
import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libStyles = path.resolve(__dirname, "src/styles");

/** Config légère (Storybook / usage local) — pas de build bundle, pas d’index barrel. */
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [libStyles],
        additionalData: `
        @use "src/styles/sfc-scss-prelude.scss" as *;
        `,
      },
    },
  },
});
