import React from "react";
import AuthPortal from "./AuthPortal";
import RTBlog from "../RTBlog";

export default function App() {
  const basePath = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const homePath = basePath || "/";

  if (pathname === `${basePath}/login`) {
    return <AuthPortal />;
  }

  if (pathname === homePath) {
    return <RTBlog />;
  }

  return <RTBlog />;
}
