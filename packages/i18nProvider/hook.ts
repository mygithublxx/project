import { useContext } from "react";
import { I18nContext } from "./context";
/**
 * 获取建站生命周期上下文
 * @deprecated 已迁移，请改为 import { useI18n } from "@gw/gw-arch";
 */
export const useI18n = () => {
  const context = useContext(I18nContext);

  return context;
};
