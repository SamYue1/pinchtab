import type { BackendConfig, BackendSecurityConfig } from "../../types";
import type {
  SecurityEndpointKey,
  UpdateBackendSection,
} from "./settingsShared";
import {
  csvToList,
  fieldClass,
  listToCsv,
  securityEndpointRows,
} from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface SecuritySettingsSectionProps {
  backendConfig: BackendConfig;
  sensitiveEndpointsEnabled: boolean;
  updateBackendSection: UpdateBackendSection;
}

export function SecuritySettingsSection({
  backendConfig,
  sensitiveEndpointsEnabled,
  updateBackendSection,
}: SecuritySettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.securitysettingssection.security")}
      description={t(
        "pages.settings.securitysettingssection.these_controls_define_what_risky",
      )}
    >
      <div
        className={`rounded-sm px-4 py-3 text-sm leading-6 ${
          sensitiveEndpointsEnabled
            ? "border border-destructive/35 bg-destructive/10 text-destructive"
            : "border border-warning/25 bg-warning/10 text-warning"
        }`}
      >
        {sensitiveEndpointsEnabled
          ? t(
              "pages.settings.securitysettingssection.one_or_more_sensitive_endpoint_families",
            )
          : t(
              "pages.settings.securitysettingssection.these_endpoint_families_can_expose_high",
            )}
      </div>
      {securityEndpointRows.map((row) => {
        const [key, label] = row;
        const description: string =
          row.length > 2 && typeof row[2] === "string"
            ? t(row[2])
            : t(
                "pages.settings.securitysettingssection.controls_whether_the_corresponding",
              );
        return (
          <SettingRow key={key} label={t(label)} description={description}>
            <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
              <input
                type="checkbox"
                checked={backendConfig.security[key]}
                onChange={(e) =>
                  updateBackendSection("security", {
                    [key]: e.target.checked,
                  } as Partial<
                    Pick<BackendSecurityConfig, SecurityEndpointKey>
                  >)
                }
                className="h-4 w-4"
              />
              {t("pages.settings.securitysettingssection.enable")}
            </label>
          </SettingRow>
        );
      })}
      <SettingRow
        label={t("pages.settings.securitysettingssection.allowed_websites")}
        description={t(
          "pages.settings.securitysettingssection.comma_separated_domain_allowlist_for",
        )}
      >
        <div className="space-y-2">
          <input
            value={listToCsv(backendConfig.security.allowedDomains)}
            onChange={(e) =>
              updateBackendSection("security", {
                allowedDomains: csvToList(e.target.value),
              })
            }
            className={fieldClass}
            placeholder={t(
              "pages.settings.securitysettingssection.127_0_0_1_localhost_1",
            )}
          />
          <div className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
            {t(
              "pages.settings.securitysettingssection.keep_this_list_narrow_empty_or_wildcard",
            )}
          </div>
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.securitysettingssection.trusted_proxy_cidrs")}
        description={t(
          "pages.settings.securitysettingssection.comma_separated_cidrs_or_ips_whose",
        )}
      >
        <div className="space-y-2">
          <input
            value={listToCsv(backendConfig.security.trustedProxyCIDRs)}
            onChange={(e) =>
              updateBackendSection("security", {
                trustedProxyCIDRs: csvToList(e.target.value),
              } as Partial<Pick<BackendSecurityConfig, "trustedProxyCIDRs">>)
            }
            className={fieldClass}
            placeholder={t(
              "pages.settings.securitysettingssection.10_1_2_3_10_0_0_0_8",
            )}
          />
          <div className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
            {t(
              "pages.settings.securitysettingssection.this_weakens_navigation_ip_checks_for",
            )}
          </div>
        </div>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.securitysettingssection.trusted_resolve_cidrs",
        )}
        description={t(
          "pages.settings.securitysettingssection.comma_separated_cidrs_or_ips_that_a",
        )}
      >
        <div className="space-y-2">
          <input
            value={listToCsv(backendConfig.security.trustedResolveCIDRs)}
            onChange={(e) =>
              updateBackendSection("security", {
                trustedResolveCIDRs: csvToList(e.target.value),
              } as Partial<Pick<BackendSecurityConfig, "trustedResolveCIDRs">>)
            }
            className={fieldClass}
            placeholder={t(
              "pages.settings.securitysettingssection.198_18_0_0_15_10_1_2_3",
            )}
          />
          <div className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-xs leading-5 text-warning">
            {t(
              "pages.settings.securitysettingssection.this_allows_hostnames_to_resolve_to_non",
            )}
          </div>
        </div>
      </SettingRow>
    </SectionCard>
  );
}
