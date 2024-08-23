import React from "react";
import type { PageStoreProviderProps } from "./dto";
/**
 * 页面存储上下文
 */
export const PageStoreContext = React.createContext<PageStoreProviderProps>({
  store: {},
  updateStore: () => {},
  pageTab: [],
  setPageTab: () => {},
  removePageTab: () => {},
  collectPageTab: async () => {},
  onCloseClick: () => {},
  onCollectClick: () => {},
  pushTabCycleCallback: () => {},
  deleteTabCycleCallback: () => {},
  children: "",
});
