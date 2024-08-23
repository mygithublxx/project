import React from "react";
import type { FlatData } from "../../dto";

export interface IOrganizationProps {
  style?: React.CSSProperties; // 内部样式
  className?: string; // 包装器类名
  value?: any;
  apiName?: string;
  /**
   * 获取树节点接口的额外参数
   */
  extraParams?: Record<string, any>;
  onChange?: (event) => any;
  placeholder?: string;
  treeData?: FlatData[];
  multiple?: boolean;
  disabled?: boolean;
  id?: string;
  onSelect?: (e) => void;
  /**
   * 是否带清除按钮
   */
  clear?: boolean;
  /**
   * 对树节点进行过滤
   */
  filter?: (list: FlatData[]) => FlatData[];
}
