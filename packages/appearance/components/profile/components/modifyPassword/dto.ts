import type { AppearanceProps } from "../../../../../appearance/dto";

/**
 * 修改密码定义
 */
export interface ModifyPasswordProps extends Pick<AppearanceProps, "isI18N"> {
  [p: string]: any;
}
