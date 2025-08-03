import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./containers/Home";
import GlobalStyles from "./styles/globalStyles";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>
);
