import type { AppearanceProps } from "../../../../../appearance/dto";
import { UserInfo } from "../../../../../localLogin/hooks/useLogin/dto";

/**
 * 账号设置modal定义
 */
export interface AccountSettingModalProps
  extends Pick<AppearanceProps, "isI18N"> {
  open: boolean;
  /**
   * 关闭modal回调
   */
  onClose?: () => void;
  /**
   * 用户信息
   */
  useInfo: UserInfo;
  appCode?: string;
}
