import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import { Tabs } from "@gw/web-basic-components";
import { matchRoutes } from "@gw/gw-utils";
import { PageStoreProvider } from "./components";
import apis from "../utils/apis";
import useRequest from "../utils/use-request";
import useTabIcon from "./useTabIcon";
import { useTranslation } from "react-i18next";
import { getCurrMenuItem, pushCollectItemToStorage } from "./utils";
import { cloneDeep } from "lodash";
import type { PagesStore, PageStore } from "./components";
import type {
  AppPremissionItem,
  PermissionReq,
  TabItem,
  TabsContainerProps,
  TabCycle,
  CycleType,
} from "./dto";
import type { BuTabsDoms } from "../appearance/dto";

/**
 * 多标签容器组件
 */
const TabsContainer = (props: TabsContainerProps) => {
  const history = useHistory();

  const {
    routes = [],
    appId,
    operationWidth = "12.5rem",
    operationRender,
    permissionList,
    menu,
    renderMdoule,
    onClear = () => history.push("/"),
  } = props;

  const [currentItems, setCurrentItems] = useState<TabItem[]>([]);
  const [cardKey, setCardKey] = useState(currentItems?.[0]?.key || "");
  const [rmflag, setRmflag] = useState(0);
  const keyRef = useRef<string>(currentItems?.[0]?.key || "");
  const { pathname, search } = useLocation();
  const tabsRef = useRef<any>();
  const urlRef = useRef<string>();
  /** 缓存tab声明周期函数 */
  const cycleRef = useRef<TabCycle>({});
  /** 计时器id数组 */
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  /** 永远获取页面最新路由，以便 */
  urlRef.current = `${pathname}${search}`;
  const { t } = useTranslation();

  const [, fetchCollect] = useRequest<PermissionReq, any>(apis.user.favorite);

  const { menuList, appCode, WE_COLLECT_TAG } = props;

  /** 根据url检查tab是否已经打开 */
  const getTargetItemByUrl = useCallback(
    (itemUrl: string): TabItem | undefined => {
      return currentItems.find((item) => item.componentUrl === itemUrl);
    },
    [currentItems]
  );
  /** 更新tab生命周期回调(此处不建议合并) */
  const pushTabCycleCallback = (p: Record<CycleType, () => void>) => {
    const timer = setTimeout(() => {
      if (!keyRef.current) return;
      cycleRef.current[keyRef.current] = p;
    }, 0);
    timerRef.current.push(timer);
  };
  /** 清空tab生命周期回调 */
  const deleteTabCycleCallback = (key: string) => {
    if (!cycleRef.current[key]) return;
    delete cycleRef.current[key];
  };

  const updateCardKey = useCallback(
    (key?: string | undefined) => {
      const targetItem = getTargetItemByUrl(urlRef.current);

      /** 如果当前页面tab存在，则直接设置，否则设置指定key */
      if (targetItem) {
        keyRef.current = targetItem.componentId;
        setCardKey(targetItem.componentId);
        return true;
      }
      if (key) {
        keyRef.current = key;
        setCardKey(key);
        return true;
      }
      return false;
    },
    [getTargetItemByUrl]
  );

  /** 新增选项卡 */
  const addTab = useCallback(
    (item: AppPremissionItem) => {
      if (pathname?.length < 2) return;
      if (!item) return;
      updateCardKey(item?.componentId);
      const collects: Record<string, TabItem[]> =
        JSON.parse(localStorage.getItem(WE_COLLECT_TAG) || null) || {};

      const newItem: TabItem = {
        appId,
        ...item,
        label: item.i18nKey ? t(item.i18nKey) : item.name,
        key: item.componentId,
        componentUrl: `${pathname}${search}`,
        collected: !!collects[appId]?.some((c) => c.key === item.componentId),
      } as any;

      setCurrentItems((m) => {
        //对象数组去重
        const res = {};
        [...m].concat(newItem).forEach((b) => (res[b.key] = b));

        return Object.values(res);
      });
    },
    [pathname, search, appId, updateCardKey]
  );

  /**
   * 删除选项卡
   */
  const removeTab = (key: string) => {
    const targetKey = key || keyRef.current;
    let newActiveKey = keyRef.current;
    let lastIndex = -1;
    let targetItem: TabItem;
    setCurrentItems((pre) => {
      const newPanes = pre.filter((item) => item.key !== targetKey);
      targetItem = pre.find((m) => m.key === targetKey);
      lastIndex = pre.findIndex((m) => m.key === targetKey) - 1;

      if (newPanes?.length && newActiveKey === targetKey) {
        newActiveKey =
          lastIndex >= 0 ? newPanes[lastIndex].key : newPanes[0].key;
        keyRef.current = newActiveKey;
      }
      return newPanes;
    });
    deleteTabCycleCallback(targetKey);

    onTabClick(newActiveKey);
    setRmflag((m) => m + 1);
    if (typeof props.onRemoveFinish === "function")
      props.onRemoveFinish?.(targetItem);
    else props.onRemove?.(targetItem);

    if (lastIndex < 0 && newActiveKey === targetKey) onClear();
  };
  /** 收藏选项卡 */
  const collectTab = async (key: string) => {
    const tabs: TabItem[] = cloneDeep(currentItems);
    const item = tabs.find((m) => m.key === key);

    const params = { appCode, favorite: !item.collected } as PermissionReq;
    if (item.id) {
      Object.assign(params, { permissionId: item.id });
    } else {
      const { name, componentId, componentUrl, i18nKey } = item;
      Object.assign(params, { name, componentId, componentUrl, i18nKey });
    }
    await fetchCollect(params);
    pushCollectItemToStorage(appId, item);
    item.collected = !item.collected;
    setCurrentItems(tabs);
  };
  /** 切换标签时回调 */
  const onTabClick = (key: string) => {
    if (cardKey === key) return;
    const { componentUrl, componentId } =
      currentItems.find((m) => m.componentId === key) || {};
    if (componentUrl) history.push(componentUrl);
    if (componentId) setCardKey(componentId);
  };
  /** 标签编辑回调 */
  const onEdidClick = (key: string, action: "add" | "remove") => {
    if (action === "remove") {
      onCloseClick(key);
    }
  };
  /** 标签关闭回调 */
  const onCloseClick = (key: string) => {
    if (typeof cycleRef.current[key]?.close === "function") {
      const item = currentItems.find((m) => m.key === key);
      cycleRef.current[key].close(key, item);
    } else {
      removeTab(key);
    }
  };

  /** 标签收藏回调 */
  const onCollectClick = (key: string) => {
    const tabs: TabItem[] = cloneDeep(currentItems);
    const item = tabs.find((m) => m.key === key);
    if (
      typeof cycleRef.current[key]?.collect === "function" &&
      !item.collected
    ) {
      cycleRef.current[key].collect(key, item);
      return;
    }
    if (
      typeof cycleRef.current[key]?.uncollect === "function" &&
      item.collected
    ) {
      cycleRef.current[key].uncollect(key, item);
      return;
    }
    collectTab(key);
  };
  /** 页面数据仓 */
  const [store, dispatch] = useReducer(
    useCallback(
      (state: PagesStore, action: { cardKey?: string; data?: PageStore }) => {
        if (!action?.cardKey) return state;
        return { ...state, [action.cardKey]: action.data };
      },
      []
    ),
    {}
  );
  /** 当前页面数据 */
  const currStore = useMemo(() => {
    return store?.[keyRef.current] || {};
  }, [store]);

  /** 缓存页面数据 */
  const updateStore = (data: PageStore, key = keyRef.current) => {
    dispatch({ cardKey: key, data });
  };

  /**
   * 菜单触发更新标签列表
   */
  useEffect(() => {
    if (pathname?.length < 2) return;
    if (!menuList?.length) return;
    /** 如果更新cardkey成功，则说明当前url tab已经存在 */
    if (updateCardKey()) {
      return;
    }
    const item = getCurrMenuItem(pathname, menuList);
    if (item) addTab(item);
    else if (routes?.length) {
      const match = matchRoutes(routes, pathname);
      if (!match?.length) return;

      const { route } = match.slice().pop();

      if (!matchPath(pathname, route)?.isExact) return;
      const { componentId, name } = route;
      if (!componentId || !name) return;
      addTab({ componentId, name, appId: menuList[0].appId });
    }
  }, [pathname, menuList]);

  /**
   * 删除tab后清理store
   */
  useEffect(() => {
    const keys = currentItems.map((m) => m.key);
    Object.keys(store).forEach((k) => {
      if (!keys.includes(k)) updateStore({}, k);
    });
  }, [rmflag]);

  /** 销毁时清除计时器 */
  useEffect(() => {
    return () => {
      if (timerRef.current?.length) {
        timerRef.current.forEach((id) => clearTimeout(id));
      }
    };
  }, []);

  const { closeIcon, collectedIcon, collectIcon } = useTabIcon(props.appCode);

  const TabsDom = useMemo(() => {
    const doms = {} as BuTabsDoms;
    doms.Tabs = (
      <div className="wbuc-tabs-cintainer-inner" ref={tabsRef}>
        <Tabs
          className="card-tabs"
          type="editable-card"
          items={currentItems}
          activeKey={cardKey}
          closeIcon={closeIcon}
          collectedIcon={collectedIcon}
          collectIcon={collectIcon}
          popupClassName="wbuc-tabs-dropdown"
          getPopupContainer={() => tabsRef.current}
          onEdit={onEdidClick}
          onTabClick={(e) => onTabClick(e)}
          onCollect={onCollectClick}
        />
      </div>
    );
    if (operationRender) {
      doms.Operation = (
        <div
          className="wbuc-tabs-operation-container"
          style={{ width: operationWidth }}
        >
          {operationRender}
        </div>
      );
    }
    if (renderMdoule?.tabs?.render) {
      return renderMdoule.tabs.render(doms, { appId, menu, permissionList });
    }
    return Object.getOwnPropertyNames(doms).map((key) =>
      React.cloneElement(doms[key], { key })
    );
  }, [
    currentItems,
    cardKey,
    closeIcon,
    collectedIcon,
    operationRender,
    operationWidth,
  ]);

  return (
    <PageStoreProvider
      store={currStore}
      updateStore={updateStore}
      pageTab={currentItems}
      setPageTab={addTab}
      removePageTab={removeTab}
      collectPageTab={collectTab}
      onCloseClick={onCloseClick}
      onCollectClick={onCollectClick}
      pushTabCycleCallback={pushTabCycleCallback}
      deleteTabCycleCallback={deleteTabCycleCallback}
    >
      <div className="wbuc-tabs-container">
        <div className="wbuc-tabs">{TabsDom}</div>
        <div className="wbuc-tab-children">{props.children}</div>
      </div>
    </PageStoreProvider>
  );
};

export default TabsContainer;
