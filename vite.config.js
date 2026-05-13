import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        oneA: resolve(__dirname, "1a.html"),
        freestate: resolve(__dirname, "freeState/index.html"),
        freestatereview: resolve(__dirname, "freeState-review/index.html"),
        login: resolve(__dirname, "login/index.html"),
        email: resolve(__dirname, "email/index.html")
      }
    }
  }
});
