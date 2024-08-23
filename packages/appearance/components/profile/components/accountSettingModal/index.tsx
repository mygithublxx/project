import React from "react";
import { Fragment, FragmentModal } from "@gw/web-basic-components";
import type { AccountSettingModalProps } from "./dto";
import { AccountInfo, ModifyAvatar, ModifyPassword } from "..";
import { use } from "i18next";
import { useTranslation } from "react-i18next";

/**
 * 账号设置Modal
 */
const AccountSettingModal = (props: AccountSettingModalProps) => {
  const { t } = useTranslation();
  return (
    <FragmentModal
      className={`${props.appCode}-profile-modal`}
      open={props.open}
      onCancel={props?.onClose}
      destroyOnClose
    >
      <Fragment
        name="accountInfo"
        title={props.isI18N ? t("account_settings") : "账户设置"}
        component={() => (
          <AccountInfo
            isI18N={props.isI18N}
            useInfo={props.useInfo}
            appCode={props.appCode}
          />
        )}
      />
      <Fragment
        name="modifyAvatar"
        title={props.isI18N ? t("modify_avatar") : "修改头像"}
        component={(p) => (
          <ModifyAvatar
            isI18N={props.isI18N}
            avatarCode={props.useInfo?.avatarCode}
            avatarFileUrl={props.useInfo?.avatarFileUrl}
            {...p}
            appCode={props.appCode}
          />
        )}
      />
      <Fragment
        name="modifyPassword"
        title={props.isI18N ? t("change_password") : "修改密码"}
        component={(p) => (
          <ModifyPassword
            {...p}
            appCode={props.appCode}
            isI18N={props.isI18N}
          />
        )}
      />
    </FragmentModal>
  );
};

export default AccountSettingModal;
