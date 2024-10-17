// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { ListContextProvider } from "./contexts/addctx.tsx";

createRoot(document.getElementById("root")!).render(
  <ListContextProvider>
    <App />
  </ListContextProvider>
);
