import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import vitePluginImp from "vite-plugin-imp";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style/css.js`,
          // style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
});
