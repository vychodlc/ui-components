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
    DefineOptions(),
    dts({
      entryRoot: "./src",
      outputDir: ["../vychod-fe-ui/es/src", "../vychod-fe-ui/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});
