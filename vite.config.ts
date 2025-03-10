import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
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
          if (id.includes("node_modules")) {
            if (id.includes("@dimforge/rapier3d")) {
              return "vendor-rapier";
            } else if (id.includes("@react-three/drei")) {
              return "vendor-react-three-drei";
            } else if (id.includes("@react-three/fiber")) {
              return "vendor-react-three-fiber";
            } else if (id.includes("@react-three")) {
              return "vendor-react-three";
            } else if (id.includes("three")) {
              return "vendor-three";
            } else if (id.includes("react")) {
              return "vendor-react";
            }

            return "vendor";
          }
        },
      },
    },
  },
});
