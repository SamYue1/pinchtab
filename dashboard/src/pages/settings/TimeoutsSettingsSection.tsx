import type { BackendConfig } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { fieldClass, timeoutRows } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface TimeoutsSettingsSectionProps {
  backendConfig: BackendConfig;
  updateBackendSection: UpdateBackendSection;
}

export function TimeoutsSettingsSection({
  backendConfig,
  updateBackendSection,
}: TimeoutsSettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.timeoutssettingssection.timeouts")}
      description={t(
        "pages.settings.timeoutssettingssection.runtime_timing_defaults_written_into",
      )}
    >
      {timeoutRows.map(([key, label, description]) => (
        <SettingRow key={key} label={t(label)} description={t(description)}>
          <input
            type="number"
            min={0}
            value={backendConfig.timeouts[key]}
            onChange={(e) =>
              updateBackendSection("timeouts", {
                [key]: Number(e.target.value),
              } as Partial<BackendConfig["timeouts"]>)
            }
            className={fieldClass}
          />
        </SettingRow>
      ))}
    </SectionCard>
  );
}
