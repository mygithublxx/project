import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuIcon from "../icons";
import { useRequest, apis } from "../../appearance/utils";
import {
  cleanTree,
  flat2TreeWrapper,
  sortTree,
  removeEmptyNodes,
} from "../utils";
import { useTranslation } from "react-i18next";
import type { AppearanceProps, AppPermissionItem, AuthRes } from "../dto";
import type { IMenuResult, MenuItem } from "./dto";

interface IMenuParams {
  /** 菜单是否国际化 */
  isI18N?: boolean;
  /** 自定义的菜单图标集合 */
  icons?: Record<string, React.ReactNode>;
  /** xx中心的路径前缀 */
  activeCenter?: string;
  /** 中心列表整体 */
  serviceList?: AppearanceProps["serviceList"];
}

/** 菜单数据获取与操作hook定义 */
type IUseMenuType = (
  app?: AppearanceProps["app"],
  params?: IMenuParams
) => [IMenuResult, React.Dispatch<React.SetStateAction<MenuItem[]>>];

/**
 * 获取菜单
 */
const useMenu: IUseMenuType = (app, params) => {
  const { activeCenter, isI18N = false, icons } = params;
  const { t } = useTranslation();
  /** 存储构建完成的菜单 */
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [fullMenu, setFullMenu] = useState<MenuItem[]>([]);
  const [authMenuList, setAuthMenuList] = useState<AppPermissionItem[]>([]);
  const [permissionList, setPermissionList] = useState<string[]>(null);
  const { pathname } = useLocation();

  const [, fetchAppAuth] = useRequest<any, AuthRes>(apis.applications.show);
  const [, fetchUserAuth] = useRequest<any, AuthRes>(apis.user.permission);

  /**
   * 获取用户权限,用来过滤菜单
   */
  const getPermission = async () => {
    const res: string[] = [];
    const { dataList } = (await fetchUserAuth()) || {};

    if (Array.isArray(dataList)) {
      dataList
        .filter((m) => m.appCode === app)
        .forEach((m) => {
          res.push(m.componentId);
        });
    }
    setPermissionList(res.filter((m) => m));
    return res;
  };
  /**
   * 获取系统应用权限，用来构建菜单
   */
  const getAppPermission = async (appCode) => {
    let res: AppPermissionItem[] = [];
    const { dataList: appPremission } = (await fetchAppAuth({ appCode })) || {};

    if (Array.isArray(appPremission)) {
      const authPermission = await getPermission();

      res = appPremission.filter((m) => {
        if (![0, 3, 4].includes(m.componentType)) return false;
        return authPermission.includes(m.componentId);
      });
    }

    return res;
  };

  const init = async (appcode: string) => {
    if (!appcode) {
      console.warn(
        `${appcode} is not vaild app, Appearance permissions can not init`
      );
      return;
    }
    const data = await getAppPermission(appcode);
    setAuthMenuList(data);
  };

  /**
   * 构建菜单
   */
  const getMenu = useCallback(async () => {
    /* 存放树形结构数据 */
    let res = [] as MenuItem[];

    if (authMenuList.length) {
      res = authMenuList.map((m) => {
        return {
          label: (
            <span className="wbuc-menu-title-content" style={{ flex: 1 }}>
              <span className="wbuc-menu-title-content-inner">
                {isI18N && m.i18nKey ? t(m.i18nKey) : m.name}
              </span>
            </span>
          ),
          labelstring: isI18N && m.i18nKey ? t(m.i18nKey) : m.name,
          key: m.componentId,
          icon: MenuIcon(m.componentId, icons) || "",
          indent: 20,
          id: m.id,
          parentId: m.parentId,
          orderIdx: m.orderIdx,
          type: m.componentType === 4 ? "group" : "",
          title: m.name,
          cid: m.componentId,
          curl: m.componentUrl,
          componenttype: m.componentType,
        };
      });

      setFullMenu([...res]);
      //构建菜单时过滤链接和按钮
      res = res.filter((m) =>
        [0, 3, 4].includes(
          m.componenttype as AppPermissionItem["componentType"]
        )
      );
      res = flat2TreeWrapper<MenuItem>(res, { key: "key" });
      //去除没有子节点的目录和分组
      res = removeEmptyNodes(res, (m) => m.componenttype === 0);
      res = sortTree(res, "orderIdx");
      res = cleanTree(res);
    }
    setMenu(res);
  }, [activeCenter, pathname, authMenuList]);

  useEffect(() => {
    if (!authMenuList.length) {
      return;
    }
    getMenu();
  }, [authMenuList, activeCenter]);

  useEffect(() => {
    init(app);
  }, [app]);

  return [{ menu, authMenuList, permissionList, fullMenu }, setMenu];
};

export default useMenu;
export { default as useLogout } from "./use-logout";
