import { IMenuResult } from "../../hooks/dto";

/**
 * 权限上下文定义
 */
export interface PermissionsProviderProps
  extends Pick<IMenuResult, "permissionList" | "menu"> {
  children: any;
}
