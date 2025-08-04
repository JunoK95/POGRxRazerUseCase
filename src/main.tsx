import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router";
import CaseOnePage from "./pages/case/1/CaseOnePage.tsx";
import CaseTwoPage from "./pages/case/2/CaseTwoPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-one" element={<CaseOnePage />} />
        <Route path="/case-two" element={<CaseTwoPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
