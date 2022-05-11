import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import "./index.css";
import App from "./App";

// context
import { LanguageProvider } from "./context/Language";
import { UserProvider } from "./context/User";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <LanguageProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </LanguageProvider>
  </StrictMode>
);
