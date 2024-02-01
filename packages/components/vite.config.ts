import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build: {
    outDir: "es",
    rollupOptions: {
      external: ["vue", /\.less/],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../vychod-fe-ui/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../vychod-fe-ui/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outputDir: ["../vychod-fe-ui/es/src", "../vychod-fe-ui/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions(),
  ],
});
