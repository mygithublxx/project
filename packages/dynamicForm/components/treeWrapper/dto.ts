import React from "react";
import type { FlatData } from "../../dto";

export interface ITreeWrapperProps {
  style?: React.CSSProperties; // 内部样式
  className?: string; // 包装器类名
  record: Record<string, any>; // 选中的角色
  visible: boolean;
  apiName: string;
  checkedKeys?: string[];
  value?: string[];
  checkedChange?: (event) => any;
}

export interface permissionItem extends FlatData {
  appId: string;
  componentId: string;
  /**
   * 组件类型  0：菜单，1：链接，2：按钮，3：目录
   */
  componentType: 0 | 1 | 2 | 3;
  componentUrl: string;
  createTime: string;
  creator: string;
  enable: boolean;
  id: string;
  parentId: string;
  name: string;
  subCount: number;
  updateTime: string;
  updater: string;
  visible: boolean;
  selected: boolean;
}

export interface RolePermission {
  roleId: string;
  permissions: {
    permissionInfo: permissionItem;
    selected: boolean;
  }[];
}

export interface TenantPermission {
  id: string;
  name: string;
  permissionInfoList: permissionItem[];
}

export interface TreeConfig {
  expandAll: boolean;
  selectAll: boolean;
  checkStrictly?: boolean;
  checkUnstrictly: boolean;
}

export const TreeTitleField = "name";

/**
 * 基础权限
 */
export interface PermissionBase {
  key: string;
  componentId: string;
  componentType: number;
  componentUrl: string;
  id: string;
  name: string;
  parentId: string;
  permission: string;
  selected: boolean;
}

/**
 * 提供组件方法
 */
export interface IdentityTreeRef {
  /**
   * 重置全部展开和全选
   */
  resetCheckBox: () => void;
}

/**
 * 身份权限树
 */
export interface IndentifyTreeProps<T extends PermissionBase> {
  /**
   * 树数据
   */
  data: T[];
  /**
   * 选中数据
   */
  selectKeys: string[];
  /**
   * 选中发生变化
   */
  onCheckedChange?: (keys: string[]) => void;
  /**
   * 样式
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export type IndentifyTreeComponents = <T extends PermissionBase>(
  props: IndentifyTreeProps<T>,
  ref: React.ForwardedRef<IdentityTreeRef>
) => JSX.Element;
