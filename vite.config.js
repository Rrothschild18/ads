import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    disabled: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/index.scss";`,
      },
    },
  },
  commonjsOptions: { include: [] },
});
