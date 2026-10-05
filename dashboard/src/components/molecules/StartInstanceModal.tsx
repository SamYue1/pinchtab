import { useEffect, useMemo, useState } from "react";
import { Button, Input, Modal } from "../atoms";
import { useAppStore } from "../../stores/useAppStore";
import * as api from "../../services/api";
import type { LaunchInstanceRequest, Profile } from "../../generated/types";
import { useTranslation } from "react-i18next";
import { i18n } from "../../i18n";

interface Props {
  open: boolean;
  profile: Profile | null;
  onClose: () => void;
}

function normalizeLaunchPort(rawPort: string): {
  port?: string;
  error?: string;
} {
  const trimmed = rawPort.trim();
  if (!trimmed) {
    return {};
  }

  if (!/^\d+$/.test(trimmed)) {
    return {
      error: i18n.t(
        "components.molecules.startinstancemodal.port_must_be_a_whole_number_between_1",
      ),
    };
  }

  const numericPort = Number(trimmed);
  if (numericPort < 1 || numericPort > 65535) {
    return {
      error: i18n.t(
        "components.molecules.startinstancemodal.port_must_be_a_whole_number_between_1",
      ),
    };
  }

  return { port: String(numericPort) };
}

export default function StartInstanceModal({ open, profile, onClose }: Props) {
  const { t } = useTranslation();
  const { setInstances } = useAppStore();
  const [port, setPort] = useState("");
  const [headless, setHeadless] = useState(false);
  const [browser, setBrowser] = useState<string>("");
  const [launchError, setLaunchError] = useState("");
  const [launchLoading, setLaunchLoading] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");
  const { port: normalizedPort, error: portError } = useMemo(
    () => normalizeLaunchPort(port),
    [port],
  );

  useEffect(() => {
    if (open) {
      setLaunchError("");
      setCopyFeedback("");
      return;
    }

    setPort("");
    setHeadless(false);
    setBrowser("");
    setLaunchError("");
    setLaunchLoading(false);
    setCopyFeedback("");
  }, [open, profile?.id, profile?.name]);

  const launchCommand = useMemo(() => {
    if (!profile?.id) return "";

    const payload: LaunchInstanceRequest = {
      profileId: profile.id,
      mode: headless ? undefined : "headed",
      port: normalizedPort,
      browser: browser || undefined,
    };

    return `curl -X POST http://localhost:9867/instances/start -H "Content-Type: application/json" -H "Authorization: Bearer <token>" -d '${JSON.stringify(payload)}'`;
  }, [browser, headless, normalizedPort, profile]);

  const handleLaunch = async () => {
    if (!profile || launchLoading) return;
    if (!profile.id) {
      setLaunchError(
        t("components.molecules.startinstancemodal.profile_id_missing"),
      );
      return;
    }
    if (portError) {
      setLaunchError(portError);
      return;
    }

    setLaunchError("");
    setLaunchLoading(true);

    try {
      const payload: LaunchInstanceRequest = {
        profileId: profile.id,
        port: normalizedPort,
        mode: headless ? undefined : "headed",
        browser: browser || undefined,
      };

      await api.launchInstance(payload);
      const updated = await api.fetchInstances();
      setInstances(updated);
      onClose();
    } catch (e) {
      console.error("Launch failed:", e);
      const msg =
        e instanceof Error
          ? e.message
          : t(
              "components.molecules.startinstancemodal.failed_to_launch_instance",
            );
      setLaunchError(msg);
    } finally {
      setLaunchLoading(false);
    }
  };

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(launchCommand);
      setCopyFeedback(t("components.molecules.startinstancemodal.copied"));
      setTimeout(() => setCopyFeedback(""), 2000);
    } catch {
      setCopyFeedback(
        t("components.molecules.startinstancemodal.failed_to_copy"),
      );
      setTimeout(() => setCopyFeedback(""), 2000);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        if (!launchLoading) {
          onClose();
        }
      }}
      title={t("components.molecules.startinstancemodal.start_profile")}
      actions={
        <>
          <Button
            variant="secondary"
            disabled={launchLoading}
            onClick={onClose}
          >
            {t("components.molecules.startinstancemodal.cancel")}
          </Button>
          <Button
            variant="primary"
            onClick={handleLaunch}
            loading={launchLoading}
            disabled={Boolean(portError)}
          >
            {t("components.molecules.startinstancemodal.start")}
          </Button>
        </>
      }
    >
      <div className="flex flex-col gap-4">
        {launchError && (
          <div className="rounded border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {launchError}
          </div>
        )}
        <Input
          label={t("components.molecules.startinstancemodal.port")}
          placeholder={t(
            "components.molecules.startinstancemodal.auto_select_from_configured_range",
          )}
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
        {portError ? (
          <p className="-mt-2 text-xs text-destructive">{portError}</p>
        ) : (
          <p className="-mt-2 text-xs text-text-muted">
            {t(
              "components.molecules.startinstancemodal.leave_blank_to_auto_select_a_free_port",
            )}
          </p>
        )}
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input
            type="checkbox"
            checked={headless}
            onChange={(e) => setHeadless(e.target.checked)}
            className="h-4 w-4"
          />
          {t(
            "components.molecules.startinstancemodal.headless_best_for_docker_vps",
          )}
        </label>

        <div>
          <label className="mb-1 block text-xs text-text-muted">
            {t("components.molecules.startinstancemodal.browser")}
          </label>
          <select
            value={browser}
            onChange={(e) => setBrowser(e.target.value)}
            className="w-full rounded border border-border-subtle bg-bg-elevated px-3 py-2 text-sm text-text-primary"
          >
            <option value="">
              {t("components.molecules.startinstancemodal.server_default")}
            </option>
            <option value="chrome">
              {t("components.molecules.startinstancemodal.chrome")}
            </option>
            <option value="cloak">
              {t("components.molecules.startinstancemodal.cloakbrowser")}
            </option>
            <option value="ghost-chrome">
              {t("components.molecules.startinstancemodal.ghost_chrome")}
            </option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs text-text-muted">
            {t(
              "components.molecules.startinstancemodal.direct_launch_command_backup",
            )}
          </label>
          <textarea
            readOnly
            value={launchCommand}
            className="h-20 w-full resize-none rounded border border-border-subtle bg-bg-elevated px-3 py-2 font-mono text-xs text-text-secondary"
          />
          <div className="mt-2 flex items-center gap-2">
            <Button size="sm" variant="secondary" onClick={handleCopyCommand}>
              {t("components.molecules.startinstancemodal.copy_command")}
            </Button>
            {copyFeedback && (
              <span className="text-xs text-success">{copyFeedback}</span>
            )}
          </div>
          <p className="mt-2 text-xs text-text-muted">
            {t("components.molecules.startinstancemodal.replace")}
            <code>{"<token>"}</code>{" "}
            {t("components.molecules.startinstancemodal.with_the_value_from")}{" "}
            <code>
              {t(
                "components.molecules.startinstancemodal.pinchtab_config_token",
              )}
            </code>{" "}
            {t("components.molecules.startinstancemodal.when_auth_is_enabled")}
          </p>
        </div>
      </div>
    </Modal>
  );
}
