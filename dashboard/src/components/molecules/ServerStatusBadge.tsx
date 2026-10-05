import type { Instance } from "../../generated/types";
import type { DashboardServerInfo } from "../../types";
import { useTranslation } from "react-i18next";

interface Props {
  serverInfo: DashboardServerInfo | null;
  instance?: Instance | null;
  compact?: boolean;
  sidebarCollapsed?: boolean;
  tabCount?: number;
  hasRunningInstance?: boolean;
  onToggleSidebar?: () => void;
}

export default function ServerStatusBadge({
  serverInfo,
  instance,
  compact = false,
  sidebarCollapsed = false,
  tabCount = 0,
  hasRunningInstance = false,
  onToggleSidebar,
}: Props) {
  const { t } = useTranslation();
  const serverRunning = !!serverInfo && serverInfo.status !== "error";

  if (serverRunning && !hasRunningInstance) {
    const title = serverInfo.restartRequired
      ? serverInfo.restartReasons?.join(", ") ||
        t("components.molecules.serverstatusbadge.server_running_no_instances")
      : t("components.molecules.serverstatusbadge.server_running_no_instances");

    return (
      <div className="mr-2 flex items-center px-2 py-1" title={title}>
        <div className="h-1.5 w-1.5 rounded-full bg-warning" />
      </div>
    );
  }

  if (instance) {
    const statusColor =
      instance.status === "running"
        ? "bg-success"
        : instance.status === "error"
          ? "bg-destructive"
          : "bg-text-muted";

    if (compact) {
      return (
        <div
          className="mr-2 flex items-center gap-1.5 px-2 py-1 text-text-muted"
          title={`${instance.profileName} · ${instance.status} · ${instance.port}`}
        >
          <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusColor}`} />
        </div>
      );
    }

    return (
      <button
        type="button"
        onClick={onToggleSidebar}
        className="mr-2 flex items-center gap-1.5 px-2 py-1 text-text-muted transition-colors hover:text-text-primary"
        title={
          sidebarCollapsed
            ? t("components.molecules.serverstatusbadge.expand_instance_list")
            : t("components.molecules.serverstatusbadge.collapse_instance_list")
        }
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`h-3 w-3 shrink-0 transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusColor}`} />
        <span className="hidden text-[10px] font-bold uppercase tracking-wider lg:inline">
          {instance.profileName} ·
        </span>
        <span className="hidden text-[10px] tracking-wider lg:inline">
          {instance.status} · {tabCount}{" "}
          {t("components.molecules.serverstatusbadge.tab")}
          {tabCount !== 1 ? "s" : ""} ·{" "}
        </span>
        <span className="text-[10px] tracking-wider">{instance.port}</span>
      </button>
    );
  }

  if (!serverInfo) return null;

  return (
    <div
      className={`mr-2 flex items-center gap-1.5 rounded-full px-2.5 py-1 ${
        serverInfo.restartRequired
          ? "border border-warning/25 bg-warning/10"
          : "border border-success/20 bg-success/10"
      }`}
      title={
        serverInfo.restartRequired
          ? serverInfo.restartReasons?.join(", ") ||
            t("components.molecules.serverstatusbadge.restart_required")
          : t("components.molecules.serverstatusbadge.server_running")
      }
    >
      <div
        className={`h-1.5 w-1.5 rounded-full ${
          serverInfo.restartRequired ? "bg-warning" : "bg-success animate-pulse"
        }`}
      />
      <span
        className={`text-[10px] font-bold uppercase tracking-wider ${
          serverInfo.restartRequired ? "text-warning" : "text-success"
        }`}
      >
        {serverInfo.restartRequired
          ? t("components.molecules.serverstatusbadge.restart_required_2")
          : t("components.molecules.serverstatusbadge.running")}
      </span>
    </div>
  );
}
