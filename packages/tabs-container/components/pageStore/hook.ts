import { useContext, useEffect, useRef } from "react";
import { PageStoreContext } from "./context";
import type { CycleType, TabItem } from "../../dto";
import type { PageTabItem, PageStore, TabCircle } from "./dto";
/**
 * 获取页面数据存储上下文
 */
export const usePageStore = <T = PageStore>(): [T, (p: T) => void] => {
  const { store, updateStore } = useContext(PageStoreContext);

  return [store, updateStore] as [T, (p: T) => void];
};
/**
 * 操作当前页面的tab
 */
export const usePageTab = (
  tab?: PageTabItem
): [TabItem[], (p: PageTabItem) => void] => {
  const initRef = useRef<boolean>(true);
  const { pageTab, setPageTab } = useContext(PageStoreContext);

  useEffect(() => {
    if (initRef.current && tab) {
      initRef.current = false;
      setPageTab(tab);
    }
  }, [tab]);

  function outSetPageTab(p: any) {
    setPageTab(p);
  }

  return [pageTab, outSetPageTab];
};

/**
 * 根据状态可变化的 Ref
 * @param state 要依赖的状态
 * @returns 可变值的Ref
 */
export const useMutableRef = <T>(state: T) => {
  const ref = useRef<T>(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
};

/** 获取当前Tab生命周期权限 */
export const useTabCycle = (
  p?: Partial<Record<CycleType, (key?: string, tab?: TabItem) => void>>
): [TabCircle, (k: string) => void] => {
  const {
    pageTab,
    pushTabCycleCallback,
    deleteTabCycleCallback,
    removePageTab,
    onCloseClick,
    collectPageTab,
    onCollectClick,
  } = useContext(PageStoreContext);

  useEffect(() => {
    if (!p) return;
    if (!pageTab?.length) return;
    pushTabCycleCallback(p);
  }, [pageTab]);

  return [
    {
      closeTab: removePageTab,
      collectTab: collectPageTab,
      onCloseClick,
      onCollectClick,
    },
    deleteTabCycleCallback,
  ];
};
