import { Select } from "../../components/atoms";
import type { BackendConfig } from "../../types";
import type { UpdateBackendSection } from "./settingsShared";
import { fieldClass } from "./settingsShared";
import { SectionCard, SettingRow } from "./SettingsSharedComponents";
import { useTranslation } from "react-i18next";

interface OrchestrationSettingsSectionProps {
  backendConfig: BackendConfig;
  updateBackendSection: UpdateBackendSection;
}

export function OrchestrationSettingsSection({
  backendConfig,
  updateBackendSection,
}: OrchestrationSettingsSectionProps) {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t("pages.settings.orchestrationsettingssection.orchestration")}
      description={t(
        "pages.settings.orchestrationsettingssection.port_range_and_allocation_policy_can_be",
      )}
    >
      <SettingRow
        label={t("pages.settings.orchestrationsettingssection.strategy")}
        description={t(
          "pages.settings.orchestrationsettingssection.controls_instance_lifecycle_and_how",
        )}
      >
        <Select
          value={backendConfig.multiInstance.strategy}
          onChange={(e) =>
            updateBackendSection("multiInstance", {
              strategy: e.target
                .value as BackendConfig["multiInstance"]["strategy"],
            })
          }
        >
          <option value="always-on">
            {t("pages.settings.orchestrationsettingssection.always_on")}
          </option>
          <option value="simple">
            {t("pages.settings.orchestrationsettingssection.simple")}
          </option>
          <option value="explicit">
            {t("pages.settings.orchestrationsettingssection.explicit")}
          </option>
          <option value="simple-autorestart">
            {t(
              "pages.settings.orchestrationsettingssection.simple_autorestart",
            )}
          </option>
          <option value="no-instance">
            {t("pages.settings.orchestrationsettingssection.no_instance_hub")}
          </option>
        </Select>
        <div className="mt-2 text-[11px] leading-relaxed text-text-muted">
          {backendConfig.multiInstance.strategy === "always-on" &&
            t(
              "pages.settings.orchestrationsettingssection.launches_a_default_instance_at_boot_and",
            )}
          {backendConfig.multiInstance.strategy === "simple" &&
            t(
              "pages.settings.orchestrationsettingssection.launches_one_instance_on_first_request",
            )}
          {backendConfig.multiInstance.strategy === "explicit" &&
            t(
              "pages.settings.orchestrationsettingssection.all_instances_managed_via_api_no",
            )}
          {backendConfig.multiInstance.strategy === "simple-autorestart" &&
            t(
              "pages.settings.orchestrationsettingssection.launches_on_first_request_and",
            )}
          {backendConfig.multiInstance.strategy === "no-instance" &&
            t(
              "pages.settings.orchestrationsettingssection.no_local_chrome_processes_acts_as_a_hub",
            )}
        </div>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.orchestrationsettingssection.allocation_policy",
        )}
        description={t(
          "pages.settings.orchestrationsettingssection.determines_how_running_instances_are",
        )}
      >
        <Select
          value={backendConfig.multiInstance.allocationPolicy}
          onChange={(e) =>
            updateBackendSection("multiInstance", {
              allocationPolicy: e.target
                .value as BackendConfig["multiInstance"]["allocationPolicy"],
            })
          }
        >
          <option value="fcfs">
            {t("pages.settings.orchestrationsettingssection.first_available")}
          </option>
          <option value="round_robin">
            {t("pages.settings.orchestrationsettingssection.round_robin")}
          </option>
          <option value="random">
            {t("pages.settings.orchestrationsettingssection.random")}
          </option>
        </Select>
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.orchestrationsettingssection.instance_port_start",
        )}
        description={t(
          "pages.settings.orchestrationsettingssection.lower_bound_for_auto_allocated_instance",
        )}
      >
        <input
          type="number"
          min={1}
          value={backendConfig.multiInstance.instancePortStart}
          onChange={(e) =>
            updateBackendSection("multiInstance", {
              instancePortStart: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      <SettingRow
        label={t(
          "pages.settings.orchestrationsettingssection.instance_port_end",
        )}
        description={t(
          "pages.settings.orchestrationsettingssection.upper_bound_for_auto_allocated_instance",
        )}
      >
        <input
          type="number"
          min={1}
          value={backendConfig.multiInstance.instancePortEnd}
          onChange={(e) =>
            updateBackendSection("multiInstance", {
              instancePortEnd: Number(e.target.value),
            })
          }
          className={fieldClass}
        />
      </SettingRow>
      {(backendConfig.multiInstance.strategy === "always-on" ||
        backendConfig.multiInstance.strategy === "simple-autorestart") && (
        <>
          <SettingRow
            label={t(
              "pages.settings.orchestrationsettingssection.max_restarts",
            )}
            description={t(
              "pages.settings.orchestrationsettingssection.maximum_restart_attempts_use_1_for",
            )}
          >
            <input
              type="number"
              min={-1}
              value={backendConfig.multiInstance.restart.maxRestarts}
              onChange={(e) =>
                updateBackendSection("multiInstance", {
                  restart: {
                    ...backendConfig.multiInstance.restart,
                    maxRestarts: Number(e.target.value),
                  },
                })
              }
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t(
              "pages.settings.orchestrationsettingssection.initial_backoff",
            )}
            description={t(
              "pages.settings.orchestrationsettingssection.delay_in_seconds_before_the_first",
            )}
          >
            <input
              type="number"
              min={1}
              value={backendConfig.multiInstance.restart.initBackoffSec}
              onChange={(e) =>
                updateBackendSection("multiInstance", {
                  restart: {
                    ...backendConfig.multiInstance.restart,
                    initBackoffSec: Number(e.target.value),
                  },
                })
              }
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t("pages.settings.orchestrationsettingssection.max_backoff")}
            description={t(
              "pages.settings.orchestrationsettingssection.upper_bound_in_seconds_for_exponential",
            )}
          >
            <input
              type="number"
              min={1}
              value={backendConfig.multiInstance.restart.maxBackoffSec}
              onChange={(e) =>
                updateBackendSection("multiInstance", {
                  restart: {
                    ...backendConfig.multiInstance.restart,
                    maxBackoffSec: Number(e.target.value),
                  },
                })
              }
              className={fieldClass}
            />
          </SettingRow>
          <SettingRow
            label={t(
              "pages.settings.orchestrationsettingssection.stable_after",
            )}
            description={t(
              "pages.settings.orchestrationsettingssection.seconds_the_instance_must_stay_healthy",
            )}
          >
            <input
              type="number"
              min={1}
              value={backendConfig.multiInstance.restart.stableAfterSec}
              onChange={(e) =>
                updateBackendSection("multiInstance", {
                  restart: {
                    ...backendConfig.multiInstance.restart,
                    stableAfterSec: Number(e.target.value),
                  },
                })
              }
              className={fieldClass}
            />
          </SettingRow>
        </>
      )}
    </SectionCard>
  );
}
