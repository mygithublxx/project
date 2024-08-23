import React from "react";
import type { AppearanceProps, RenderModule } from "../appearance/dto";
import type { MenuItem } from "../appearance/hooks/dto";
/**
 * 多标签容器组件属性
 */
export interface TabsContainerProps
  extends Pick<AppearanceProps, "operationRender" | "operationWidth"> {
  /** 菜单数据结构 */
  menu?: MenuItem[];
  /**
   * 菜单项列表
   */
  menuList?: AppPremissionItem[];
  /** 权限列表 */
  permissionList?: string[];
  /**
   * 子组件
   */
  children?: React.ReactNode;
  /**
   * 收藏列表在localStorage中存储的key
   * @default WE_COLLECT
   */
  WE_COLLECT_TAG?: string;
  /** 产品编码 */
  appCode?: AppearanceProps["app"];
  /** 产品ID */
  appId?: string;
  /**
   * 路由对象
   */
  routes?: IRoute[];
  /**
   * tab右侧操作区域
   * @deprecated 请使用renderModule.render 实现
   */
  operationRender?: React.ReactNode;
  /**
   *  tab右侧操作区域的宽度
   * @deprecated 禁止在顶层扩展子模块属性，请将宽度写在自己的组件中
   */
  operationWidth?: string;
  /**
   * 自定义渲染tabs
   */
  renderMdoule?: Pick<RenderModule, "tabs">;
  /**
   * Tabs-Container 的任一tab删除后回调事件
   * @deprecated 此api命名存在歧义,将在3.0废弃，请使用onRemoveFinish替代
   */
  onRemove?: (tab: TabItem) => void;
  /**
   * Tabs-Container 的任一tab删除后回调事件
   */
  onRemoveFinish?: (tab: TabItem) => void;
  /**
   * 当关闭完最后一个tab的回调
   * @default history.push("/")
   */
  onClear?: () => void;
}
/**
 * 自定义路由对象
 */
type IRoute = {
  path: string;
  exact?: boolean;
  routes?: IRoute[];
  componentId: string;
  name?: string;
  [p: string]: any;
};

/**
 * 获取应用的权限菜单列表
 */
export interface AppPremissionItem {
  /**
   *
   */
  accessScope?: number;
  /**
   *
   */
  appId?: number;
  /**
   * 组件ID
   */
  componentId: string;
  /**
   * 组件类型(0：菜单，1：链接，2：按钮，3：目录)
   */
  componentType?: number;
  /**
   * 组件URL
   */
  componentUrl?: string;
  /**
   * 是否启用
   */
  enable?: boolean;
  /**
   * 主键（雪花算法）
   */
  id?: string;
  /**
   * 国际化key
   */
  i18nKey?: string;
  /**
   * 权限名称
   */
  name: string;
  /**
   * 排序序号
   */
  orderIdx?: number;
  /**
   * 父节点ID
   */
  parentId?: number;
  /**
   * 权限标识
   */
  permission?: string;
}
/**
 * 标签项全量属性
 */
export type TabItem = Partial<AppPremissionItem> & {
  label: string;
  key: string;
  collected: boolean;
  isTemp?: boolean;
};

/**
 * 当前用户收藏-取消收藏应用菜单-请求参数
 */
export interface PermissionReq {
  /**
   * 应用编码,示例值(Platform)
   */
  appCode: string;
  /**
   * 组件id，当收藏的是非菜单组件时,示例值(my_asset)
   */
  componentId?: string;
  /**
   * 组件URL，当收藏的是非菜单组件时,示例值(/own-assets)
   */
  componentUrl?: string;
  /**
   * 收藏-true/取消收藏-false，不传默认true,示例值(true)
   */
  favorite?: boolean;
  /**
   * 组件名称，当收藏的是非菜单组件时,示例值(我的资产)
   */
  name?: string;
  /**
   * 权限id，当收藏的是菜单时,示例值(9223372036854775807)
   */
  permissionId?: string;
}
/** Tab 生命周期类型 */
export type CycleType = "close" | "collect" | "uncollect";
/**
 * Tab 生命周期定义
 */
export type TabCycle = Record<
  string,
  Record<CycleType, (componentId: string, item: TabItem) => void>
>;
