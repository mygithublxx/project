import React from "react";
import type { PermissionsProviderProps } from "./dto";
/**
 * 权限上下文
 */
export const PermissionsContext = React.createContext<PermissionsProviderProps>(
  { permissionList: null, menu: [], children: "" }
);
