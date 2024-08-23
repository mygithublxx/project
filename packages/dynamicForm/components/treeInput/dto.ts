import React from "react";
export interface ITreeInputProps {
  style?: React.CSSProperties; // 内部样式
  className?: string; // 包装器类名
  value?: any;
  checkedKeys?: string[];
  onChange?: (event) => any;
  data?: any[];
}
