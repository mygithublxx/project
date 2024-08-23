import { CSSProperties, ReactChild } from "react";

export type OnClickEvent = (message: any) => void;

export type OnRouterChange = (url: string) => void;

export interface InitReactTrack {
  onClickEvent?: OnClickEvent;
}

export interface IActionTrackContext {
  // 用户手动上传信息
  reportTabInfo?: (params: IComponentTrackInfo) => void;
  getComponentId?: (componentName: string) => void;
  /**
   * 组装埋点信息数据
   * @param componentName 待埋点的组件的唯一标识名
   * @param extra 待埋点的组件的额外数据
   * @returns
   */
  getTrackData?: (componentName: string, extra?: Record<string, any>) => void;
}

export interface ActionTrackInfo extends IPlatformData, IPageTrackInfo {
  /**
   * 客户端ip,示例值(192.168.1.1)
   */
  clientIp: string;
  /**
   * 组件标识,示例值(create_station)
   */
  component?: string;
  /**
   * 扩展字段,示例值({ "key": "val" })
   */
  ext?: Record<string, any>;
  /**
   * 事件触发时间,示例值(1665540582000)
   */
  tp?: number;
  /**
   * 用户id,示例值(12341231223)
   */
  userId?: string;
  /**
   * 行为分类，e.g. page-view
   */
  operationType?: string;
  /**
   * 暂时保留，兼容老版本
   */
  [key: string]: any;
}

export interface ActionTrackProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactChild;
  disabled?: boolean;
  /**
   * 上报埋点 mqtt 的 topic
   */
  topic?: string;
  /**
   * 本地项目中的路由配置
   */
  routes?: any;
  /**
   * 是否内置 mqtt
   */
  buildInMqtt?: boolean;
  /**
   * 应用编码
   */
  applicationCode?: string;
  /**
   * 外部数据
   */
  trackInfo?: ActionTrackInfo;
  /**
   * 外部上报方法
   */
  customReport?: (info: ActionTrackInfo) => void;
  /**
   * 取消上报标志
   */
  cancelReport?: boolean;
}

/**
 * 客户端登录保存的信息
 */
export interface UserInfo {
  /**
   * 用户ID
   */
  id?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 是否是切换用户方式登录，不传默认false,示例值(true)
   */
  switch2Login?: boolean;
  /**
   * 切换人用户id，switchLogin为true时必传,示例值(123)
   */
  switchOperatorUserId?: string;
  /**
   * 客户端IP，默认获取 current 接口，会返回
   */
  clientIp?: string;
}

/**
 * 平台测定义
 */
export interface IPlatformData {
  /**
   * 访问设备
   */
  accessDevice?: string;
  /**
   * 应用code
   */
  applicationCode?: string;
  /**
   * 扩展信息
   */
  extInfo?: Record<string, string>;
  /**
   * 设备型号, e.g. chrome 117
   */
  deviceModel?: string;
  /**
   * 菜单ID，等待修改为菜单的 componentId
   */
  permissionId?: string;
  /**
   * 是否是切换用户方式登录，不传默认false,示例值(true)
   */
  switchLogin?: boolean;
  /**
   * 切换人用户id，switchLogin为true时必传,示例值(123)
   */
  switchOperatorUserId?: string;
}

/**
 * 页面信息
 */
export interface IPageTrackInfo {
  /**
   * 页面的组件ID，需要本地项目的配置与线上菜单配置一致
   */
  componentId?: string;
  /**
   * 页面的参数，e.g. stationId inverterId
   */
  param?: Record<string, string>;
}

/**
 * 组件上报
 */
export interface IComponentTrackInfo {
  /**
   * 页面的组件ID，需要本地项目的配置与线上菜单配置一致
   */
  componentId?: string;
  /**
   * 组件类型
   */
  type: "tab";
}
