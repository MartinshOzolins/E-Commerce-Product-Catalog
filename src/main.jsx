import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//react-router
import { BrowserRouter } from "react-router-dom";

//styling
import "./index.css";

//components
import App from "./App.jsx";

//tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
