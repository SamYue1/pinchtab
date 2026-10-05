import { Button, Modal } from "../../components/atoms";
import { useTranslation } from "react-i18next";

interface DefaultInstanceModalProps {
  open: boolean;
  startingDefaultInstance: boolean;
  startingDefaultMode: "headed" | "headless" | null;
  prefersHeadedLaunch: boolean;
  launchError: string;
  defaultLaunchMode: "headed" | undefined;
  onClose: () => void;
  onStart: (mode: "headed" | "headless") => void;
}

export default function DefaultInstanceModal({
  open,
  startingDefaultInstance,
  startingDefaultMode,
  prefersHeadedLaunch,
  launchError,
  defaultLaunchMode,
  onClose,
  onStart,
}: DefaultInstanceModalProps) {
  const { t } = useTranslation();
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("pages.monitoring.defaultinstancemodal.start_default_instance")}
      actions={
        <>
          <Button
            variant="secondary"
            onClick={onClose}
            disabled={startingDefaultInstance}
          >
            {t("pages.monitoring.defaultinstancemodal.cancel")}
          </Button>
          <Button
            variant={prefersHeadedLaunch ? "primary" : "secondary"}
            onClick={() => {
              void onStart("headed");
            }}
            loading={startingDefaultMode === "headed"}
            disabled={startingDefaultInstance}
          >
            {t("pages.monitoring.defaultinstancemodal.start_headed")}
          </Button>
          <Button
            variant={prefersHeadedLaunch ? "secondary" : "primary"}
            onClick={() => {
              void onStart("headless");
            }}
            loading={startingDefaultMode === "headless"}
            disabled={startingDefaultInstance}
          >
            {t("pages.monitoring.defaultinstancemodal.start_headless")}
          </Button>
        </>
      }
    >
      <p>
        {t(
          "pages.monitoring.defaultinstancemodal.choose_how_to_launch_the_default",
        )}
      </p>
      {launchError && (
        <div className="mt-3 rounded border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {launchError}
        </div>
      )}
      <p className="mt-2 text-xs text-text-muted">
        {t("pages.monitoring.defaultinstancemodal.configured_default_mode")}{" "}
        {defaultLaunchMode === "headed" ? "headed" : "headless"}
      </p>
    </Modal>
  );
}
