import type { BackendConfig, BackendConfigState } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { csvToList, fieldClass, listToCsv } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface AutoSolverSettingsSectionProps {
  backendConfig: BackendConfig;
  backendState: BackendConfigState | null;
  updateBackendSection: UpdateBackendSection;
}

export function AutoSolverSettingsSection({
  backendConfig,
  backendState,
  updateBackendSection,
}: AutoSolverSettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.autosolversettingssection.autosolver")}
      description={t(
        "pages.settings.autosolversettingssection.these_settings_are_saved_into_the",
      )}
    >
      <SettingRow
        label={t("pages.settings.autosolversettingssection.config_file")}
        description={t(
          "pages.settings.autosolversettingssection.dashboard_edits_are_written_back_to",
        )}
      >
        <div className="rounded-sm border border-border-subtle bg-[rgb(var(--brand-surface-code-rgb)/0.72)] px-3 py-2 text-sm text-text-secondary">
          <code>
            {backendState?.configPath ||
              t(
                "pages.settings.autosolversettingssection.config_path_unavailable",
              )}
          </code>
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.enable_autosolver")}
        description={t(
          "pages.settings.autosolversettingssection.turns_on_the_autosolver_runtime",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.autoSolver.enabled}
            onChange={(e) =>
              updateBackendSection("autoSolver", {
                enabled: e.target.checked,
              })
            }
            className="h-4 w-4"
          />
          {backendConfig.autoSolver.enabled
            ? t("pages.settings.autosolversettingssection.enabled")
            : t("pages.settings.autosolversettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.auto_trigger")}
        description={t(
          "pages.settings.autosolversettingssection.automatically_run_autosolver_after",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.autoSolver.autoTrigger}
            onChange={(e) =>
              updateBackendSection("autoSolver", {
                autoTrigger: e.target.checked,
              })
            }
            className="h-4 w-4"
          />
          {backendConfig.autoSolver.autoTrigger
            ? t("pages.settings.autosolversettingssection.enabled")
            : t("pages.settings.autosolversettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.autosolversettingssection.trigger_on_navigate",
        )}
        description={t(
          "pages.settings.autosolversettingssection.run_autosolver_checks_after_successful",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.autoSolver.triggerOnNavigate}
            onChange={(e) =>
              updateBackendSection("autoSolver", {
                triggerOnNavigate: e.target.checked,
              })
            }
            className="h-4 w-4"
          />
          {backendConfig.autoSolver.triggerOnNavigate
            ? t("pages.settings.autosolversettingssection.enabled")
            : t("pages.settings.autosolversettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.trigger_on_action")}
        description={t(
          "pages.settings.autosolversettingssection.run_autosolver_checks_after_successful_2",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.autoSolver.triggerOnAction}
            onChange={(e) =>
              updateBackendSection("autoSolver", {
                triggerOnAction: e.target.checked,
              })
            }
            className="h-4 w-4"
          />
          {backendConfig.autoSolver.triggerOnAction
            ? t("pages.settings.autosolversettingssection.enabled")
            : t("pages.settings.autosolversettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.max_attempts")}
        description={t(
          "pages.settings.autosolversettingssection.maximum_autosolver_retries_before_the",
        )}
      >
        <input
          type="number"
          min={1}
          value={backendConfig.autoSolver.maxAttempts}
          onChange={(e) =>
            updateBackendSection("autoSolver", {
              maxAttempts: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.solver_timeout_sec")}
        description={t(
          "pages.settings.autosolversettingssection.per_solver_timeout_for_each_attempt",
        )}
      >
        <input
          type="number"
          min={1}
          value={backendConfig.autoSolver.solverTimeoutSec}
          onChange={(e) =>
            updateBackendSection("autoSolver", {
              solverTimeoutSec: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.autosolversettingssection.retry_base_delay_ms",
        )}
        description={t(
          "pages.settings.autosolversettingssection.base_retry_backoff_delay_between",
        )}
      >
        <input
          type="number"
          min={0}
          value={backendConfig.autoSolver.retryBaseDelayMs}
          onChange={(e) =>
            updateBackendSection("autoSolver", {
              retryBaseDelayMs: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.retry_max_delay_ms")}
        description={t(
          "pages.settings.autosolversettingssection.maximum_retry_backoff_delay_cap_between",
        )}
      >
        <input
          type="number"
          min={0}
          value={backendConfig.autoSolver.retryMaxDelayMs}
          onChange={(e) =>
            updateBackendSection("autoSolver", {
              retryMaxDelayMs: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.solvers")}
        description={t(
          "pages.settings.autosolversettingssection.comma_separated_ordered_list_of_solver",
        )}
      >
        <input
          value={listToCsv(backendConfig.autoSolver.solvers)}
          onChange={(e) =>
            updateBackendSection("autoSolver", {
              solvers: csvToList(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.llm_provider")}
        description={t(
          "pages.settings.autosolversettingssection.optional_provider_name_used_when_llm",
        )}
      >
        <input
          value={backendConfig.autoSolver.llmProvider}
          onChange={(e) =>
            updateBackendSection("autoSolver", {
              llmProvider: e.target.value,
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.autosolversettingssection.llm_fallback")}
        description={t(
          "pages.settings.autosolversettingssection.use_an_llm_as_the_last_resort_after",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.autoSolver.llmFallback}
            onChange={(e) =>
              updateBackendSection("autoSolver", {
                llmFallback: e.target.checked,
              })
            }
            className="h-4 w-4"
          />
          {backendConfig.autoSolver.llmFallback
            ? t("pages.settings.autosolversettingssection.enabled")
            : t("pages.settings.autosolversettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.autosolversettingssection.external_provider_keys",
        )}
        description={t(
          "pages.settings.autosolversettingssection.capsolver_and_2captcha_credentials_are",
        )}
      >
        <div className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
          {t(
            "pages.settings.autosolversettingssection.open_the_config_file_above_and_set",
          )}{" "}
          <code>
            {t(
              "pages.settings.autosolversettingssection.autosolver_external_capsolverkey",
            )}
          </code>{" "}
          and{" "}
          <code>
            {t(
              "pages.settings.autosolversettingssection.autosolver_external_twocaptchakey",
            )}
          </code>{" "}
          {t(
            "pages.settings.autosolversettingssection.there_the_dashboard_does_not_display_or",
          )}
        </div>
      </SettingRow>
    </SectionCard>
  );
}
