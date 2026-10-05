import { Button, EmptyState } from "../../components/atoms";
import { useTranslation } from "react-i18next";

interface MonitoringEmptyStateProps {
  waitingForExpectedInstance: boolean;
  startupRetriesRemaining: number;
  expectsAutoInstance: boolean;
  launchError: string;
  startingDefaultInstance: boolean;
  onStartDefault: () => void;
  onOpenDefaultProfile: () => void;
}

export default function MonitoringEmptyState({
  waitingForExpectedInstance,
  startupRetriesRemaining,
  expectsAutoInstance,
  launchError,
  startingDefaultInstance,
  onStartDefault,
  onOpenDefaultProfile,
}: MonitoringEmptyStateProps) {
  const { t } = useTranslation();
  if (waitingForExpectedInstance) {
    return (
      <EmptyState
        title={t(
          "pages.monitoring.monitoringemptystate.starting_default_instance",
        )}
        description={t(
          "pages.monitoring.monitoringemptystate.waiting_for_default_profile",
          { count: startupRetriesRemaining },
        )}
        icon="⏳"
      />
    );
  }

  const manualActions = (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        variant="primary"
        onClick={onStartDefault}
        loading={startingDefaultInstance}
      >
        {t("pages.monitoring.monitoringemptystate.start_default_instance")}
      </Button>
      <Button variant="secondary" onClick={onOpenDefaultProfile}>
        {t("pages.monitoring.monitoringemptystate.open_default_profile")}
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4">
      {launchError && (
        <div className="max-w-md rounded border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {launchError}
        </div>
      )}
      <EmptyState
        title={t("pages.monitoring.monitoringemptystate.no_active_instances")}
        description={
          expectsAutoInstance
            ? t(
                "pages.monitoring.monitoringemptystate.pinchtab_expected_a_default_instance",
              )
            : t(
                "pages.monitoring.monitoringemptystate.start_the_default_instance_or_open",
              )
        }
        icon="📡"
        action={manualActions}
      />
    </div>
  );
}
