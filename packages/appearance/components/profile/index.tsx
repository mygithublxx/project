import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import configCenter from "@gw/odm-db";
import { Avatar, Dropdown } from "@gw/web-basic-components";
import { LOCALSTORAGE_USERINFO } from "../../constant";
import { useRequest, apis } from "../../../appearance/utils";
import { AccountSettingModal } from "./components";
import { useTranslation } from "react-i18next";
import { useLogout } from "../../hooks";
import type { UserInfo } from "../../../localLogin/hooks/useLogin/dto";
import type { ProfileProps } from "./dto";

import { ReactComponent as ArrowSvg } from "../../assets/arrow_down.svg";
import { ProfileDropDownDoms } from "@gw/web-business-components";

const { entryConfig } = configCenter;

/**
 * 用户设置组件
 */
const Profile = (props: ProfileProps) => {
  const { t } = useTranslation();
  const { app } = props;

  const [, fetchUserInfo] = useRequest<never, UserInfo>(apis.account.current);
  const [, fetchLogoutCurrent] = useRequest<any, any>(apis.switchuser.logout);

  const [, fetchPuserid] = useRequest<void, string>(apis.account.puserid);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  //是否显示账号设置弹窗
  const [accOpen, setAccOpen] = useState(false);

  const [userInfo, setUserInfo] = useState<UserInfo>();

  const [showBackToPortal, setShowBackToPortal] = useState(true);

  const [targetPage, setTargetPage] = useState<string>();

  const logout = useLogout(apis.user.logout, targetPage);

  const handleLogout = async () => {
    try {
      await logout();

      props.handleLogout?.();
    } catch {}
  };

  /**
   * 账号设置点击回调
   */
  const handleAccountOpen = () => {
    setDropdownOpen(false);
    setAccOpen(true);
  };

  /**
   * 账号设置弹窗关闭回调
   */
  const handleAccountClose = () => {
    setAccOpen(false);
  };

  /**
   * 回到门户点击回调
   */
  const handleBackLogin = () => {
    location.href = entryConfig.login;
  };

  /**
   * 退出当前用户身份
   */
  const handleSwitchLogout = async () => {
    try {
      const res = await fetchLogoutCurrent();
      localStorage.setItem("accesstoken", res.token);
      localStorage.setItem(LOCALSTORAGE_USERINFO, JSON.stringify(res.userInfo));
    } catch (error) {
      console.log("退出失败：", error);
    }
    try {
      const puserId = await fetchPuserid();
      localStorage.setItem("puserid", puserId);
    } catch (error) {
      console.log("获取puserid失败：", error);
      localStorage.removeItem("puserid");
    }
    location.href = entryConfig.login;
  };
  /**
   * 用户信息
   * @returns
   */
  const ProfileUserInfo = () => {
    return (
      <div className={"user-info"}>
        <span>{userInfo?.name || "Goodwe"}</span>
        <p>{userInfo?.phone || "-"}</p>
      </div>
    );
  };
  /**
   * 用户设置
   */
  const ProfileSettings = () => {
    return (
      <div className={"settings"}>
        {userInfo?.switch2Login ? (
          <div className={"setting"} onClick={() => handleSwitchLogout()}>
            退出当前身份
          </div>
        ) : (
          <div className={"setting"} onClick={() => handleAccountOpen()}>
            {props.isI18N ? t("account_settings") : "账户设置"}
          </div>
        )}
      </div>
    );
  };
  /**
   * 回到门户
   * @returns
   */
  const HomeBack = () => {
    return showBackToPortal ? (
      <div
        className={classNames("setting", "setting-outer")}
        onClick={() => handleBackLogin()}
      >
        {props.isI18N ? t("back_to_portal") : "回到门户"}
      </div>
    ) : null;
  };
  /**
   * 退出登录
   * @returns
   */
  const LogOut = () => {
    return (
      <div className={"logout"} onClick={handleLogout}>
        {props.isI18N ? t("log_out") : "退出登录"}
      </div>
    );
  };
  /**
   * 自定义下拉菜单
   */
  const InnerDropdown = useMemo(() => {
    const doms = {} as ProfileDropDownDoms;
    doms.ProfileUserInfo = <ProfileUserInfo />;
    doms.ProfileSettings = <ProfileSettings />;
    doms.HomeBack = <HomeBack />;
    doms.LogOut = <LogOut />;
    const Layout = React.createElement("div", {
      className: "wbuc-profile-dropdown",
      "data-app-theme": props.themeCode || props.app,
    });
    if (!props.customDropDown?.render) {
      return React.cloneElement(
        Layout,
        {},
        Object.getOwnPropertyNames(doms).map((key) =>
          React.cloneElement(doms[key], { key })
        )
      );
    }
    return props.customDropDown?.render(Object.assign(doms, { Layout }));
  }, [
    showBackToPortal,
    userInfo,
    props.isI18N,
    props.themeCode,
    props.app,
    props.customDropDown,
  ]);

  /**
   * 初始化用户信息
   */
  useEffect(() => {
    fetchUserInfo().then((res) => {
      localStorage.setItem(LOCALSTORAGE_USERINFO, JSON.stringify(res));
      setUserInfo(res);
      if (configCenter.odmCase === "shyd") {
        setShowBackToPortal(false);
        setTargetPage(`http://${window.location.host}`);
      }
    });
  }, []);
  /**
   * 账号弹窗关闭时重新获取userInfo
   */
  useEffect(() => {
    if (accOpen) return;
    const newUserInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_USERINFO));
    setUserInfo(newUserInfo);
  }, [accOpen]);

  /**
   * 显示用户名
   */
  const getUsername = (user: UserInfo) => {
    if (user?.switch2Login) {
      return user?.switchOperatorName + "-" + user.name;
    } else {
      return user?.name || "Goodwe" || "尚未登录";
    }
  };

  return (
    <>
      <Dropdown
        overlayClassName={"wbuc-profile-dropdown"}
        dropdownRender={() => InnerDropdown as React.ReactNode}
        trigger={["hover"]}
        onOpenChange={setDropdownOpen}
      >
        <div
          className={classNames("wbuc-profile-box", props.className, {
            ["wbuc-profile-box-collapsed"]: !dropdownOpen,
          })}
        >
          <Avatar className="profile-avatar" src={userInfo?.avatarFileUrl} />
          <span>{getUsername(userInfo)}</span>
          <ArrowSvg />
        </div>
      </Dropdown>
      <AccountSettingModal
        isI18N={props.isI18N}
        open={accOpen}
        appCode={app}
        onClose={handleAccountClose}
        useInfo={userInfo}
      />
    </>
  );
};

export default Profile;
