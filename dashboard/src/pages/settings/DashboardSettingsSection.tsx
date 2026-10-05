import type { Dispatch, SetStateAction } from "react";
import { Select } from "../../components/atoms";
import type { LocalDashboardSettings } from "../../types";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";
import type { Locale } from "../../i18n/locales";
import { localeOptions, useLocale } from "../../i18n/useLocale";

interface DashboardSettingsSectionProps {
  localSettings: LocalDashboardSettings;
  setLocalSettings: Dispatch<SetStateAction<LocalDashboardSettings>>;
}

export function DashboardSettingsSection({
  localSettings,
  setLocalSettings,
}: DashboardSettingsSectionProps) {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  return (
    <SectionCard
      title={t("pages.settings.dashboardsettingssection.dashboard_preferences")}
      description={t(
        "pages.settings.dashboardsettingssection.these_controls_affect_this_dashboard_ui",
      )}
    >
      <SettingRow
        label={t("pages.settings.dashboardsettingssection.language")}
        description={t(
          "pages.settings.dashboardsettingssection.choose_the_language_of_the_dashboard",
        )}
      >
        <Select
          aria-label={t("pages.settings.dashboardsettingssection.language")}
          value={locale}
          onChange={(e) => setLocale(e.target.value as Locale)}
        >
          {localeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.dashboardsettingssection.screencast_frame_rate",
        )}
        description={t(
          "pages.settings.dashboardsettingssection.controls_how_often_live_previews",
        )}
      >
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={1}
            max={15}
            value={localSettings.screencast.fps}
            onChange={(e) =>
              setLocalSettings((current) => ({
                ...current,
                screencast: {
                  ...current.screencast,
                  fps: Number(e.target.value),
                },
              }))
            }
            className="w-full"
          />
          <span className="dashboard-mono w-16 text-right text-sm text-text-secondary">
            {localSettings.screencast.fps}{" "}
            {t("pages.settings.dashboardsettingssection.fps")}
          </span>
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.dashboardsettingssection.screencast_quality")}
        description={t(
          "pages.settings.dashboardsettingssection.jpeg_quality_for_tab_preview_streams",
        )}
      >
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={10}
            max={80}
            value={localSettings.screencast.quality}
            onChange={(e) =>
              setLocalSettings((current) => ({
                ...current,
                screencast: {
                  ...current.screencast,
                  quality: Number(e.target.value),
                },
              }))
            }
            className="w-full"
          />
          <span className="dashboard-mono w-16 text-right text-sm text-text-secondary">
            {localSettings.screencast.quality}%
          </span>
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.dashboardsettingssection.screencast_width")}
        description={t(
          "pages.settings.dashboardsettingssection.maximum_preview_width_for_live_tiles",
        )}
      >
        <Select
          value={localSettings.screencast.maxWidth}
          onChange={(e) =>
            setLocalSettings((current) => ({
              ...current,
              screencast: {
                ...current.screencast,
                maxWidth: Number(e.target.value),
              },
            }))
          }
        >
          {[400, 600, 800, 1024, 1280].map((width) => (
            <option key={width} value={width}>
              {width}
              {t("pages.settings.dashboardsettingssection.px")}
            </option>
          ))}
        </Select>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.dashboardsettingssection.memory_metrics")}
        description={t(
          "pages.settings.dashboardsettingssection.poll_every_running_instance_for_browser",
        )}
      >
        <label className="flex items-center justify-end gap-3 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={localSettings.monitoring.memoryMetrics}
            onChange={(e) =>
              setLocalSettings((current) => ({
                ...current,
                monitoring: {
                  ...current.monitoring,
                  memoryMetrics: e.target.checked,
                },
              }))
            }
            className="h-4 w-4"
          />
          {t("pages.settings.dashboardsettingssection.enable")}
        </label>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.dashboardsettingssection.polling_interval")}
        description={t(
          "pages.settings.dashboardsettingssection.how_frequently_the_dashboard_asks_the",
        )}
      >
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={5}
            max={120}
            step={5}
            value={localSettings.monitoring.pollInterval}
            onChange={(e) =>
              setLocalSettings((current) => ({
                ...current,
                monitoring: {
                  ...current.monitoring,
                  pollInterval: Number(e.target.value),
                },
              }))
            }
            className="w-full"
          />
          <span className="dashboard-mono w-16 text-right text-sm text-text-secondary">
            {localSettings.monitoring.pollInterval}
            {t("pages.settings.dashboardsettingssection.s")}
          </span>
        </div>
      </SettingRow>
      <SettingRow
        label={t("pages.settings.dashboardsettingssection.reasoning_output")}
        description={t(
          "pages.settings.dashboardsettingssection.choose_whether_the_live_agent_feed",
        )}
      >
        <Select
          value={localSettings.agents.reasoningMode}
          onChange={(e) =>
            setLocalSettings((current) => ({
              ...current,
              agents: {
                ...current.agents,
                reasoningMode: e.target.value as
                  | "tool_calls"
                  | "progress"
                  | "both",
              },
            }))
          }
        >
          <option value="tool_calls">
            {t("pages.settings.dashboardsettingssection.tool_calls_only")}
          </option>
          <option value="progress">
            {t("pages.settings.dashboardsettingssection.progress_only")}
          </option>
          <option value="both">
            {t("pages.settings.dashboardsettingssection.both")}
          </option>
        </Select>
      </SettingRow>
    </SectionCard>
  );
}
