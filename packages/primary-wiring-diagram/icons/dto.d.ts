import React from "react";
import { MetaItem } from "../dto";

export interface MetaIconComponent<T = {}> {
  (props?: T): React.ReactElement;

  /**
   * 元件名称
   */
  metaName: string;
  id: number;
}

interface IconEditProps {
  uuid: string;
  x: number;
  y: number;
  width: number;
  height: number;

  /**
   * 容器
   */
  safeArea: {
    width: number;
    height: number;
  };
  onResizeEnd?: (e: MetaItem) => void;
  /**
   * 编辑图形
   */
  onEdit?: (uuid: string) => void;
  Edit?: React.ComponentType;
}

/**
 * static 静态展示
 * operational 可操作
 */
export type IconType = "static" | "operational";
export type IconProps<T extends IconType> = {
  type: T;
  id: string;
  /**
   * 是否可以拖动
   */
  draggable: boolean;
} & (T extends "operational" ? IconEditProps : {});
