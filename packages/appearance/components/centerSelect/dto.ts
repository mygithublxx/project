import type { MenuItem } from "../../hooks/dto";

/**
 * 中心选择下拉框定义
 */
export interface CenterSelectProps {
  className?: string;
  collapsed?: boolean;
  data?: MenuItem[];
  /** 是否启用中心列表 */
  enable?: boolean;
  value?: string;
  /** 中心切换回调 */
  onCenterChange?: (item: MenuItem) => void;
}
