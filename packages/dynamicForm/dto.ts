import React from "react";
import type {
  FormInstance,
  FormItemProps,
  TreeDataNode,
  FormProps,
} from "@gw/web-basic-components";

/**
 * select和autoComplete下拉列表请求配置
 * @param apiName api名字
 * @param apiType api类型
 * @param key 备选项key
 * @param optionValue 下拉列表item对应value
 * @param optionLabel 下拉列表item对应label
 */
export interface requestConfig {
  apiName?: string;
  apiType?: string;
  key?: string;
  optionValue?: string;
  optionLabel?: string;
  /**
   * 接口调用后的回调，处理接口返回的数据
   */
  afterFetch?: (
    res: IResDataList<any>,
    formInstace?: FormInstance
  ) => Record<string, any> | any[];
  /**
   * 自定义接口参数
   */
  params?: Record<string, any>;
}

export type InputType =
  | "text"
  | "number"
  | "textarea"
  | "singleSelect"
  | "multipleSelect"
  | "set"
  | "boolean"
  | "checkbox"
  | "tree"
  | "password"
  | "treeSelect"
  | "autoComplete"
  | "date"
  | "dateTime";

export interface FormItem extends FormItemRequestProps {
  label: string;
  inputType: InputType;
  contentType?: string;
  rules?: FormItemProps["rules"];
  options?: {
    label: string;
    value: string | boolean | number;
    disabled?: boolean;
  }[];
  canSort?: boolean;
  sortValue?: string;
  value?: any;
  apiName?: string; // api名字
  placeholder?: string;
  multiple?: boolean;
  /** treeSelect 组件默认展示的树形数据 */
  treeData?: FlatData[];
  disabled?: boolean;
  requestConfig?: requestConfig;
  /**
   * 暂时提供给 autocomplete 使用
   */
  name?: string;
  /**
   * 是否带有清除按钮
   * TODO: 目前只实现了 tree-select
   */
  clear?: boolean;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 接口参数
   */
  extraParams?: Record<string, any>;
  /**
   * 过滤树节点
   */
  filterNode?: (list: FlatData[]) => FlatData[];
  /**
   * 自定义表单项 需要遵循antd自定义表单控件规范
   */
  render?: (
    params: Omit<FormItem, "inputType" | "valueField" | "formInstance">
  ) => React.ReactNode;

  [param: string]: any;
}
/**
 * 多章节表单项定义
 */
export interface FormGroupData {
  basic: FormItem[];
  [param: string]: FormItem[];
}

export type IDynamicFormProps = {
  style?: React.CSSProperties; // 内部样式
  className?: string; // 包装器类名
  formGroupData?: FormGroupData;
  record?: any;
  extendsButton?: ButtonConfig[];
  /**
   * 表单章节名
   */
  formGroupName?: Record<string, string>;
  onOk?: (event, type?: string, loading?: (param: boolean) => void) => any; // type 按钮类型 save：保存 copyContinue：复制新增  saveContinue：保存并继续新增
  onCancel?: (event) => any;
  onFormReady?: (
    form: FormInstance<any>,
    setFormData: React.Dispatch<
      React.SetStateAction<Record<string, FormItem[]>>
    >
  ) => void;
  /**
   * 表单值变更时回调
   */
  onValuesChange?: (val: any, all: any) => void;
} & Pick<FormProps, "preserve">;

export interface FormGroupContent {
  basic?: any;
  info?: any;
  subItems?: any;
}

export interface FlatData extends TreeDataNode {
  id: string;
  parentId?: string;
  parentRef?: FlatData;
  children?: FlatData[];
  /** 是否是叶子节点 */
  isLeaf?: boolean;
}

/**
 * 表单底部按钮类型
 */
export type ButtonType = "save" | "copyContinue" | "saveContinue" | "cancel";

/**
 * 表单底部按钮配置
 * @param type 按钮类型
 * @param label 按钮文字
 */
export interface ButtonConfig {
  type: ButtonType;
  label: string;
}
