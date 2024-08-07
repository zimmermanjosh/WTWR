import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "public/index.html", // Specify the entry point relative to the project root
    },
  },
  server: {
    open: true,
  },
});
