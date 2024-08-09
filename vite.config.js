import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],

  server: {
    open: true, // automatically open the app in the browser
    //port: 3000,
  },
});
