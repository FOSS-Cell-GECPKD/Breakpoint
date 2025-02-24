import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BenefitsPage from "./pages/benefits";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Breakpoint">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/benefits" element={<BenefitsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
