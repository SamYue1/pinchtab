import { useEffect, useState } from "react";
import { Button, Input, Modal } from "../atoms";
import * as api from "../../services/api";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreated: (preferredProfileKey: string) => void | Promise<void>;
}

export default function CreateProfileModal({
  open,
  onClose,
  onCreated,
}: Props) {
  const { t } = useTranslation();
  const [createName, setCreateName] = useState("");
  const [createUseWhen, setCreateUseWhen] = useState("");
  const [createSource, setCreateSource] = useState("");
  const [createLoading, setCreateLoading] = useState(false);

  useEffect(() => {
    if (open) {
      return;
    }

    setCreateName("");
    setCreateUseWhen("");
    setCreateSource("");
    setCreateLoading(false);
  }, [open]);

  const handleCreate = async () => {
    if (!createName.trim() || createLoading) return;

    setCreateLoading(true);
    try {
      const created = await api.createProfile({
        name: createName.trim(),
        useWhen: createUseWhen.trim() || undefined,
      });
      onClose();
      await onCreated(created.id || created.name);
    } catch (e) {
      console.error("Failed to create profile", e);
    } finally {
      setCreateLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("components.molecules.createprofilemodal.new_profile")}
      wide
      actions={
        <>
          <Button
            variant="secondary"
            disabled={createLoading}
            onClick={onClose}
          >
            {t("components.molecules.createprofilemodal.cancel")}
          </Button>
          <Button
            variant="primary"
            onClick={handleCreate}
            disabled={!createName.trim()}
            loading={createLoading}
          >
            {t("components.molecules.createprofilemodal.create")}
          </Button>
        </>
      }
    >
      <div className="flex flex-col gap-4">
        <Input
          label={t("components.molecules.createprofilemodal.name")}
          placeholder={t(
            "components.molecules.createprofilemodal.e_g_personal_work_scraping",
          )}
          value={createName}
          onChange={(e) => setCreateName(e.target.value)}
        />
        <Input
          label={t(
            "components.molecules.createprofilemodal.use_this_profile_when_helps_agents_pick",
          )}
          placeholder={t(
            "components.molecules.createprofilemodal.e_g_i_need_to_access_gmail_for_the_team",
          )}
          value={createUseWhen}
          onChange={(e) => setCreateUseWhen(e.target.value)}
        />
        <Input
          label={t(
            "components.molecules.createprofilemodal.import_from_optional_chrome_user_data",
          )}
          placeholder={t(
            "components.molecules.createprofilemodal.e_g_users_you_library_application",
          )}
          value={createSource}
          onChange={(e) => setCreateSource(e.target.value)}
        />
      </div>
    </Modal>
  );
}
