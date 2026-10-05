import type {
  BackendBrowserProvider,
  BackendCloakBrowserConfig,
  BackendConfig,
} from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { csvToList, fieldClass, listToCsv } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface BrowserSettingsSectionProps {
  backendConfig: BackendConfig;
  updateBackendSection: UpdateBackendSection;
}

export function BrowserSettingsSection({
  backendConfig,
  updateBackendSection,
}: BrowserSettingsSectionProps) {
  const { t } = useTranslation();
  const cloak = backendConfig.browser.cloak;
  const currentProvider: BackendBrowserProvider =
    backendConfig.browsers?.default ?? "chrome";
  const updateCloak = (patch: Partial<BackendCloakBrowserConfig>) =>
    updateBackendSection("browser", {
      cloak: {
        ...cloak,
        ...patch,
      },
    });

  return (
    <SectionCard
      title={t("pages.settings.browsersettingssection.browser_runtime")}
      description={t(
        "pages.settings.browsersettingssection.these_settings_are_written_into_the",
      )}
    >
      <SettingRow
        label={t("pages.settings.browsersettingssection.provider")}
        description={t(
          "pages.settings.browsersettingssection.browser_backend_used_for_new_managed",
        )}
      >
        <select
          value={currentProvider}
          onChange={(e) =>
            updateBackendSection("browsers", {
              default: e.target.value as BackendBrowserProvider,
            })
          }
          className={fieldClass}
        >
          <option value="chrome">
            {t("pages.settings.browsersettingssection.chrome")}
          </option>
          <option value="cloak">
            {t("pages.settings.browsersettingssection.cloakbrowser")}
          </option>
          <option value="ghost-chrome">
            {t("pages.settings.browsersettingssection.ghost_chrome")}
          </option>
        </select>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.browsersettingssection.browser_version")}
        description={t(
          "pages.settings.browsersettingssection.version_string_used_in_generated_ua",
        )}
      >
        <input
          value={backendConfig.browser.version}
          onChange={(e) =>
            updateBackendSection("browser", {
              version: e.target.value,
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.browsersettingssection.browser_binary")}
        description={t(
          "pages.settings.browsersettingssection.optional_path_override_for_the_chrome",
        )}
      >
        <input
          value={backendConfig.browser.binary}
          onChange={(e) =>
            updateBackendSection("browser", {
              binary: e.target.value,
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      {currentProvider === "cloak" && (
        <>
          <SettingRow
            label={t("pages.settings.browsersettingssection.fingerprint_seed")}
            description={t(
              "pages.settings.browsersettingssection.deterministic_cloakbrowser_identity",
            )}
          >
            <input
              value={cloak.fingerprintSeed}
              onChange={(e) => updateCloak({ fingerprintSeed: e.target.value })}
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t(
              "pages.settings.browsersettingssection.fingerprint_platform",
            )}
            description={t(
              "pages.settings.browsersettingssection.native_platform_fingerprint_reported_by",
            )}
          >
            <select
              value={cloak.platform}
              onChange={(e) =>
                updateCloak({
                  platform: e.target
                    .value as BackendCloakBrowserConfig["platform"],
                })
              }
              className={fieldClass}
            >
              <option value="">
                {t("pages.settings.browsersettingssection.auto")}
              </option>
              <option value="windows">
                {t("pages.settings.browsersettingssection.windows")}
              </option>
              <option value="macos">
                {t("pages.settings.browsersettingssection.macos")}
              </option>
              <option value="linux">
                {t("pages.settings.browsersettingssection.linux")}
              </option>
            </select>
          </SettingRow>
          <SettingRow
            label={t("pages.settings.browsersettingssection.cloak_locale")}
            description={t(
              "pages.settings.browsersettingssection.locale_passed_as_fingerprint_locale",
            )}
          >
            <input
              value={cloak.locale}
              onChange={(e) => updateCloak({ locale: e.target.value })}
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t("pages.settings.browsersettingssection.cloak_timezone")}
            description={t(
              "pages.settings.browsersettingssection.timezone_passed_as_fingerprint_timezone",
            )}
          >
            <input
              value={cloak.timezone}
              onChange={(e) => updateCloak({ timezone: e.target.value })}
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t("pages.settings.browsersettingssection.webrtc_ip")}
            description={t(
              "pages.settings.browsersettingssection.explicit_replacement_ip_or_auto_for",
            )}
          >
            <input
              value={cloak.webrtcIP}
              onChange={(e) => updateCloak({ webrtcIP: e.target.value })}
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t("pages.settings.browsersettingssection.fonts_directory")}
            description={t(
              "pages.settings.browsersettingssection.directory_containing_target_platform",
            )}
          >
            <input
              value={cloak.fontsDir}
              onChange={(e) => updateCloak({ fontsDir: e.target.value })}
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t("pages.settings.browsersettingssection.storage_quota")}
            description={t(
              "pages.settings.browsersettingssection.storage_quota_in_mb_passed_as",
            )}
          >
            <input
              type="number"
              min={0}
              value={cloak.storageQuotaMB ?? ""}
              onChange={(e) =>
                updateCloak({
                  storageQuotaMB:
                    e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t(
              "pages.settings.browsersettingssection.native_stealth_only",
            )}
            description={t(
              "pages.settings.browsersettingssection.disable_pinchtab_js_stealth_overlays",
            )}
          >
            <label className="flex items-center gap-2 text-sm text-text-primary">
              <input
                type="checkbox"
                checked={cloak.disableDefaultStealthArgs ?? true}
                onChange={(e) =>
                  updateCloak({
                    disableDefaultStealthArgs: e.target.checked,
                  })
                }
                className="h-4 w-4 accent-primary"
              />
              {t(
                "pages.settings.browsersettingssection.use_cloakbrowser_native_patches",
              )}
            </label>
          </SettingRow>
        </>
      )}
      <SettingRow
        label={t("pages.settings.browsersettingssection.extra_flags")}
        description={t(
          "pages.settings.browsersettingssection.additional_chrome_flags_appended_when",
        )}
      >
        <input
          value={backendConfig.browser.extraFlags}
          onChange={(e) =>
            updateBackendSection("browser", {
              extraFlags: e.target.value,
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.browsersettingssection.extension_paths")}
        description={t(
          "pages.settings.browsersettingssection.comma_separated_extension_directories",
        )}
      >
        <input
          value={listToCsv(backendConfig.browser.extensionPaths)}
          onChange={(e) =>
            updateBackendSection("browser", {
              extensionPaths: csvToList(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
    </SectionCard>
  );
}
