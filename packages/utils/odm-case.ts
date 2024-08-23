import configCenter from "@gw/odm-db";

export enum OdmCaseEnum {
  Goodwe = "goodwe",
  Baobi = "baobi",
  Shyd = "shyd",
}

/** 根据`configCenter.odmCase`返回合适的值 */
export function odmCaseFilter<T = any>(
  param: Partial<Record<OdmCaseEnum, T>>,
  defaultValue?: T
) {
  return param[configCenter.odmCase as OdmCaseEnum] || defaultValue;
}
