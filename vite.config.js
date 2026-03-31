import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

function baseRedirectPlugin(base) {
  const baseWithoutTrailingSlash = base.replace(/\/$/, "");

  function redirectMiddleware(req, res, next) {
    if (!req.url) {
      next();
      return;
    }

    if (req.url === baseWithoutTrailingSlash) {
      res.statusCode = 302;
      res.setHeader("Location", `${base}/`);
      res.end();
      return;
    }

    next();
  }

  return {
    name: "base-redirect",
    configureServer(server) {
      server.middlewares.use(redirectMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(redirectMiddleware);
    },
  };
}

export default defineConfig({
  base: "/rtfree/",
  plugins: [react(), baseRedirectPlugin("/rtfree")],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        oneA: resolve(__dirname, "1a.html"),
        login: resolve(__dirname, "login/index.html")
      }
    }
  }
});
