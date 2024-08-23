import { MenuProps } from "@gw/web-basic-components";
import type { AppearanceProps, AppPermissionItem } from "../../dto";

/**
 * 导航菜单容器定义
 */
export interface MenuBoxProps
  extends Pick<AppearanceProps, "isI18N" | "app" | "themeCode"> {
  /**
   * 外部样式
   */
  className?: string;
  /**
   * 收起/展开
   */
  collapsed?: boolean;
  /**
   * 数据源
   */
  data?: any;
  /**
   * 权限列表
   */
  authList?: AppPermissionItem[];
  /**
   * 是否默认全部展开
   */
  initAllExpand?: boolean;
  /**
   * 默认打开的菜单
   */
  defaultOpenKeys?: string[];
  /**
   * 菜单项展开图标
   */
  expandIcon?: MenuProps["expandIcon"];
}

interface MenuDataItem {
  id: string;
  title: string;
  children?: MenuDataItem[];
}
