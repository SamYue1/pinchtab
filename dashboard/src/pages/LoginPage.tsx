import { useState } from "react";
import type { ComponentProps } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from "../components/atoms";
import * as api from "../services/api";
import {
  dispatchAuthStateChanged,
  isInsecureDashboardTransport,
} from "../services/auth";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const insecureDashboardTransport = isInsecureDashboardTransport();

  const from =
    (location.state as { from?: string } | null)?.from ||
    "/dashboard/monitoring";

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = async (
    event,
  ) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await api.login(token);
      dispatchAuthStateChanged();
      navigate(from, { replace: true });
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : t("pages.loginpage.authentication_failed"),
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-app px-4">
      <Card className="w-full max-w-md p-6">
        <div className="mb-6">
          <div className="dashboard-section-label mb-2">
            {t("pages.loginpage.authentication")}
          </div>
          <h1 className="text-xl font-semibold text-text-primary">
            {t("pages.loginpage.enter_api_token")}
          </h1>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            {t("pages.loginpage.this_pinchtab_server_requires_a_bearer")}
          </p>
          <p className="mt-1 text-xs leading-5 text-text-muted">
            {t("pages.loginpage.run")}{" "}
            <code className="rounded bg-[rgb(var(--brand-surface-code-rgb)/0.72)] px-1.5 py-0.5 text-text-secondary">
              {t("pages.loginpage.pinchtab_config_token")}
            </code>{" "}
            {t("pages.loginpage.to_copy_the_token_to_your_clipboard")}
          </p>
          {insecureDashboardTransport && (
            <div className="mt-3 rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
              {t("auth.insecureTransport")}
            </div>
          )}
        </div>

        <form
          id="login-form"
          className="space-y-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            id="login-password"
            type="password"
            autoFocus
            autoComplete="off"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full rounded-sm border border-border-subtle bg-[rgb(var(--brand-surface-code-rgb)/0.72)] px-3 py-2 text-sm text-text-primary placeholder:text-text-muted transition-all duration-150 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder={t("pages.loginpage.paste_bearer_token")}
            spellCheck={false}
            autoCapitalize="none"
          />
          {error && (
            <div className="rounded-sm border border-destructive/35 bg-destructive/10 px-3 py-2 text-xs leading-5 text-destructive">
              {error}
            </div>
          )}
          <Button type="submit" disabled={submitting || token.trim() === ""}>
            {submitting
              ? t("pages.loginpage.authorizing")
              : t("pages.loginpage.continue")}
          </Button>
        </form>
      </Card>
    </div>
  );
}
