import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// fonts
import "@fontsource/poppins";
import "@fontsource/roboto";

// styles
import "./index.css";

// app
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
