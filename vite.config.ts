import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  base: "/",
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.gltf", "**/*.bin"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  publicDir: "public",
  build: {
    minify: "esbuild",
    assetsDir: "assets",
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        experimentalMinChunkSize: 30000,
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name ?? "unknown";
          const extType = fileName.split(".").pop()?.toLowerCase() ?? "";

          if (/glb|hdr|gltf|bin/i.test(extType)) {
            return `assets/models/[name]-[hash][extname]`;
          }

          return `assets/[name]-[hash][extname]`;
        },
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom") ||
            id.includes("@react-three")
          ) {
            return "vendor-react";
          }
          if (id.includes("node_modules/three")) {
            return "vendor-three";
          }
          if (id.includes("node_modules/@dimforge/rapier3d")) {
            return "vendor-rapier";
          }
          if (id.includes("node_modules")) {
            return "vendor-others";
          }
        },
      },
    },
  },
});
