import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "index.html", // Specify the entry point relative to the project root
    },
  },
  server: {
    open: true, // automatically open the app in the browser
    port: 3000,
  },
  resolve: {
    alias: {
      screens: path.resolve(__dirname, "./src/screens"),
    },
  },
});
