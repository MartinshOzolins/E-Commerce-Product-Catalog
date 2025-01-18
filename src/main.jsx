import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//react-router-dom
import { BrowserRouter } from "react-router-dom";

//styling
import "./index.css";

//components
import App from "./App.jsx";

//tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

//global context provider
import GlobalDataProvider from "./contexts/GlobalDataProvider";

//error boundary
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalDataProvider>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onReset={() => (window.location.href = "/")}
      >
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </GlobalDataProvider>
  </StrictMode>
);
