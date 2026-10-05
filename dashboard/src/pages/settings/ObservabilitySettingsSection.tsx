import type { BackendConfig } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { fieldClass } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface ObservabilitySettingsSectionProps {
  backendConfig: BackendConfig;
  updateBackendSection: UpdateBackendSection;
}

export function ObservabilitySettingsSection({
  backendConfig,
  updateBackendSection,
}: ObservabilitySettingsSectionProps) {
  const { t } = useTranslation();
  const activity = backendConfig.observability.activity;

  const updateActivity = (
    patch: Partial<BackendConfig["observability"]["activity"]>,
  ) => {
    updateBackendSection("observability", {
      activity: { ...activity, ...patch },
    });
  };

  return (
    <SectionCard
      title={t("pages.settings.observabilitysettingssection.observability")}
      description={t(
        "pages.settings.observabilitysettingssection.activity_logging_tracks_api_requests",
      )}
    >
      <SettingRow
        label={t(
          "pages.settings.observabilitysettingssection.activity_logging",
        )}
        description={t(
          "pages.settings.observabilitysettingssection.enable_or_disable_activity_event",
        )}
      >
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={activity.enabled}
            onChange={(e) => updateActivity({ enabled: e.target.checked })}
            className="h-4 w-4 rounded border-border-subtle bg-bg-elevated text-primary focus:ring-primary/50"
          />
          <span className="text-sm text-text-secondary">
            {activity.enabled
              ? t("pages.settings.observabilitysettingssection.enabled")
              : t("pages.settings.observabilitysettingssection.disabled")}
          </span>
        </label>
      </SettingRow>

      <SettingRow
        label={t("pages.settings.observabilitysettingssection.retention_days")}
        description={t(
          "pages.settings.observabilitysettingssection.how_long_to_keep_activity_logs_before",
        )}
      >
        <input
          type="number"
          min={1}
          max={365}
          value={activity.retentionDays}
          onChange={(e) =>
            updateActivity({ retentionDays: Number(e.target.value) })
          }
          className={fieldClass}
        />
      </SettingRow>

      <SettingRow
        label={t(
          "pages.settings.observabilitysettingssection.session_idle_timeout_seconds",
        )}
        description={t(
          "pages.settings.observabilitysettingssection.time_before_an_inactive_agent_session",
        )}
      >
        <input
          type="number"
          min={60}
          value={activity.sessionIdleSec}
          onChange={(e) =>
            updateActivity({ sessionIdleSec: Number(e.target.value) })
          }
          className={fieldClass}
        />
      </SettingRow>
    </SectionCard>
  );
}
