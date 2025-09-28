
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavProvider } from "./FavContext.jsx";
import { StoreProvider } from "./hooks/useGlobalReducer"; // 👈 DODAJ
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavProvider>
        <StoreProvider> 
          <App />
        </StoreProvider>
      </FavProvider>
    </BrowserRouter>
  </StrictMode>
);
