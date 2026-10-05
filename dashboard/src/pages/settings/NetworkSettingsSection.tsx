import { Select } from "../../components/atoms";
import type { BackendConfig, BackendConfigState } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { csvToList, fieldClass, listToCsv } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface NetworkSettingsSectionProps {
  apiTokenMissing: boolean;
  attachWildcard: boolean;
  backendConfig: BackendConfig;
  backendState: BackendConfigState | null;
  nonLoopbackBind: boolean;
  updateBackendSection: UpdateBackendSection;
}

export function NetworkSettingsSection({
  apiTokenMissing,
  attachWildcard,
  backendConfig,
  backendState,
  nonLoopbackBind,
  updateBackendSection,
}: NetworkSettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.networksettingssection.network_attach")}
      description={t(
        "pages.settings.networksettingssection.port_and_bind_changes_require_a_restart",
      )}
    >
      <SettingRow
        label={t("pages.settings.networksettingssection.server_port")}
        description={t(
          "pages.settings.networksettingssection.http_port_for_the_dashboard_process",
        )}
      >
        <input
          value={backendConfig.server.port}
          onChange={(e) =>
            updateBackendSection("server", { port: e.target.value })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.bind_address")}
        description={t(
          "pages.settings.networksettingssection.network_interface_the_dashboard_process",
        )}
      >
        <div className="space-y-2">
          <input
            value={backendConfig.server.bind}
            onChange={(e) =>
              updateBackendSection("server", {
                bind: e.target.value,
              })
            }
            className={fieldClass}
          />
          {nonLoopbackBind ? (
            <div className="rounded-sm border border-destructive/35 bg-destructive/10 px-3 py-2 text-xs leading-5 text-destructive/80">
              {t(
                "pages.settings.networksettingssection.a_non_loopback_bind_is_a_documented_non",
              )}
            </div>
          ) : (
            <div className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
              {t(
                "pages.settings.networksettingssection.loopback_bind_keeps_direct_server",
              )}{" "}
              <code>0.0.0.0</code>{" "}
              {t(
                "pages.settings.networksettingssection.or_another_non_local_address_widens_the",
              )}
            </div>
          )}
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.api_token")}
        description={t(
          "pages.settings.networksettingssection.bearer_token_required_by_authenticated",
        )}
      >
        <div className="space-y-2">
          <div className="text-xs leading-5 text-text-muted">
            {backendState?.tokenConfigured ? (
              <>
                {t(
                  "pages.settings.networksettingssection.token_configured_manage_rotation",
                )}{" "}
                <code className="rounded bg-[rgb(var(--brand-surface-code-rgb)/0.72)] px-1 py-0.5 text-text-secondary">
                  {t(
                    "pages.settings.networksettingssection.pinchtab_config_token",
                  )}
                </code>{" "}
                {t(
                  "pages.settings.networksettingssection.to_copy_it_to_your_clipboard",
                )}
              </>
            ) : (
              t(
                "pages.settings.networksettingssection.no_token_configured_set_one_through_the",
              )
            )}
          </div>
          {apiTokenMissing && (
            <div className="rounded-sm border border-destructive/35 bg-destructive/10 px-3 py-2 text-xs leading-5 text-destructive">
              {t(
                "pages.settings.networksettingssection.no_api_token_is_set_anyone_who_can",
              )}
            </div>
          )}
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.state_directory")}
        description={t(
          "pages.settings.networksettingssection.base_state_path_used_by_managed_child",
        )}
      >
        <input
          value={backendConfig.server.stateDir}
          onChange={(e) =>
            updateBackendSection("server", {
              stateDir: e.target.value,
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.trust_proxy_headers")}
        description={t(
          "pages.settings.networksettingssection.trust_x_forwarded_proto_x_forwarded",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.server.trustProxyHeaders ?? false}
            onChange={(e) =>
              updateBackendSection("server", {
                trustProxyHeaders: e.target.checked,
              })
            }
            className="accent-primary"
          />
          {backendConfig.server.trustProxyHeaders
            ? t("pages.settings.networksettingssection.enabled")
            : t("pages.settings.networksettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.cookie_secure_mode")}
        description={t(
          "pages.settings.networksettingssection.controls_whether_dashboard_session",
        )}
      >
        <div className="space-y-2">
          <Select
            value={
              backendConfig.server.cookieSecure === true
                ? "true"
                : backendConfig.server.cookieSecure === false
                  ? "false"
                  : "auto"
            }
            onChange={(e) =>
              updateBackendSection("server", {
                cookieSecure:
                  e.target.value === "auto"
                    ? undefined
                    : e.target.value === "true",
              })
            }
          >
            <option value="auto">
              {t("pages.settings.networksettingssection.auto")}
            </option>
            <option value="true">
              {t("pages.settings.networksettingssection.force_secure")}
            </option>
            <option value="false">
              {t("pages.settings.networksettingssection.force_insecure")}
            </option>
          </Select>
          <div className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
            {t(
              "pages.settings.networksettingssection.force_secure_blocks_dashboard_login_on",
            )}{" "}
            <code>
              {t("pages.settings.networksettingssection.trustproxyheaders")}
            </code>{" "}
            {t(
              "pages.settings.networksettingssection.so_forwarded_https_requests_are",
            )}
          </div>
        </div>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.networksettingssection.persist_dashboard_sessions",
        )}
        description={t(
          "pages.settings.networksettingssection.keep_dashboard_login_sessions_across",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.sessions.dashboard.persist}
            onChange={(e) =>
              updateBackendSection("sessions", {
                dashboard: {
                  ...backendConfig.sessions.dashboard,
                  persist: e.target.checked,
                },
              })
            }
            className="accent-primary"
          />
          {backendConfig.sessions.dashboard.persist
            ? t("pages.settings.networksettingssection.enabled")
            : t("pages.settings.networksettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.session_idle_timeout")}
        description={t(
          "pages.settings.networksettingssection.how_long_an_unused_dashboard_session",
        )}
      >
        <input
          type="number"
          min={60}
          step={60}
          value={backendConfig.sessions.dashboard.idleTimeoutSec}
          onChange={(e) =>
            updateBackendSection("sessions", {
              dashboard: {
                ...backendConfig.sessions.dashboard,
                idleTimeoutSec: Number(e.target.value),
              },
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.session_max_lifetime")}
        description={t(
          "pages.settings.networksettingssection.absolute_lifetime_for_a_dashboard",
        )}
      >
        <input
          type="number"
          min={60}
          step={60}
          value={backendConfig.sessions.dashboard.maxLifetimeSec}
          onChange={(e) =>
            updateBackendSection("sessions", {
              dashboard: {
                ...backendConfig.sessions.dashboard,
                maxLifetimeSec: Number(e.target.value),
              },
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.networksettingssection.require_elevation_for_config_saves",
        )}
        description={t(
          "pages.settings.networksettingssection.ask_for_api_token_re_entry_before",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.sessions.dashboard.requireElevation}
            onChange={(e) =>
              updateBackendSection("sessions", {
                dashboard: {
                  ...backendConfig.sessions.dashboard,
                  requireElevation: e.target.checked,
                },
              })
            }
            className="accent-primary"
          />
          {backendConfig.sessions.dashboard.requireElevation
            ? t("pages.settings.networksettingssection.enabled")
            : t("pages.settings.networksettingssection.disabled")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.allow_attach")}
        description={t(
          "pages.settings.networksettingssection.permit_attaching_pinchtab_to_externally",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.security.attach.enabled}
            onChange={(e) =>
              updateBackendSection("security", {
                attach: {
                  ...backendConfig.security.attach,
                  enabled: e.target.checked,
                },
              })
            }
            className="h-4 w-4"
          />
          {t("pages.settings.networksettingssection.enable")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.networksettingssection.allowed_attach_hosts")}
        description={t(
          "pages.settings.networksettingssection.comma_separated_host_allowlist_for",
        )}
      >
        <div className="space-y-2">
          <input
            value={listToCsv(backendConfig.security.attach.allowHosts)}
            onChange={(e) =>
              updateBackendSection("security", {
                attach: {
                  ...backendConfig.security.attach,
                  allowHosts: csvToList(e.target.value),
                },
              })
            }
            className={fieldClass}
          />
          {attachWildcard ? (
            <div className="rounded-sm border border-destructive/35 bg-destructive/10 px-3 py-2 text-xs leading-5 text-destructive/80">
              <code>
                {t("pages.settings.networksettingssection.allowhosts")}
              </code>{" "}
              {t(
                "pages.settings.networksettingssection.is_a_documented_non_default_security",
              )}
            </div>
          ) : (
            <div className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
              {t(
                "pages.settings.networksettingssection.hosts_in_this_allowlist_may_be_used_for",
              )}
            </div>
          )}
        </div>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.networksettingssection.allowed_attach_schemes",
        )}
        description={t(
          "pages.settings.networksettingssection.comma_separated_scheme_allowlist",
        )}
      >
        <input
          value={listToCsv(backendConfig.security.attach.allowSchemes)}
          onChange={(e) =>
            updateBackendSection("security", {
              attach: {
                ...backendConfig.security.attach,
                allowSchemes: csvToList(e.target.value),
              },
            })
          }
          className={fieldClass}
        />
      </SettingRow>
    </SectionCard>
  );
}
