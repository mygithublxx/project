import { type ReactNode } from "react";
import type { AppearanceProps } from "../../../appearance/dto";

/**
 * 收藏列表属性
 */
export interface CollectListProps
  extends Pick<AppearanceProps, "isI18N" | "app" | "themeCode"> {
  /**
   * 外部样式
   */
  className?: string;
  /**
   * 数据源
   */
  data?: CollectItem[];
  /**
   * 菜单栏收起
   */
  collapsed?: boolean;
  /**
   * 自定义展开Icon
   */
  expandIcon?: (collapsed: CollectListProps["collapsed"]) => ReactNode;
}

/** 收藏项定义 */
export type CollectItem = {
  /** 显示名称 */
  label: string;
  /** 收藏地址链接 */
  url: string;
  /** 唯一标识 */
  key: string;
  /**
   * 国际化key
   * @description 存在此字段时优先使用此字段展示
   */
  i18nKey?: string;
};
