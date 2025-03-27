import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // ← Optional, only if using SVG as React components

export default defineConfig({
  plugins: [
    react(),
    svgr() // ← Optional: allows you to import SVGs as React components
  ],
  server: {
    port: 5173,        // Custom port
    open: true         // Open browser on server start
  },
  base: "./"           // Use relative paths for assets (optional depending on build context)
});
