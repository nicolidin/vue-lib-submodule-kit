// vite.config.ts
import vue from "file:///home/nicolas/Projects/Formation/Common/vue-lib-exo-nico-corrected/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import { defineConfig } from "file:///home/nicolas/Projects/Formation/Common/vue-lib-exo-nico-corrected/node_modules/vite/dist/node/index.js";
import dts from "file:///home/nicolas/Projects/Formation/Common/vue-lib-exo-nico-corrected/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/nicolas/Projects/Formation/Common/vue-lib-exo-nico-corrected";
var isWatch = process.env.BUILD_WATCH === "1";
var vite_config_default = defineConfig({
  plugins: [vue(), ...isWatch ? [] : [dts()]],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "VueLibExoCorrected",
      fileName: "vue-lib-exo-corrected"
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-draggable",
        "lodash-es",
        "markdown-it",
        "vuetify",
        "vue-i18n",
        "pinia",
        "pinia-plugin-persistedstate",
        "zod",
        "uuid"
      ],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src"), we don't do that because lib can be use in hot project with hot reload (alias)
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "src/styles/vue-lib-exo-corrected.scss" as *;
        `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9uaWNvbGFzL1Byb2plY3RzL0Zvcm1hdGlvbi9Db21tb24vdnVlLWxpYi1leG8tbmljby1jb3JyZWN0ZWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL25pY29sYXMvUHJvamVjdHMvRm9ybWF0aW9uL0NvbW1vbi92dWUtbGliLWV4by1uaWNvLWNvcnJlY3RlZC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9uaWNvbGFzL1Byb2plY3RzL0Zvcm1hdGlvbi9Db21tb24vdnVlLWxpYi1leG8tbmljby1jb3JyZWN0ZWQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuY29uc3QgaXNXYXRjaCA9IHByb2Nlc3MuZW52LkJVSUxEX1dBVENIID09PSBcIjFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCAuLi4oaXNXYXRjaCA/IFtdIDogW2R0cygpXSldLFxuICBidWlsZDoge1xuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiVnVlTGliRXhvQ29ycmVjdGVkXCIsXG4gICAgICBmaWxlTmFtZTogXCJ2dWUtbGliLWV4by1jb3JyZWN0ZWRcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgIFwidnVlLWRyYWdnYWJsZVwiLFxuICAgICAgICBcImxvZGFzaC1lc1wiLFxuICAgICAgICBcIm1hcmtkb3duLWl0XCIsXG4gICAgICAgIFwidnVldGlmeVwiLFxuICAgICAgICBcInZ1ZS1pMThuXCIsXG4gICAgICAgIFwicGluaWFcIixcbiAgICAgICAgXCJwaW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGVcIixcbiAgICAgICAgXCJ6b2RcIixcbiAgICAgICAgXCJ1dWlkXCJcbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogXCJWdWVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAvLyBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksIHdlIGRvbid0IGRvIHRoYXQgYmVjYXVzZSBsaWIgY2FuIGJlIHVzZSBpbiBob3QgcHJvamVjdCB3aXRoIGhvdCByZWxvYWQgKGFsaWFzKVxuICAgIH0sXG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBcbiAgICAgICAgQHVzZSBcInNyYy9zdHlsZXMvdnVlLWxpYi1leG8tY29ycmVjdGVkLnNjc3NcIiBhcyAqO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdYLE9BQU8sU0FBUztBQUN4WSxZQUFZLFVBQVU7QUFDdEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sVUFBVSxRQUFRLElBQUksZ0JBQWdCO0FBRTVDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsR0FBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFO0FBQUEsRUFDNUMsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsS0FBSztBQUFBLE1BQ0gsT0FBWSxhQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBO0FBQUEsSUFFUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxNQUdsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
