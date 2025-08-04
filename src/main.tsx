import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router";
import AppNavigator from "./AppNavigator.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <AppNavigator />
    </HashRouter>
  </StrictMode>
);
