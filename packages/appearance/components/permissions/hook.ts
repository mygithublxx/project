import { useContext } from "react";
import { PermissionsContext } from "./context";
import type { MenuItem } from "../../hooks/dto";
/**
 * 获取权限上下文
 */
export const usePermissions = (): [string[], MenuItem[]] => {
  const { permissionList, menu } = useContext(PermissionsContext);

  return [permissionList, menu];
};
