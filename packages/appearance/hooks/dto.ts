import React from "react";
import type { TreeDataNode } from "antd";
import type { AppPermissionItem } from "../dto";

export interface IMenuResult {
  /** 根据权限过滤后的菜单信息列表 */
  authMenuList: AppPermissionItem[];
  /** 权限id列表 */
  permissionList: string[];
  /** 转为树结构之前且未经过类型处理的菜单信息数组 */
  fullMenu: MenuItem[];
  /** 完全处理好的树形结构菜单 */
  menu: MenuItem[];
}

export interface FlatData extends TreeDataNode {
  id: string;
  parentId?: string;
  parentRef?: MenuItem;
  children?: MenuItem[];
  /** 是否是叶子节点 */
  isLeaf?: boolean;
}

/** 菜单项属性 */
export interface MenuItem extends FlatData {
  /** 菜单项别名 */
  label: React.ReactNode;
  /** 菜单项别名字符串  */
  labelstring: string;
  /** 菜单点击跳转地址 */
  key: string;
  /** 菜单图标 */
  icon: string | JSX.Element;
  /** 主键 */
  id: string;
  /** 父节点ID */
  parentId: string;
  /** 排序号 */
  orderIdx: number;
  /** 类型 */
  type: string;
  /** 菜单项名称 */
  title: string;
  cid: string;
  visible?: boolean;
  [k: string]: any;
}
