import { AppearanceProps } from "../../dto";

/**
 * 产品选择下拉框属性
 */
export interface AppSelectProps extends Pick<AppearanceProps, "isI18N"> {
  className?: string;
  /**
   * 当前app
   */
  value: string;
  /**
   * app备选项
   */
  data: AppItem[];
  /**
   * 自定义渲染
   */
  renderModule?: AppearanceProps["renderModule"]["appSelect"];
  /**
   * 覆盖可跳转的应用 只支持在后端注册过的应用
   * @description bg-图片地址，相当于在url函数中写，只支持cdn
   */
  appList?: { code: string; bg: string }[];
  /**
   * 切换app回调
   */
  onChange?: (code: AppearanceProps["app"]) => void;
  /**
   * select 展开或者收起的回调
   */
  onCollapsed: (collapsed: boolean) => void;
  /**
   * 下拉收起和展开状态
   */
  collapsed: boolean;
}

export interface IAppOption {
  label: string;
  value: string;
  index: number;
  i18nKey: string;
  bg: string;
}

/**
 * 应用分组信息
 */
export interface IGroupInfo {
  /**
   * 分组id
   */
  groupId: number;
  /**
   * 分组内顺序
   */
  order: number;
  /**
   * 是否显示
   */
  show: boolean;
}

/**
 * 数据集合
 */
export interface AppItem {
  /**
   * 应用编码
   */
  code: string;
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 创建者姓名
   */
  creator: string;
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * 应用分组信息
   */
  groupInfo: IGroupInfo[];
  /**
   * 国际化语言键
   */
  i18nKey: string;
  /**
   * 主键
   */
  id: string;
  /**
   * 是否是微信小程序
   */
  isMiniApp: boolean;
  /**
   * 应用名称
   */
  name: string;
  /**
   * 更新时间
   */
  updateTime: string;
  /**
   * 更新者姓名
   */
  updater: string;
}
