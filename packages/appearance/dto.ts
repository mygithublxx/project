import type { ReactNode, ReactElement } from "react";
import type { MenuProps } from "@gw/web-basic-components";
import type {
  AppItem,
  AppSelectProps,
  IAppOption,
} from "./components/appSelect/dto";
import type { IMenuResult, MenuItem } from "./hooks/dto";

/**
 * 外框组件属性定义
 */
export interface AppearanceProps {
  /**
   * 组件外部样式名
   */
  className?: string;
  /**
   * 内容
   */
  children?: ReactNode;
  /**
   * 组件宽度
   * @default 100vw
   */
  width?: string;
  /**
   * 组件高度
   * @default 100vh
   */
  height?: string;
  /**
   * 指定中心初始值
   */
  center?: string;
  /**
   * 指定当前app
   * @description 初始支持 "Platform" | "WE-OPP" | "We-Seeds"| "We-Seeds-Pro"| "Power"| "Support"| "We-Power-New"| "We-Star"| "We-Security" 后续支持请走新增产品流程;
   */
  app: string;
  /**
   * 指定当前权限接口使用的code
   * @default app
   */
  menuCode?: string;
  /**
   * 当前样式code
   * @description 不指定时默认与app一致
   * @default app
   */
  themeCode?: string;
  /**
   * 是否显示反馈建议
   * @default true
   */
  showFeedBack?: boolean;
  /**
   * 外框是否需要国际化
   * @default false
   */
  isI18N?: boolean;
  /**
   * 用户信息
   */
  userInfo?: UserInfo;
  /**
   * 是否采用服务中心的三级菜单形式
   * @description 为true时，一级菜单会传递给侧边栏顶部的中心下拉框
   * @default false
   */
  serviceList?: boolean;
  /**
   * 自定义渲染header的profile左侧区域
   * @deprecated 请使用 renderModule.headerOperation.render 替代
   */
  headerOptionRender?: ReactNode;
  /**
   * tab右侧操作区域
   *  @deprecated 请使用renderModule.render 实现
   */
  operationRender?: ReactNode;
  /**
   * tab右侧操作区域的宽度
   * @deprecated 禁止在顶层扩展子模块属性，请将宽度写在自己的组件中
   */
  operationWidth?: string;
  /**
   *  是否默认全部展开
   */
  initAllExpand?: boolean;
  /**
   * 是否显示全屏按钮
   * @default false
   */
  showFullScreen?: boolean;
  /**
   * 默认打开的菜单
   */
  defaultOpenKeys?: string[];
  /**
   * 自定义模块级渲染
   */
  renderModule?: RenderModule;
  /**
   * 账号设置点击事件回调
   */
  handleSetting?: () => void;
  /**
   * 登出点击回调
   */
  handleLogout?: () => void;
  /**
   * 顶层菜单节点切换回调
   * @description 仅在serviceList 存在时有效
   */
  onMenuRootNodeChange?: (item: MenuItem, fullMenu: MenuItem[]) => void;
}
/**
 * 外框组件暴露上下文方法
 */
export interface AppearanceRef {
  getCurrentPermissions: () => IMenuResult;
}
/** 自定义模块级渲染 */
export interface RenderModule {
  logo?: InnerRender<Pick<AsideDoms, "Layout">, Pick<AsideSE, "collapsed">>;
  appSelect?: InnerRender<unknown, AppSelectParams> & InnerAppSelect;
  headerOperation?: InnerRender<HeaderOpDoms>;
  aside?: InnerRender<AsideDoms, AsideSE> & InnerMenu;
  tabs?: InnerRender<BuTabsDoms, BuTabsProps>;
  profileDropDown?: InnerRender<ProfileDropDownDoms>;
}
/** 自定义渲染定义 */
export interface InnerRender<T = any, S = Record<string, any>> {
  render?: (doms: T, states?: S) => ReactElement;
}
export interface InnerMenu {
  /** 自定义菜单图标 */
  icons?: Record<string, ReactNode>;
  /** 菜单项展开图标 */
  expandIcon?: MenuProps["expandIcon"];
}
export interface InnerAppSelect {
  /** 项目内可跳转的项目AppCode数组 */
  appList?: AppSelectProps["appList"];
}
/** 产品选择框 属性 */
export interface AppSelectParams {
  active: string;
  bannerId: string;
  options: IAppOption[];
  isI18N: boolean;
}
/** Top操作区 元素 */
export interface HeaderOpDoms {
  /** 默认布局样式 */
  Layout: ReactElement;
  HeaderOptionRender?: any;
  Feedback: ReactElement;
  Profile: ReactElement;
  FullScreen: ReactElement;
}
/** 侧边栏 元素 */
export interface AsideDoms {
  /** 默认布局样式 */
  Layout: ReactElement;
  CenterSelect: ReactElement;
  MenuBox: ReactElement;
  CollectList: ReactElement;
  Trigger: ReactElement;
}

/** 标签栏 元素 */
export interface BuTabsDoms {
  Tabs: ReactElement;
  Operation: ReactElement;
}
/**
 * profile下拉框元素
 */
export interface ProfileDropDownDoms {
  ProfileUserInfo: ReactElement;
  ProfileSettings: ReactElement;
  HomeBack: ReactElement;
  LogOut: ReactElement;
}

/** 标签栏 属性 */
export interface BuTabsProps {
  appId: string;
  permissionList: string[];
  menu: MenuItem[];
}

export interface AsideSE {
  /** 侧边栏是否展开 */
  collapsed: boolean;
}

/**
 * 分页数据
 */
export interface IResDataList<T = any> {
  current: number;
  dataList: T[];
  size: number;
  total: number;
}

/**
 * 获取应用的权限菜单列表
 */
export interface AppPermissionItem {
  /**
   *
   */
  accessScope: number;
  /**
   * 应用code
   */
  appCode: string;
  /**
   * 应用id
   */
  appId: number;
  /**
   * 组件ID
   */
  componentId: string;
  /**
   * 组件类型(0：菜单，1：链接，2：按钮，3：目录, 4：分组)
   */
  componentType: number;
  /**
   * 组件URL
   */
  componentUrl: string;
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * 主键（雪花算法）
   */
  id: string;
  /**
   * 国际化key
   */
  i18nKey: string;
  /**
   * 权限名称
   */
  name: string;
  /**
   * 排序序号
   */
  orderIdx: number;
  /**
   * 父节点ID
   */
  parentId: string;
  /**
   * 权限标识
   */
  permission: string;
}

/**
 * 角色的权限信息
 */
export interface RolePermissionInfo {
  /**
   * 选中的权限信息ID
   */
  permissionIds: string[];
  /**
   * 租户身份ID
   */
  tenantIdentityId: number;
}
/**
 * 角色信息
 */
export interface RoleInfos {
  /**
   *
   */
  adminFlag: boolean;
  /**
   * 角色编码
   */
  code: string;
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * 主键（雪花算法）
   */
  id: string;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 角色的权限信息
   */
  rolePermissionInfos: RolePermissionInfo[];
  /**
   * 租户id
   */
  tenantId: number;
}
/**
 * 查询当前用户信息
 */
interface UserInfo {
  /**
   * 默认头像图片的 code
   */
  avatarCode: string;
  /**
   * 头像图片的 OSS key
   */
  avatarFileKey: string;
  /**
   * 头像图片的链接
   */
  avatarFileUrl: string;
  /**
   * 组织架构ID
   */
  deptIdList?: string[];
  /**
   * 是否启用
   */
  enable?: boolean;
  /**
   * 主键（自增ID）
   */
  id?: string;
  /**
   * 邮箱地址
   */
  mail?: string;
  /**
   * 真实姓名
   */
  name?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 密码重置时间
   */
  pwdResetTime?: string;
  /**
   * 密码发送方式,多个以逗号分割(sms-短信，mail-邮件)
   */
  pwdSendType?: string;
  /**
   * 角色信息
   */
  roleInfos?: RoleInfos[];
  /**
   * 性别(0-male,1-female)
   */
  sex?: number;
  /**
   * 是否是通过切换用户操作登录的
   */
  switch2Login?: boolean;
  /**
   * 租户id
   */
  tenantId?: string;
  /**
   * 用户名
   */
  username?: string;
}

/**
 * 收藏菜单列表项
 */
export interface CollectionItem {
  /**
   * 组件Id
   */
  componentId: string;
  /**
   * 组件URL
   */
  componentUrl: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 菜单权限id，仅当当前的收藏为菜单时
   */
  permissionId: string;
  /**
   * 国际化key
   */
  i18nKey?: string;
}

/**
 * 获取当前用户对应应用的收藏菜单列表-返回体
 */
export type Collection = IResDataList<CollectionItem>;

export type AuthRes = IResDataList<AppPermissionItem>;

export type AppsRes = IResDataList<AppItem>;
