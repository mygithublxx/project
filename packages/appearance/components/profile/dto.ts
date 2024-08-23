import type { AppearanceProps } from "../../dto";

/**
 * 用户设置组件属性
 */
export interface ProfileProps
  extends Pick<AppearanceProps, "isI18N" | "app" | "themeCode"> {
  className?: string;
  /**
   * 用户信息
   */
  // userInfo: AppearanceProps["userInfo"];
  /**
   * 账号设置点击事件回调
   */
  handleSetting?: AppearanceProps["handleSetting"];
  /**
   * 登出事件回调
   */
  handleLogout?: AppearanceProps["handleLogout"];
  /**
   * 用户自定义的下拉设置
   */
  customDropDown?: AppearanceProps["renderModule"]["profileDropDown"];
}
