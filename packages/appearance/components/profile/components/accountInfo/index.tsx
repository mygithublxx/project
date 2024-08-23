import React, { useEffect, useMemo, useState } from "react";
import { Avatar, Form, useFragmentManager } from "@gw/web-basic-components";
import { useRequest, apis } from "../../../../../appearance/utils";
import { LOCALSTORAGE_USERINFO } from "../../../../constant";
import { useTranslation } from "react-i18next";
import type { UserInfo } from "../../../../../localLogin/hooks/useLogin/dto";
import type { AccountInfoProps } from "./dto";

import EditPng from "../../../../assets/profile/edit.svg";

/**
 * 账号信息
 */
const AccountInfo = (props: AccountInfoProps) => {
  const { t } = useTranslation();
  /**
   * 获取用户信息接口
   */
  const [, fetchUserInfo] = useRequest<any, any>(apis.account.current);

  const { open, backData } = useFragmentManager();

  const [userInfo, setUserInfo] = useState<UserInfo>();
  const labelIcon = useMemo(() => {
    return (
      <div
        style={{
          width: "0.5rem",
          height: "0.5rem",
          background:
            props.appCode === "We-Power-New"
              ? "rgba(71,83,99,0.2) linear-gradient(135deg, #19FFA7 0%, #2CFFDD 100%)"
              : "#3B65EE",
          borderRadius: "2px",
          boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.2)",
        }}
      />
    );
  }, []);
  useEffect(() => {
    fetchUserInfo().then((res) => {
      setUserInfo(res);
    });
  }, []);

  useEffect(() => {
    if (!backData?.avatarFileUrl) {
      return;
    }
    setUserInfo((m) => {
      localStorage.setItem(
        LOCALSTORAGE_USERINFO,
        JSON.stringify({
          ...m,
          avatarCode: backData?.avatarCode,
          avatarFileUrl: backData?.avatarFileUrl,
        })
      );
      return {
        ...m,
        avatarCode: backData?.avatarCode,
        avatarFileUrl: backData?.avatarFileUrl,
      };
    });
  }, [backData]);

  return (
    <div className="wbuc-account-info">
      <div className="wbuc-top">
        <div className="wbuc-avatar-wrapper">
          <Avatar
            src={userInfo?.avatarFileUrl}
            className="wbuc-avatar"
            draggable={false}
          />
          <div
            className="wbuc-edit"
            onClick={() => open("modifyAvatar", userInfo)}
          >
            <img src={EditPng} className="wbuc-icon" />
          </div>
        </div>
        <span className="wbuc-name">{userInfo?.name || ""}</span>
        <Form className="wbuc-form" labelDecorationIcon={labelIcon}>
          <Form.Item
            label={props.isI18N ? t("phone_number") : "手机号"}
            name="phone"
          >
            <div className="wbuc-phone">{userInfo?.phone || ""}</div>
          </Form.Item>
          <Form.Item label={props.isI18N ? t("mail") : "邮箱"} name="mail">
            <div className="wbuc-phone">{userInfo?.mail || ""}</div>
          </Form.Item>
          <Form.Item
            label={props.isI18N ? t("password") : "密码"}
            name="password"
          >
            <div className="wbuc-password">
              <span>************</span>
              <div
                className="wbuc-modify"
                onClick={() => open("modifyPassword", userInfo?.username)}
              >
                {props.isI18N ? t("change_password") : "修改密码"}
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AccountInfo;
