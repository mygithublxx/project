import React from "react";
import { PermissionsContext } from "./context";
import type { PermissionsProviderProps } from "./dto";

/**
 * 权限上下文组件
 */
const PermissionsProvider = (props: PermissionsProviderProps) => {
  return (
    <PermissionsContext.Provider value={props}>
      {props.children}
    </PermissionsContext.Provider>
  );
};

export default PermissionsProvider;
