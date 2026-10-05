import type {
  Instance,
  InstanceMetrics,
  InstanceTab,
} from "../../generated/types";
import { useTranslation } from "react-i18next";
import { i18n } from "../../i18n";
import { formatClock, formatNumber } from "../../i18n/format";

interface Props {
  instance?: Instance | null;
  metrics?: InstanceMetrics | null;
  tabs: InstanceTab[];
}

function StatItem({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
        {label}
      </span>
      <span className="text-sm font-semibold text-text-primary">{value}</span>
      {sub && <span className="text-[10px] text-text-muted">{sub}</span>}
    </div>
  );
}

function StatGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-text-muted/70">
        {title}
      </span>
      <div className="flex gap-6">{children}</div>
    </div>
  );
}

function fmt(n: number, decimals = 0): string {
  if (!Number.isFinite(n)) return "0";
  return formatNumber(n, { maximumFractionDigits: decimals });
}

function formatUptime(startTime: string): string {
  const ms = Date.now() - new Date(startTime).getTime();
  if (ms < 0) return i18n.t("components.molecules.instancestats.just_now");
  const secs = Math.floor(ms / 1000);
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  const remainMins = mins % 60;
  if (hrs < 24) return `${hrs}h ${remainMins}m`;
  const days = Math.floor(hrs / 24);
  return `${days}d ${hrs % 24}h`;
}

function formatCrashTime(time: string): string {
  const at = new Date(time);
  if (Number.isNaN(at.getTime())) return time;
  return formatClock(at, { hour: "2-digit", minute: "2-digit" });
}

function countUniqueDomains(tabs: InstanceTab[]): number {
  const domains = new Set<string>();
  for (const tab of tabs) {
    try {
      domains.add(new URL(tab.url).hostname);
    } catch {
      // skip invalid URLs
    }
  }
  return domains.size;
}

export default function InstanceStats({ instance, metrics, tabs }: Props) {
  const { t } = useTranslation();
  const uniqueDomains = countUniqueDomains(tabs);

  return (
    <div className="grid grid-cols-2 gap-y-4 border-t border-border-subtle px-4 py-4">
      <StatGroup title={t("components.molecules.instancestats.instance")}>
        {instance && (
          <>
            <StatItem
              label={t("components.molecules.instancestats.status")}
              value={instance.status}
            />
            <StatItem
              label={t("components.molecules.instancestats.uptime")}
              value={formatUptime(instance.startTime)}
            />
            <StatItem
              label={t("components.molecules.instancestats.port")}
              value={instance.port}
            />
            {instance.crashes && instance.crashes.total > 0 && (
              <StatItem
                label={t("components.molecules.instancestats.crashes")}
                value={fmt(instance.crashes.total)}
                sub={
                  instance.crashes.recent.length > 0
                    ? t("components.molecules.instancestats.last_crash", {
                        reason:
                          instance.crashes.recent[
                            instance.crashes.recent.length - 1
                          ].reason,
                        time: formatCrashTime(
                          instance.crashes.recent[
                            instance.crashes.recent.length - 1
                          ].time,
                        ),
                      })
                    : t(
                        "components.molecules.instancestats.tabs_open_before_it_were_lost",
                      )
                }
              />
            )}
          </>
        )}
      </StatGroup>

      <StatGroup title={t("components.molecules.instancestats.browsing")}>
        <StatItem
          label={t("components.molecules.instancestats.tabs")}
          value={fmt(tabs.length)}
        />
        <StatItem
          label={t("components.molecules.instancestats.domains")}
          value={fmt(uniqueDomains)}
        />
      </StatGroup>

      {metrics && (
        <StatGroup title={t("components.molecules.instancestats.resources")}>
          <StatItem
            label={t("components.molecules.instancestats.memory")}
            value={`${fmt(metrics.memoryMB, 1)} MB`}
            sub={t(
              "components.molecules.instancestats.rss_across_the_browser_process_tree",
            )}
          />
          <StatItem
            label={t("components.molecules.instancestats.renderers")}
            value={fmt(metrics.renderers)}
          />
        </StatGroup>
      )}

      {metrics && (metrics.page || metrics.unreadableTargets > 0) && (
        <StatGroup title={t("components.molecules.instancestats.pages")}>
          {metrics.page && (
            <>
              <StatItem
                label={t("components.molecules.instancestats.js_heap")}
                value={`${fmt(metrics.page.jsHeapUsedMB, 1)} / ${fmt(metrics.page.jsHeapTotalMB, 1)} MB`}
                sub={t("components.molecules.instancestats.heap_summary", {
                  count: metrics.page.targets,
                })}
              />
              <StatItem
                label={t("components.molecules.instancestats.dom_nodes")}
                value={fmt(metrics.page.nodes)}
              />
              <StatItem
                label={t("components.molecules.instancestats.listeners")}
                value={fmt(metrics.page.jsEventListeners)}
              />
              <StatItem
                label={t("components.molecules.instancestats.frames")}
                value={fmt(metrics.page.frames)}
                sub={t("components.molecules.instancestats.document_count", {
                  count: metrics.page.documents,
                })}
              />
            </>
          )}
          {metrics.unreadableTargets > 0 && (
            <StatItem
              label={t("components.molecules.instancestats.unreadable")}
              value={fmt(metrics.unreadableTargets)}
              sub={t(
                "components.molecules.instancestats.tabs_that_did_not_answer_not_counted",
              )}
            />
          )}
        </StatGroup>
      )}
    </div>
  );
}
