import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import {
  Avatar,
  Button,
  Form,
  useFragmentManager,
} from "@gw/web-basic-components";
import { useTranslation } from "react-i18next";
import { useRequest, apis } from "../../../../../appearance/utils";
import type { AvatarListRes } from "./dto";

import SelectedSvg from "../../../../assets/profile/selected.svg";
import PowerSelectedSvg from "../../../../assets/profile/power_selected.svg";

/**
 * 修改头像
 */
const ModifyAvatar = (props) => {
  const { t } = useTranslation();
  /**
   * 当前头像code
   */
  const [currentAvatar, setCurrentAvatar] = useState<string>();
  /**
   * 获取用户默认头像接口
   */
  const [{ loading, data }, fetchAvatarList] = useRequest<any, AvatarListRes>(
    apis.account.default
  );

  /**
   * 修改头像接口
   */
  const [{ loading: editLoading }, fetchAvatar] = useRequest<any, string>(
    apis.account.avatars
  );

  const { back } = useFragmentManager();
  const selectedIcon = useMemo(() => {
    switch (props.appCode) {
      case "We-Power-New":
        return PowerSelectedSvg;
      default:
        return SelectedSvg;
    }
  }, [props.appCode]);

  /**
   * 获取用户默认头像
   */
  useEffect(() => {
    fetchAvatarList();
  }, []);

  /**
   * 设置当前头像
   */
  useEffect(() => {
    setCurrentAvatar(props.fragmentData?.avatarCode);
  }, [data]);

  /**
   * 更新头像
   */
  const updateAvatar = () => {
    const formdata = new FormData();
    formdata.append("avatarCode", currentAvatar);
    fetchAvatar({ formdata })
      .then((url) => {
        back({
          avatarCode: currentAvatar,
          avatarFileUrl: url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="wbuc-modify-avatar"
      data-app-theme={props.themeCode || props.appCode}
    >
      <Form className="wbuc-form">
        <Form.Item
          label={props.isI18N ? t("system_default") : "系统默认"}
          name="systemDefault"
        >
          <div className="wbuc-avatar-list">
            {data?.dataList?.map((item, index) => {
              return (
                <div
                  key={item?.avatarCode || index}
                  className={classNames("wbuc-avatar-wrapper", {
                    selected: currentAvatar === item?.avatarCode,
                  })}
                  onClick={() => {
                    setCurrentAvatar(item?.avatarCode);
                  }}
                >
                  <Avatar
                    className="wbuc-avatar"
                    src={item?.avatarFileUrl}
                    draggable={false}
                  />
                  <img className="wbuc-selected" src={selectedIcon} />
                </div>
              );
            })}
          </div>
        </Form.Item>
      </Form>
      <div className="wbuc-btn-wrapper">
        <Button onClick={back}>{t("cancel")}</Button>
        <Button type="primary" loading={editLoading} onClick={updateAvatar}>
          {t("besure")}
        </Button>
      </div>
    </div>
  );
};

export default ModifyAvatar;
