import type { TFunction, i18n } from "i18next";
/**
 * 上下文定义
 */
export interface I18nProviderProps {
  config?: I18nProviderConfig;
  children: any;
}
/**
 * 上下文提供的值
 */
export interface I18nProviderValue {
  /**
   * i18n实例
   */
  i18n: i18n;
  /**
   * 支持的语言集合
   */
  languageInfo: {
    id: string;
    name: string;
    code: string;
    label: string;
  }[];
  /**
   * 语言包加载loading
   */
  loading: boolean;
  /**
   * 当前语言
   */
  currentLanguage: string;
  /**
   * 变更语言
   */
  changeLanguage: i18n["changeLanguage"];
}

export interface I18nProviderConfig extends IProviderConfig {
  /**
   * 语言包url地址，作为参数在fetch(url, requestOptions)中使用;
   * @default "{{lng}}-{{ns}}"
   */
  loadPath?: string;
  /**
   * 上报缺少的语言key
   * @default ""
   */
  addPath?: string;
  /**
   * 加载多个语言包的分隔符
   */
  multiSeparator?: string;
  /**
   * 是否允许加载多个语言包标志符
   * @desc 如果允许，那么需要改变{ loadPath: "/locales/resources.json?lng={lng}&ns={ns}" };
   */
  allowMultiLoading?: boolean;
  /**
   * 解析fetch返回的数据
   */
  parse?: typeof JSON.parse;
  /**
   * 在上报缺少的语言key时候，指定序列化方式；
   */
  stringify?: typeof JSON.stringify;
  /**
   * 同fetch(url, requestOptions)中的参数
   */
  requestOptions?: RequestInit;
}

/**
 * 自定义属性
 */
interface IProviderConfig {
  /**
   * 产品名
   * @default common
   */
  appName?: string;
  /**
   * ManifestJson请求地址
   * @description 需要在项目中配置代理
   * @default "/languages/manifest.json"
   */
  languagesManifestUrl: string;
  /**
   *
   * @description 要加载的命名空间的字符串或数组
   * @default translation
   */
  defaultNs?: string;

  /**
   * 请求语言包失败时的兜底语言
   * @default en
   */
  fallbackLng?: string;
  /**
   * 是否开启debug
   */
  debug?: boolean;
  /**
   * 自定义domain
   */
  cookieDomain?: string;
}
