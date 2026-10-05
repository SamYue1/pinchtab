import type { BackendConfig } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import {
  csvToList,
  fieldClass,
  idpiToggleRows,
  listToCsv,
} from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface SecurityIdpiSettingsSectionProps {
  backendConfig: BackendConfig;
  idpiEnabled: boolean;
  idpiDomainsConfigured: boolean;
  idpiWildcard: boolean;
  updateBackendSection: UpdateBackendSection;
}

export function SecurityIdpiSettingsSection({
  backendConfig,
  idpiEnabled,
  idpiDomainsConfigured,
  idpiWildcard,
  updateBackendSection,
}: SecurityIdpiSettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.securityidpisettingssection.security_idpi")}
      description={t(
        "pages.settings.securityidpisettingssection.indirect_prompt_injection_controls",
      )}
    >
      <div
        className={`mb-4 rounded-sm px-4 py-3 text-sm leading-6 ${
          !idpiEnabled || !idpiDomainsConfigured
            ? "border border-destructive/35 bg-destructive/10 text-destructive"
            : idpiWildcard
              ? "border border-warning/25 bg-warning/10 text-warning"
              : "border border-success/25 bg-success/10 text-success"
        }`}
      >
        {!idpiEnabled
          ? t(
              "pages.settings.securityidpisettingssection.idpi_is_disabled_browser_content_is_not",
            )
          : !idpiDomainsConfigured
            ? t(
                "pages.settings.securityidpisettingssection.the_website_whitelist_is_not_set_to_a",
              )
            : idpiWildcard
              ? t(
                  "pages.settings.securityidpisettingssection.the_website_whitelist_contains_which",
                )
              : t(
                  "pages.settings.securityidpisettingssection.idpi_is_enforcing_a_specific_website",
                )}
      </div>
      {idpiToggleRows.map(([key, label, description]) => (
        <SettingRow key={key} label={t(label)} description={t(description)}>
          <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
            <input
              type="checkbox"
              checked={backendConfig.security.idpi[key]}
              onChange={(e) =>
                updateBackendSection("security", {
                  idpi: {
                    ...backendConfig.security.idpi,
                    [key]: e.target.checked,
                  },
                })
              }
              className="h-4 w-4"
            />
            {t("pages.settings.securityidpisettingssection.enable")}
          </label>
        </SettingRow>
      ))}
      <SettingRow
        label={t("pages.settings.securityidpisettingssection.custom_patterns")}
        description={t(
          "pages.settings.securityidpisettingssection.optional_comma_separated_phrases_to",
        )}
      >
        <input
          value={listToCsv(backendConfig.security.idpi.customPatterns)}
          onChange={(e) =>
            updateBackendSection("security", {
              idpi: {
                ...backendConfig.security.idpi,
                customPatterns: csvToList(e.target.value),
              },
            })
          }
          className={fieldClass}
          placeholder={t(
            "pages.settings.securityidpisettingssection.ignore_previous_instructions_exfiltrate",
          )}
        />
      </SettingRow>
    </SectionCard>
  );
}
