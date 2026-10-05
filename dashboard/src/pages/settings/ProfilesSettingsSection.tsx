import type { BackendConfig } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { fieldClass } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface ProfilesSettingsSectionProps {
  backendConfig: BackendConfig;
  updateBackendSection: UpdateBackendSection;
}

export function ProfilesSettingsSection({
  backendConfig,
  updateBackendSection,
}: ProfilesSettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.profilessettingssection.profiles")}
      description={t(
        "pages.settings.profilessettingssection.profile_storage_is_host_level_changing",
      )}
    >
      <SettingRow
        label={t(
          "pages.settings.profilessettingssection.profiles_base_directory",
        )}
        description={t(
          "pages.settings.profilessettingssection.root_directory_where_browser_profiles",
        )}
      >
        <input
          value={backendConfig.profiles.baseDir}
          onChange={(e) =>
            updateBackendSection("profiles", {
              baseDir: e.target.value,
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t("pages.settings.profilessettingssection.default_profile")}
        description={t(
          "pages.settings.profilessettingssection.profile_name_used_when_the_server_needs",
        )}
      >
        <input
          value={backendConfig.profiles.defaultProfile}
          onChange={(e) =>
            updateBackendSection("profiles", {
              defaultProfile: e.target.value,
            })
          }
          className={fieldClass}
        />
      </SettingRow>
    </SectionCard>
  );
}
