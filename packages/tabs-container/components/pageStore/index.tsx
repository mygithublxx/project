import React from "react";
import { PageStoreContext } from "./context";
import type { PageStoreProviderProps } from "./dto";

/**
 * 页面存储上下文组件
 */
const PageStoreProvider = (props: PageStoreProviderProps) => {
  return (
    <PageStoreContext.Provider value={props}>
      {props.children}
    </PageStoreContext.Provider>
  );
};

export default PageStoreProvider;
