import { ReactNode } from "react";
import { AppearanceProps } from "../../../appearance/dto";

/**
 * Logo 区域属性定义
 */
export interface LogoProps extends Pick<AppearanceProps, "app"> {
  /**
   * 区域是否收起
   */
  collapsed?: boolean;
  /**
   * 外部样式
   */
  className?: string;
  /**
   * 自定义渲染
   */
  renderModule?: AppearanceProps["renderModule"]["logo"];
}

/**
 * 产品logo
 */
export type Logos = readonly [ReactNode, ReactNode];
/**
 * 产品logo映射
 */
export type LogoMap = Record<AppearanceProps["app"], Logos>;

/**
 * 获取租户对应应用的logo
 */
export interface LogoReq {
  /**
   * 应用 code，支持 Seeds、Seeds-Pro、We-Seeds(演示模式)、We-Seeds-Pro(工作模式)、（不区分大小写）,示例值(Seeds-Pro)
   */
  applicationCode: string;
}

/**
 * 获取租户对应应用的logo
 */
export interface LogoRes {
  /**
   * 页面logo文件的URL
   */
  pageLogoFileUrl: string;
  /**
   * 正方形logo文件的URL
   */
  squareLogoFileUrl: string;
  /**
   * 水印logo文件的URL
   */
  watermarkFileUrl: string;
}
