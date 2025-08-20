import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProviderWrapper } from "./theme/ThemeToggler.jsx";
import './reset.css'; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </StrictMode>
);
