import {
  MICROGRID,
  STORAGE,
  PHOTOVOLTAIC,
  CHARGE,
  WIND,
} from "../../../packages/wiring-diagram/const";

/**
 * 主数据列表
 */
export interface AttributeList {
  /**
   * 属性编码
   */
  attributeCode: string;
  /**
   * 主数据对应的可选项
   */
  attributeInfoOptions: AttributeInfoOptions[];
  /**
   * 属性名称
   */
  attributeName: string;
  /**
   * 必填项.true:必填;false:非必填
   */
  attributeRequired: boolean;
  /**
   * 属性输入类型代码
   */
  attributeTypeCode: string;
  /**
   * 属性输入类型文字
   */
  attributeTypeName: string;
  /**
   * 校验的正则表达式
   */
  checkRegex: string;
  /**
   * 默认选项的主数据code
   */
  defaultOptionCode: string;
  /**
   * 是否有效
   */
  enable: boolean;
  /**
   * 属性是否可见
   */
  visible: boolean;
}
/**
 * 物模板信息, 只有分页查询中会返回
 */
export interface ThingTemplateInfos {
  /**
   * 主数据列表
   */
  attributeList: AttributeList[];
  /**
   * 模板编码
   */
  code: string;
  /**
   * 主键
   */
  id: string;
  /**
   * 信息模型id
   */
  imcPatternId: number;
  /**
   * 模板名称
   */
  name: string;
  /**
   * 父节点模板编码
   */
  parentCode: string;
  /**
   * 物模板分类(0-实体物,1-项目物,2-虚拟物)
   */
  templateCategory: number;
  /**
   * 模板类型
   */
  templateType: string;
}
/**
 *
 */
export interface AttributeInfoOptions {
  /**
   * 编码
   */
  attributeCode: string;
  /**
   * 可选项集合
   */
  attributeInfoOptions: AttributeInfoOptions[];
  /**
   * 名称
   */
  attributeName: string;
  /**
   * 属性是否必须
   */
  attributeRequired: boolean;
  /**
   * 数据类型编码
   */
  attributeTypeCode: string;
  /**
   * 数据类型名称
   */
  attributeTypeName: string;
  /**
   * 校验的正则表达式
   */
  checkRegex: string;
  /**
   * 默认选项的主数据code
   */
  defaultOptionCode: string;
  /**
   *
   */
  enable: boolean;
  /**
   * 主键id
   */
  id: string;
  /**
   * 重要等级: 1-普通 2-重要
   */
  importanceLevel: number;
  /**
   * 物模板信息, 只有分页查询中会返回
   */
  thingTemplateInfos: ThingTemplateInfos[];
  /**
   * 是否被使用：true-被使用，false-未被使用
   */
  used: boolean;
  /**
   * 属性是否可见
   */
  visible: boolean;
}
/**
 *
 */
export interface AttributeValues {
  /**
   *
   */
  attributeCode: string;
  /**
   *
   */
  attributeInfoOptions: AttributeInfoOptions[];
  /**
   *
   */
  attributeName: string;
  /**
   *
   */
  attributeRequired: boolean;
  /**
   *
   */
  attributeTypeCode: string;
  /**
   *
   */
  attributeTypeName: string;
  /**
   *
   */
  attributeValue: string;
  /**
   *
   */
  attributeValueName: string;
  /**
   *
   */
  enable: boolean;
  /**
   *
   */
  id: string;
  /**
   *
   */
  templateCode: string;
  /**
   *
   */
  templateType: string;
  /**
   *
   */
  tenantId: number;
  /**
   *
   */
  thingCode: string;
  /**
   *
   */
  thingId: number;
  /**
   *
   */
  visible: boolean;
}
/**
 *
 */
export interface ExtraInfoList {
  /**
   * 额外信息的key
   */
  extraKey: string;
  /**
   * 额外信息的value
   */
  extraValue: string;
  /**
   * 主键id
   */
  id: string;
  /**
   * 模板编码
   */
  templateCode: string;
  /**
   * 模板类型
   */
  templateType: string;
  /**
   * 物编码
   */
  thingCode: string;
  /**
   * 物id
   */
  thingId: number;
}
/**
 *
 */
export interface ThingTemplateInfo {
  /**
   *
   */
  attributeList: AttributeList[];
  /**
   *
   */
  code: string;
  /**
   *
   */
  id: string;
  /**
   *
   */
  imcPatternId: number;
  /**
   *
   */
  name: string;
  /**
   *
   */
  parentCode: string;
  /**
   *
   */
  templateCategory: number;
  /**
   *
   */
  templateType: string;
}
/**
 * 按照条件查询项目物（综合能源,场站,分布式光伏电站）
 */
export interface IGridList {
  /**
   *
   */
  attributeValues: AttributeValues[];
  /**
   *
   */
  code: string;
  /**
   *
   */
  extraInfoList: ExtraInfoList[];
  /**
   *
   */
  id: string;
  /**
   *
   */
  mobileFlag: boolean;
  /**
   *
   */
  msgType: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  nodeIdList: any[];
  /**
   *
   */
  parentCode: string;
  /**
   *
   */
  parentId: number;
  /**
   *
   */
  parentName: string;
  /**
   *
   */
  priceTemplateCategoryId: number;
  /**
   *
   */
  projectId: number;
  /**
   *
   */
  shared: boolean;
  /**
   *
   */
  templateCategory: number;
  /**
   *
   */
  templateCode: string;
  /**
   *
   */
  templateName: string;
  /**
   *
   */
  templateType: string;
  /**
   *
   */
  tenantId: number;
  /**
   *
   */
  thingTemplateInfo: ThingTemplateInfo;
  category?: string;
}

export const categoriesFull = [
  { label: "园区", value: MICROGRID },
  { label: "储能", value: STORAGE },
  { label: "光伏", value: PHOTOVOLTAIC },
  { label: "充电", value: CHARGE },
  { label: "风电", value: WIND },
];
