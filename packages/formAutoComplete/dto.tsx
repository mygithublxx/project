import type { AutoCompleteProps } from "@gw/web-basic-components";
import type { requestConfig } from "../dynamicForm/dto";

/**
 * @param requestConfig 请求配置
 */
export interface IFormAutoCompleteProps extends AutoCompleteProps {
  requestConfig?: requestConfig;
  onChange?: (e) => void;
  value?: string;
  /**
   * 自动完成编辑时的名称
   */
  initContent?: string;
  /**
   * 列表数据请求额外参数
   */
  extraParams?: Record<string, any>;
  options?: any[];
}
