import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Toolbar } from "./components/templates/toolbar";

import { routes } from "./routes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Toolbar />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
);
