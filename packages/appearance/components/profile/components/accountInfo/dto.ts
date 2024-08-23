import type { AppearanceProps } from "../../../../../appearance/dto";
import type { UserInfo } from "../../../../../localLogin/hooks/useLogin/dto";

/**
 * 账号信息定义
 */
export interface AccountInfoProps extends Pick<AppearanceProps, "isI18N"> {
  /**
   * 用户信息
   */
  useInfo: UserInfo;
  appCode?: string;
}
