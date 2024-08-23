import { ButtonProps } from "@gw/web-basic-components";
/**
 *  自定义表单校验信息模板
 */
export const validateMessages = {
  required: "${label}是必填的!",
  pattern: {
    mismatch: "${label}不合法",
  },
  types: {
    email: "${label}不是合法的邮箱!",
    number: "${label}不是有效的数字!",
  },
  number: {
    range: "${label} 在 ${min} 到 ${max}之间",
  },
  string: {
    min: " ${label}  不能少于 ${min} 个字符",
    max: " ${label}  不能超过 ${max} 个字符",
    range: " ${label}  的长度必须在 ${min} 到 ${max} 个字符之间",
  },
};

/**
 * 表格分组默认标题
 */
export const groupTitle = {
  basic: "基本信息",
  info: "详细信息",
};
/**
 * 表格分组无标题提示信息
 */
export const onGroupWithoutTtile = (groupkey: string) => {
  console.log(
    `若需要中文标题，请在props的formGroupName为键:${groupkey}添加相应的值来显示你期望的标题。`
  );
};

/**
 * 表单底部按钮样式类型
 */
const buttonType: (type: string) => ButtonProps["type"] = (type) => {
  switch (type) {
    case "save":
      return "primary";
    case "copyContinue":
      return "primary";
    case "saveContinue":
      return "primary";
    default:
      return "default";
  }
};

/**
 * 表单底部按钮事件类型
 */
const buttonHtmlType: (type: string) => ButtonProps["htmlType"] = (type) => {
  switch (type) {
    case "save":
    case "copyContinue":
    case "saveContinue":
      return "submit";
    default:
      return "button";
  }
};
/**
 * 定义按钮类型
 */
export const btnDef = { buttonType, buttonHtmlType };
