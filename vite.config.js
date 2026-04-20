import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        oneA: resolve(__dirname, "1a.html"),
        login: resolve(__dirname, "login/index.html"),
        email: resolve(__dirname, "email/index.html")
      }
    }
  }
});
