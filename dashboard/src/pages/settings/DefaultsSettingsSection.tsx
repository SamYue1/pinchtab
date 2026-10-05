import { Select } from "../../components/atoms";
import type { BackendConfig } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { fieldClass, instanceDefaultsBooleanRows } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface DefaultsSettingsSectionProps {
  backendConfig: BackendConfig;
  updateBackendSection: UpdateBackendSection;
}

export function DefaultsSettingsSection({
  backendConfig,
  updateBackendSection,
}: DefaultsSettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.defaultssettingssection.instance_defaults")}
      description={t(
        "pages.settings.defaultssettingssection.these_values_are_written_to_config_and",
      )}
    >
      <SettingRow
        label={t("pages.settings.defaultssettingssection.mode")}
        description={t(
          "pages.settings.defaultssettingssection.default_browser_mode_for_new_launches",
        )}
      >
        <Select
          value={backendConfig.instanceDefaults.mode}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              mode: e.target.value as BackendConfig["instanceDefaults"]["mode"],
            })
          }
        >
          <option value="headless">
            {t("pages.settings.defaultssettingssection.headless")}
          </option>
          <option value="headed">
            {t("pages.settings.defaultssettingssection.headed")}
          </option>
        </Select>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.stealth_level")}
        description={t(
          "pages.settings.defaultssettingssection.bot_detection_evasion_profile_higher",
        )}
      >
        <div className="space-y-2">
          <Select
            value={backendConfig.instanceDefaults.stealthLevel}
            onChange={(e) =>
              updateBackendSection("instanceDefaults", {
                stealthLevel: e.target
                  .value as BackendConfig["instanceDefaults"]["stealthLevel"],
              })
            }
          >
            <option value="light">
              {t("pages.settings.defaultssettingssection.light")}
            </option>
            <option value="medium">
              {t("pages.settings.defaultssettingssection.medium")}
            </option>
            <option value="full">
              {t("pages.settings.defaultssettingssection.full")}
            </option>
          </Select>
          <div className="rounded-sm border border-border-subtle bg-black/10 px-3 py-2 text-xs leading-5 text-text-muted">
            {backendConfig.instanceDefaults.stealthLevel === "light" && (
              <div className="space-y-2">
                <div>
                  <strong className="text-text-secondary">
                    {t("pages.settings.defaultssettingssection.light_2")}
                  </strong>{" "}
                  {t(
                    "pages.settings.defaultssettingssection.default_baseline_stealth_keeps_the",
                  )}
                </div>
                <div className="text-success/80">
                  {t(
                    "pages.settings.defaultssettingssection.default_product_security_baseline",
                  )}
                </div>
                <div className="text-success/80">
                  {t(
                    "pages.settings.defaultssettingssection.no_intentional_api_realism_or_security",
                  )}
                </div>
              </div>
            )}
            {backendConfig.instanceDefaults.stealthLevel === "medium" && (
              <div className="space-y-2">
                <div>
                  <strong className="text-warning">
                    {t("pages.settings.defaultssettingssection.medium_2")}
                  </strong>{" "}
                  {t(
                    "pages.settings.defaultssettingssection.non_default_risk_mode_adds_client_hints",
                  )}
                </div>
                <div className="text-warning/80">
                  {t(
                    "pages.settings.defaultssettingssection.alters_browser_visible_apis_and_error",
                  )}
                </div>
                <div className="text-warning/80">
                  {t(
                    "pages.settings.defaultssettingssection.permissions_and_compatibility_shims_can",
                  )}
                </div>
                <div className="text-warning/80">
                  {t(
                    "pages.settings.defaultssettingssection.reports_that_require_explicitly",
                  )}
                </div>
              </div>
            )}
            {backendConfig.instanceDefaults.stealthLevel === "full" && (
              <div className="space-y-2">
                <div>
                  <strong className="text-destructive">
                    {t("pages.settings.defaultssettingssection.full_2")}
                  </strong>{" "}
                  {t(
                    "pages.settings.defaultssettingssection.highest_risk_non_default_mode_adds",
                  )}
                </div>
                <div className="text-destructive/80">
                  {t(
                    "pages.settings.defaultssettingssection.browser_output_is_intentionally_less",
                  )}
                </div>
                <div className="text-destructive/80">
                  {t(
                    "pages.settings.defaultssettingssection.this_mode_is_not_an_acceptable_default",
                  )}
                </div>
                <div className="text-destructive/80">
                  {t(
                    "pages.settings.defaultssettingssection.reports_that_depend_on_enabling_full",
                  )}
                </div>
                <div className="text-destructive/80">
                  {t(
                    "pages.settings.defaultssettingssection.webrtc_webgl_canvas_and_audio_behavior",
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.tab_eviction_policy")}
        description={t(
          "pages.settings.defaultssettingssection.how_pinchtab_behaves_when_a_managed",
        )}
      >
        <Select
          value={backendConfig.instanceDefaults.tabEvictionPolicy}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              tabEvictionPolicy: e.target
                .value as BackendConfig["instanceDefaults"]["tabEvictionPolicy"],
            })
          }
        >
          <option value="reject">
            {t("pages.settings.defaultssettingssection.reject_new_tabs")}
          </option>
          <option value="close_oldest">
            {t("pages.settings.defaultssettingssection.close_oldest")}
          </option>
          <option value="close_lru">
            {t(
              "pages.settings.defaultssettingssection.close_least_recently_used",
            )}
          </option>
        </Select>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.tab_lifecycle")}
        description={t(
          "pages.settings.defaultssettingssection.close_idle_closes_a_tab_after_a_text",
        )}
      >
        <Select
          value={backendConfig.instanceDefaults.tabPolicy?.lifecycle ?? "keep"}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              tabPolicy: {
                ...(backendConfig.instanceDefaults.tabPolicy ?? {}),
                lifecycle: e.target.value as NonNullable<
                  BackendConfig["instanceDefaults"]["tabPolicy"]
                >["lifecycle"],
              },
            })
          }
        >
          <option value="keep">
            {t("pages.settings.defaultssettingssection.keep_never_auto_close")}
          </option>
          <option value="close_idle">
            {t("pages.settings.defaultssettingssection.close_idle")}
          </option>
          <option value="freeze_idle">
            {t("pages.settings.defaultssettingssection.freeze_idle")}
          </option>
        </Select>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.auto_close_delay")}
        description={t(
          "pages.settings.defaultssettingssection.seconds_of_idleness_before_an_idle_tab",
        )}
      >
        <input
          type="number"
          min={1}
          value={backendConfig.instanceDefaults.tabPolicy?.closeDelaySec ?? 300}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              tabPolicy: {
                ...(backendConfig.instanceDefaults.tabPolicy ?? {}),
                closeDelaySec: Number(e.target.value),
              },
            })
          }
          disabled={
            (backendConfig.instanceDefaults.tabPolicy?.lifecycle ?? "keep") ===
            "keep"
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.defaultssettingssection.restore_tabs_on_startup",
        )}
        description={t(
          "pages.settings.defaultssettingssection.when_enabled_tabs_open_at_shutdown_are",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={backendConfig.instanceDefaults.tabPolicy?.restore ?? false}
            onChange={(e) =>
              updateBackendSection("instanceDefaults", {
                tabPolicy: {
                  ...(backendConfig.instanceDefaults.tabPolicy ?? {}),
                  restore: e.target.checked,
                },
              })
            }
            className="h-4 w-4"
          />
          {t("pages.settings.defaultssettingssection.enable")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.max_tabs")}
        description={t(
          "pages.settings.defaultssettingssection.maximum_number_of_tabs_per_managed",
        )}
      >
        <input
          type="number"
          min={1}
          value={backendConfig.instanceDefaults.maxTabs}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              maxTabs: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.max_parallel_tabs")}
        description={t(
          "pages.settings.defaultssettingssection.set_to_0_to_auto_detect_from_cpu_count",
        )}
      >
        <input
          type="number"
          min={0}
          value={backendConfig.instanceDefaults.maxParallelTabs}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              maxParallelTabs: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.timezone")}
        description={t(
          "pages.settings.defaultssettingssection.optional_timezone_override_for_launched",
        )}
      >
        <input
          value={backendConfig.instanceDefaults.timezone}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              timezone: e.target.value,
            })
          }
          placeholder={t("pages.settings.defaultssettingssection.europe_rome")}
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.defaultssettingssection.user_agent")}
        description={t(
          "pages.settings.defaultssettingssection.optional_override_applied_to_new",
        )}
      >
        <input
          value={backendConfig.instanceDefaults.userAgent}
          onChange={(e) =>
            updateBackendSection("instanceDefaults", {
              userAgent: e.target.value,
            })
          }
          placeholder={t(
            "pages.settings.defaultssettingssection.custom_user_agent",
          )}
          className={fieldClass}
        />
      </SettingRow>
      {instanceDefaultsBooleanRows.map(([key, label]) => (
        <SettingRow
          key={key}
          label={t(label)}
          description={t(
            "pages.settings.defaultssettingssection.applies_to_newly_launched_managed",
          )}
        >
          <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
            <input
              type="checkbox"
              checked={backendConfig.instanceDefaults[key]}
              onChange={(e) =>
                updateBackendSection("instanceDefaults", {
                  [key]: e.target.checked,
                } as Partial<BackendConfig["instanceDefaults"]>)
              }
              className="h-4 w-4"
            />
            {t("pages.settings.defaultssettingssection.enable")}
          </label>
        </SettingRow>
      ))}
    </SectionCard>
  );
}
