import React, {
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { pick } from "@gw/gw-utils";
import classNames from "classnames";
import { useRequest, apis, getTopNode } from "./utils";
import centerCenter from "@gw/odm-db";
import { ConfigProvider } from "@gw/web-basic-components";
import {
  CenterSelect,
  CollectList,
  MenuBox,
  PermissionsProvider,
} from "./components";
import useMenu from "./hooks";
import { WE_COLLECT_TAG } from "./constant";
import type {
  AppearanceProps,
  AsideDoms,
  Collection,
  AppearanceRef,
} from "./dto";
import type { CollectItem } from "./components/collectList/dto";
import type { AppItem } from "./components/appSelect/dto";

import { ReactComponent as ArrowSvg } from "./assets/arrow.svg";
import { MenuItem } from "./hooks/dto";
/** 租户code */
const { odmCase } = centerCenter;

export const MenuContext = React.createContext({
  menu: undefined,
  fullMenu: undefined,
  setMenu: undefined,
  activeApp: undefined,
});

/**
 * WE平台外框组件
 */
const GWAppearance = (
  props: React.PropsWithChildren<AppearanceProps>,
  ref: React.ForwardedRef<AppearanceRef>
) => {
  const {
    width = "100vw",
    height = "100vh",
    serviceList,
    app,
    menuCode,
    themeCode,
    isI18N,
    initAllExpand = false,
    showFullScreen = false,
    renderModule,
    defaultOpenKeys = [],
  } = props;

  const appRef = useRef();
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [activeApp, setActiveApp] = useState<AppearanceProps["app"]>(app);
  const [apps, setApps] = useState<AppItem[]>([]);
  const [storageFlag, setStorageFlag] = useState(0);
  //当前中心的componentId
  const [activeCenter, setActiveCenter] = useState(props.center);

  const [{ menu, authMenuList, permissionList, fullMenu }, setMenu] = useMenu(
    menuCode || activeApp,
    {
      activeCenter,
      isI18N,
      icons: props.renderModule?.aside?.icons,
    }
  );

  const [{ data: collection, loading }, fetchPermission] = useRequest<
    { appCode: string },
    Collection
  >(apis.user.favoritePermissions);

  /**
   * 获取当前用户对应应用的收藏菜单列表
   */
  const getCollection = async (appCode: string) => {
    if (!appCode) {
      console.warn(
        `${appCode} is not vaild app, Appearance Collection can not init`
      );
      return;
    }
    await fetchPermission({ appCode });
  };

  /**
   * 菜单收拢/展开回调
   */
  const handleCollapsed = () => {
    setCollapsed((e) => !e);
  };

  /**
   * 缓存appId
   */
  const activeAppId = useMemo(() => {
    if (!apps?.length) return "";
    if (apps.length) return apps.find?.((m) => m.code === app)?.id;
  }, [apps, app]);

  /**
   * 读取收藏列表
   */
  const collectList = useMemo(() => {
    if (!activeAppId) return [];
    const collects =
      JSON.parse(localStorage.getItem(WE_COLLECT_TAG) || null) || {};

    return collects[activeAppId] as CollectItem[];
  }, [activeAppId, collection, storageFlag]);

  /**
   * 初始化收藏列表
   */
  const initCollectList = (key: string, list: Collection["dataList"]) => {
    const collects =
      JSON.parse(localStorage.getItem(WE_COLLECT_TAG) || null) || {};
    const res = {};
    list.forEach((m) => {
      res[m.componentId] = {
        label: m.name,
        url: `${location.origin}${location.pathname}#${m.componentUrl}`,
        key: m.componentId,
        i18nKey: m.i18nKey,
      };
    });
    collects[key] = Object.values(res);
    localStorage.setItem(WE_COLLECT_TAG, JSON.stringify(collects));
    setStorageFlag((f) => f + 1);
  };

  /**
   * 内部的中心切换回调
   * @param item 菜单项
   */
  const onCenterChange = useCallback(
    (item: MenuItem) => {
      setActiveCenter(item.cid);
      props.onMenuRootNodeChange?.(item, fullMenu);
    },
    [fullMenu]
  );

  useEffect(() => {
    if (!activeAppId) return;
    if (!collection?.dataList) return;
    if (loading) return;
    initCollectList(activeAppId, collection.dataList);
  }, [activeAppId, collection, loading]);

  /**
   * 根据location.pathname 判断中心初始值
   */
  useEffect(() => {
    if (!pathname) return;
    if (!serviceList) return;
    if (!authMenuList?.length) return;
    //根据url 向上一直找到顶层节点
    const active = getTopNode(pathname, authMenuList);
    if (active) setActiveCenter(active);
  }, [pathname, authMenuList]);

  /**
   * 页面初始化加载接口
   */
  useEffect(() => {
    getCollection(app);
  }, [app]);
  /**
   * 控制收藏列表刷新
   */
  useEffect(() => {
    function listenStorage(e: StorageEvent) {
      if (e.key !== WE_COLLECT_TAG) return;
      setStorageFlag((f) => f + 1);
    }
    window.addEventListener("storage", listenStorage);
    return () => window.removeEventListener("storage", listenStorage);
  }, []);

  /** 根据中心需要显示的菜单 */
  const activeMenus = useMemo<MenuItem[]>(() => {
    if (activeCenter)
      return menu.find((m) => m.cid === activeCenter)?.children || [];
    return menu;
  }, [menu, activeCenter]);

  const innerVal = useMemo(
    () => ({ menu, fullMenu, setMenu, activeApp }),
    [menu, fullMenu, setMenu, activeApp]
  );

  const InnerAside = useMemo<ReactElement>(() => {
    const doms = {} as AsideDoms;
    const Layout = React.createElement("aside", {
      className: classNames("wbuc-appearance-aside", {
        ["collapsed"]: collapsed,
      }),
    });

    if (serviceList) {
      doms.CenterSelect = (
        <CenterSelect
          key="wbuc-center-select"
          value={activeCenter}
          className={"center-select"}
          collapsed={collapsed}
          enable={!!serviceList}
          data={menu?.filter((m) => !!m.children?.length)}
          onCenterChange={onCenterChange}
        />
      );
    }
    doms.MenuBox = (
      <MenuBox
        key="wbuc-menu-box"
        app={activeApp}
        themeCode={themeCode}
        className={"menu"}
        collapsed={collapsed}
        isI18N={props.isI18N}
        data={activeMenus}
        authList={authMenuList}
        initAllExpand={initAllExpand}
        defaultOpenKeys={defaultOpenKeys}
        expandIcon={renderModule?.aside?.expandIcon}
      />
    );
    doms.CollectList = (
      <CollectList
        key="wbuc-collect"
        isI18N={props.isI18N}
        app={activeApp}
        themeCode={themeCode}
        className={"collect"}
        data={collectList}
        collapsed={collapsed}
      />
    );
    doms.Trigger = (
      <div
        key="wbuc-aside-trigger"
        className={classNames("trigger")}
        onClick={handleCollapsed}
      >
        <div
          className={classNames("trigger-button", {
            ["collapsed"]: collapsed,
          })}
        >
          <ArrowSvg />
        </div>
      </div>
    );

    if (renderModule?.aside?.render) {
      return renderModule.aside.render(Object.assign(doms, { Layout }));
    }
    return React.cloneElement(
      Layout,
      {},
      Object.getOwnPropertyNames(doms).map((key) =>
        React.cloneElement(doms[key], { key })
      )
    );
  }, [
    serviceList,
    collapsed,
    activeMenus,
    activeApp,
    themeCode,
    activeCenter,
    collectList,
  ]);

  /** 将上下文方法暴露给外部 */
  useImperativeHandle(ref, () => {
    return {
      getCurrentPermissions: () => ({
        menu,
        authMenuList,
        permissionList,
        fullMenu,
      }),
    };
  });

  return (
    <ConfigProvider getPopupContainer={() => appRef.current}>
      <MenuContext.Provider value={innerVal}>
        <PermissionsProvider permissionList={permissionList} menu={menu}>
          <div
            id={`gw-appearance-layout-${activeApp}`}
            ref={appRef}
            key={activeApp}
            data-app-theme={themeCode || activeApp}
            data-odm-case={odmCase}
            style={{ width, height }}
            className={classNames("wbuc-appearance", props.className)}
          >
            {InnerAside}
            <main>
              <div className={"wbuc-appearance-children"}>
                {React.isValidElement(props.children)
                  ? React.cloneElement(props.children, {
                      menu,
                      menuList: authMenuList,
                      permissionList,
                      appCode: app,
                      operationRender: props.operationRender,
                      operationWidth: props.operationWidth,
                      renderModule: { tabs: renderModule?.tabs },
                      appId: activeAppId,
                      WE_COLLECT_TAG,
                    } as any)
                  : props.children}
              </div>
            </main>
          </div>
        </PermissionsProvider>
      </MenuContext.Provider>
    </ConfigProvider>
  );
};

/**
 * WE平台外框组件（含ref）
 */
const GWAppearanceRef = React.forwardRef(GWAppearance) as unknown as (
  props: React.PropsWithChildren<AppearanceProps> & {
    ref?: React.ForwardedRef<AppearanceRef>;
    key?: React.Key;
  }
) => React.ReactElement<any, any> | null;

export default GWAppearanceRef;
