import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppNavigator from "./AppNavigator.tsx";

const repoName = "POGRxRazerUseCase";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={`/${repoName}`}>
      <AppNavigator />
    </BrowserRouter>
  </StrictMode>
);
