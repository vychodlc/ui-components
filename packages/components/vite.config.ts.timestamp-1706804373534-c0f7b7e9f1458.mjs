// vite.config.ts
import { defineConfig } from "file:///F:/Code/Vue/uiproject/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.15/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/Code/Vue/uiproject/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///F:/Code/Vue/uiproject/node_modules/.pnpm/vite-plugin-dts@1.4.1_@types+node@20.11.15_vite@5.0.12/node_modules/vite-plugin-dts/dist/index.js";
import DefineOptions from "file:///F:/Code/Vue/uiproject/node_modules/.pnpm/unplugin-vue-define-options@1.4.2_vue@3.4.15/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var vite_config_default = defineConfig({
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
          dir: "../vychod-fe-ui/es"
        },
        {
          format: "cjs",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../vychod-fe-ui/lib"
        }
      ]
    },
    lib: {
      entry: "./index.ts"
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outputDir: ["../vychod-fe-ui/es/src", "../vychod-fe-ui/lib/src"],
      tsConfigFilePath: "../../tsconfig.json"
    }),
    DefineOptions()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxDb2RlXFxcXFZ1ZVxcXFx1aXByb2plY3RcXFxccGFja2FnZXNcXFxcY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcQ29kZVxcXFxWdWVcXFxcdWlwcm9qZWN0XFxcXHBhY2thZ2VzXFxcXGNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0NvZGUvVnVlL3VpcHJvamVjdC9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5pbXBvcnQgRGVmaW5lT3B0aW9ucyBmcm9tIFwidW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGVcIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiBcImVzXCIsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXCJ2dWVcIiwgL1xcLmxlc3MvXSxcclxuICAgICAgaW5wdXQ6IFtcImluZGV4LnRzXCJdLFxyXG4gICAgICBvdXRwdXQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmb3JtYXQ6IFwiZXNcIixcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5tanNcIixcclxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcclxuICAgICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcclxuICAgICAgICAgIGRpcjogXCIuLi92eWNob2QtZmUtdWkvZXNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvcm1hdDogXCJjanNcIixcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5tanNcIixcclxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcclxuICAgICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcclxuICAgICAgICAgIGRpcjogXCIuLi92eWNob2QtZmUtdWkvbGliXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IFwiLi9pbmRleC50c1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgZW50cnlSb290OiBcIi4vc3JjXCIsXHJcbiAgICAgIG91dHB1dERpcjogW1wiLi4vdnljaG9kLWZlLXVpL2VzL3NyY1wiLCBcIi4uL3Z5Y2hvZC1mZS11aS9saWIvc3JjXCJdLFxyXG4gICAgICB0c0NvbmZpZ0ZpbGVQYXRoOiBcIi4uLy4uL3RzY29uZmlnLmpzb25cIixcclxuICAgIH0pLFxyXG4gICAgRGVmaW5lT3B0aW9ucygpLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsb0JBQW9CO0FBQ3RWLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLE9BQU8sUUFBUTtBQUFBLE1BQzFCLE9BQU8sQ0FBQyxVQUFVO0FBQUEsTUFDbEIsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLFFBQVE7QUFBQSxVQUNSLGdCQUFnQjtBQUFBLFVBQ2hCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsZ0JBQWdCO0FBQUEsVUFDaEIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBLFVBQ1QsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsTUFDWCxXQUFXLENBQUMsMEJBQTBCLHlCQUF5QjtBQUFBLE1BQy9ELGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
