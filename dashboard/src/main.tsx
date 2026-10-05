import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./components/atoms";
import { initI18n } from "./i18n";

// Global error handlers for debugging
window.onerror = (message, source, lineno, colno, error) => {
  console.error("💥 Global error:", { message, source, lineno, colno, error });
  return false;
};

window.onunhandledrejection = (event) => {
  console.error("💥 Unhandled promise rejection:", event.reason);
};

// The locale chunk is awaited before the first render so the dashboard never
// paints in English and then swaps languages underneath the operator.
void initI18n().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
});
