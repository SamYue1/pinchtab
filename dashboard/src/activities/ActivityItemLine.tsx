import {
  IconCamera,
  IconCompass,
  IconFileText,
  IconHandClick,
  IconKeyboard,
  IconMessageCircle,
  IconPointer,
  IconScreenShare,
} from "../components/atoms/Icon";
import { useState } from "react";
import { resumeTab } from "../services/api";
import { activityStatusVariant } from "./helpers";
import type { ActivityFilters, DashboardActivityEvent } from "./types";
import CopyIdPill from "./CopyIdPill";
import FilterPill from "./FilterPill";
import { useTranslation } from "react-i18next";
import { i18n } from "../i18n";
import { formatTime as formatLocalizedTime } from "../i18n/format";

function formatTime(ts: string): string {
  return formatLocalizedTime(ts, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function EventIcon({ event }: { event: DashboardActivityEvent }) {
  if (event.channel === "progress") return <IconMessageCircle />;
  if (event.action === "click" || event.action === "dblclick")
    return <IconHandClick />;
  if (event.action === "type") return <IconKeyboard />;
  if (event.action === "hover") return <IconPointer />;
  if (event.path.includes("/navigate")) return <IconCompass />;
  if (event.path.includes("/snapshot")) return <IconCamera />;
  if (event.path.includes("/screencast")) return <IconScreenShare />;
  return <IconFileText />;
}

function quoted(value: string): string {
  return `"${value}"`;
}

function eventDescription(event: DashboardActivityEvent): string {
  if (event.channel === "progress" && event.message) {
    return event.message;
  }
  if (event.path.includes("/navigate")) {
    return event.url
      ? i18n.t("activities.activityitemline.navigate_to_url", {
          url: event.url,
        })
      : i18n.t("activities.activityitemline.navigate_to_page");
  }
  if (event.path.includes("/snapshot")) {
    return i18n.t("activities.activityitemline.capture_page_snapshot");
  }
  if (event.path.includes("/screencast")) {
    return i18n.t("activities.activityitemline.open_screencast_stream");
  }
  if (event.path.includes("/text")) {
    return i18n.t("activities.activityitemline.extract_text_from_page");
  }
  if (event.path.includes("/screenshot")) {
    return i18n.t("activities.activityitemline.take_screenshot");
  }
  if (event.path.includes("/pdf")) {
    return i18n.t("activities.activityitemline.export_page_as_pdf");
  }
  switch (event.action) {
    case "click":
      return event.ref
        ? i18n.t("activities.activityitemline.click_ref", { ref: event.ref })
        : i18n.t("activities.activityitemline.click_on_page");
    case "dblclick":
      return event.ref
        ? i18n.t("activities.activityitemline.double_click_ref", {
            ref: event.ref,
          })
        : i18n.t("activities.activityitemline.double_click_on_page");
    case "type":
      return event.ref
        ? i18n.t("activities.activityitemline.type_into_ref", {
            ref: event.ref,
          })
        : i18n.t("activities.activityitemline.type_into_page");
    case "hover":
      return event.ref
        ? i18n.t("activities.activityitemline.hover_ref", { ref: event.ref })
        : i18n.t("activities.activityitemline.hover_on_page");
    case "fill":
      return event.ref
        ? i18n.t("activities.activityitemline.fill_ref", { ref: event.ref })
        : i18n.t("activities.activityitemline.fill_field");
    case "select":
      return event.ref
        ? i18n.t("activities.activityitemline.select_ref", { ref: event.ref })
        : i18n.t("activities.activityitemline.select_option");
    case "scroll":
      return i18n.t("activities.activityitemline.scroll_page");
    case "press":
      return event.ref
        ? i18n.t("activities.activityitemline.press_key_on_ref", {
            ref: event.ref,
          })
        : i18n.t("activities.activityitemline.press_key");
    case "wait":
      return i18n.t("activities.activityitemline.wait_for_condition");
    case "evaluate":
      return i18n.t("activities.activityitemline.evaluate_javascript");
    case "upload":
      return i18n.t("activities.activityitemline.upload_file");
    case "download":
      return i18n.t("activities.activityitemline.download_file");
    default:
      if (event.action) {
        return `${event.action} ${event.ref ? quoted(event.ref) : ""}`.trim();
      }
      return `${event.method} ${event.path}`;
  }
}

const statusColor: Record<string, string> = {
  success: "text-success",
  warning: "text-warning",
  danger: "text-destructive",
  default: "text-text-muted",
};

interface Props {
  event: DashboardActivityEvent;
  showTab?: boolean;
  copyTabId?: boolean;
  sessionLabel?: string;
  inHandoff?: boolean;
  onFilterChange?: (key: keyof ActivityFilters, value: string) => void;
}

export default function ActivityItemLine({
  event,
  showTab = true,
  copyTabId = false,
  sessionLabel,
  inHandoff = false,
  onFilterChange,
}: Props) {
  const { t } = useTranslation();
  const variant = activityStatusVariant(event.status);
  const [resuming, setResuming] = useState(false);
  const [resumeError, setResumeError] = useState("");

  const showResumeButton = inHandoff && Boolean(event.tabId);
  const handleResume = async () => {
    if (!event.tabId || resuming) return;
    setResuming(true);
    setResumeError("");
    try {
      await resumeTab(event.tabId);
    } catch (err) {
      setResumeError(
        err instanceof Error
          ? err.message
          : t("activities.activityitemline.resume_failed"),
      );
      setResuming(false);
    }
  };

  return (
    <div className="flex items-center gap-2.5 px-4 py-2 text-sm transition-colors hover:bg-white/2">
      <span className="shrink-0 text-text-muted">
        <EventIcon event={event} />
      </span>

      <span className="dashboard-mono w-16 shrink-0 text-[0.68rem] text-text-muted">
        {formatTime(event.timestamp)}
      </span>

      {inHandoff && (
        <span
          aria-label={t(
            "activities.activityitemline.tab_paused_for_human_handoff",
          )}
          title={t(
            "activities.activityitemline.tab_is_paused_for_human_handoff",
          )}
          className="inline-block h-2 w-2 shrink-0 rounded-full bg-red-500 ring-2 ring-bg-surface"
        />
      )}

      <span className="min-w-0 flex-1 truncate text-text-primary">
        {eventDescription(event)}
      </span>

      {showResumeButton && (
        <button
          type="button"
          onClick={handleResume}
          disabled={resuming}
          title={
            resumeError ||
            t("activities.activityitemline.resume_automation_after_manual")
          }
          className="shrink-0 rounded-sm border border-warning/40 bg-warning/10 px-2 py-0.5 text-[0.68rem] text-warning transition-colors hover:bg-warning/20 disabled:opacity-50"
        >
          {resuming
            ? t("activities.activityitemline.resuming")
            : t("activities.activityitemline.resolve_challenge")}
        </button>
      )}

      {sessionLabel && (
        <span className="truncate rounded-sm border border-border-subtle bg-white/3 px-1.5 py-0.5 text-[0.68rem] text-text-muted">
          {sessionLabel}
        </span>
      )}

      {event.route && (
        <span className="flex shrink-0 items-center gap-1">
          <span className="rounded-sm bg-white/6 px-1.5 py-0.5 text-[0.68rem] text-text-muted">
            {event.route.usedProvider}
          </span>
          {event.route.escalated && (
            <span
              className="rounded-sm bg-warning/10 px-1.5 py-0.5 text-[0.68rem] text-warning"
              title={
                event.route.reason ||
                t("activities.activityitemline.browser_was_escalated")
              }
            >
              {"↑"} {t("activities.activityitemline.escalated")}
              {event.route.reason ? `: ${event.route.reason}` : ""}
            </span>
          )}
        </span>
      )}

      {showTab &&
        event.tabId &&
        onFilterChange &&
        (copyTabId ? (
          <CopyIdPill id={event.tabId} compact />
        ) : (
          <FilterPill
            label={`tab:${event.tabId}`}
            onClick={() => onFilterChange("tabId", event.tabId || "")}
          />
        ))}

      <span
        className={`dashboard-mono shrink-0 text-[0.68rem] ${statusColor[variant] || "text-text-muted"}`}
      >
        {event.status}
      </span>
    </div>
  );
}
