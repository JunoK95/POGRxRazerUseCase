import { Route, Routes, useLocation } from "react-router";
import App from "./App";
import CaseOnePage from "./pages/case/1/CaseOnePage";
import CaseTwoPage from "./pages/case/2/CaseTwoPage";

function AppNavigator() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<App />} />
      <Route path="/case-one" element={<CaseOnePage />} />
      <Route path="/case-two" element={<CaseTwoPage />} />
    </Routes>
  );
}

export default AppNavigator;
