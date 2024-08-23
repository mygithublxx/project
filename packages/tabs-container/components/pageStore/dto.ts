import type { CycleType, TabItem } from "../../dto";

/**
 * 页面存储上下文定义
 */
export interface PageStoreProviderProps<T = PageStore> {
  store: T;
  updateStore: (p: T) => void;
  pageTab: TabItem[];
  setPageTab: (p: PageTabItem) => void;
  removePageTab: (k: string) => void;
  collectPageTab: (k: string) => Promise<void>;
  onCloseClick: (k: string) => void;
  onCollectClick: (k: string) => void;
  pushTabCycleCallback: (p: Partial<Record<CycleType, () => void>>) => void;
  deleteTabCycleCallback: (k: string) => void;
  children: any;
}

/**
 * 单页面缓存定义
 */
export type PageStore<T = any> = Record<string, T>;
/**
 * 多页面公用缓存定义
 */
export type PagesStore<T = any> = Record<string, PageStore<T>>;

/**
 * 页面PageItem
 */
export interface PageTabItem {
  /**
   * 页面名称
   */
  name: string;
  /**
   * 组件ID
   */
  componentId: string;

  [p: string]: any;
}

export interface TabCircle {
  /** 关闭按钮点击回调 */
  onCloseClick: (componentId: string) => void;
  /** 收藏按钮点击回调 */
  onCollectClick: (componentId: string) => void;
  /** 关闭Tab */
  closeTab: (componentId?: string) => void;
  /** 收藏/取消收藏 Tab */
  collectTab: (componentId?: string) => void;
}
