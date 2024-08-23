import React from "react";
import I18N from "i18next";
import type { I18nProviderValue } from "./dto";

/**
 * 创建上下文
 */
export const I18nContext = React.createContext<I18nProviderValue>({
  i18n: I18N,
  languageInfo: [],
  changeLanguage: undefined,
  loading: false,
  currentLanguage: "",
});
