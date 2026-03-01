import {catomPlugin} from "catom/vite";
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@kit": "@hydrophobefireman/kit",
    },
  },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "@hydrophobefireman/ui-lib",
  },
  build: {
    outDir: "build",
    assetsDir: "_ui",
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
  server: {
    port: 4200,
  },
  publicDir: "build_static",
  plugins: [catomPlugin({})],
});
