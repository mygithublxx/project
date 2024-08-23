import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  InputNumber,
  Radio,
  Checkbox,
  DatePicker,
  Form,
  Select,
  Input,
} from "@gw/web-basic-components";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import GWFormItemRequest from "../formItemRequest";
import GWFormAutoComplete from "../formAutoComplete";
import { TreeInput, OrganizationInput } from "./components";
import { groupTitle, validateMessages, onGroupWithoutTtile } from "./config";
import type { FormItem, IDynamicFormProps } from "./dto";
import styles from "./index.module.less";
import { pick } from "@gw/gw-utils";

const size = "large";

function deepMerge(obj1: Record<string, any>, obj2: Record<string, any>) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj2;
  }

  const merged = { ...obj1 };

  for (const key in obj2) {
    if (
      obj2[key] &&
      typeof obj2[key] === "object" &&
      obj1[key] &&
      typeof obj1[key] === "object"
    ) {
      merged[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      // console.log(obj1, obj2);

      merged[key] = obj2[key];
    }
  }

  return merged;
}
/**
 * 支持多组动态表单
 * @deprecated 1.x版本组件，不再维护，请尽快迁移至本地项目
 */
const DynamicForm = (props: Omit<IDynamicFormProps, "onOk" | "onCancel">) => {
  const {
    formGroupData,
    style,
    className,
    formGroupName,
    onFormReady,
    onValuesChange,
    extendsButton,
    ...restFormProps
  } = props;

  const [form] = Form.useForm();
  /**
   * 表单配置数据
   */
  const [formData, setFormData] = useState(formGroupData);

  /**
   * 移除不合法的 react dom 元素
   */
  const omitFormItem = useCallback((item: FormItem) => {
    const currItem = cloneDeep(item);
    delete currItem.inputType;
    delete currItem.valueField;
    delete currItem.formInstance;
    return currItem;
  }, []);
  /**
   * 渲染表单控件
   */
  const renderFormItem = useCallback(
    (formItem: FormItem) => {
      if (formItem.render) {
        return formItem.render({ ...omitFormItem(formItem) });
      }
      switch (formItem.inputType) {
        case "text":
          return (
            <Input
              placeholder={`请输入${formItem.label}`}
              maxLength={64}
              {...omitFormItem(formItem)}
              size={size}
            />
          );
        case "number":
          return (
            <InputNumber
              style={{ width: "100%" }}
              placeholder={`请输入${formItem.label}`}
              maxLength={64}
              size={size}
              {...omitFormItem(formItem)}
            />
          );
        case "textarea":
          return (
            <Input.Textarea
              placeholder={`请输入${formItem.label}`}
              maxLength={200}
              rows={4}
              {...omitFormItem(formItem)}
            />
          );
        case "multipleSelect":
        case "singleSelect":
        case "set":
          return (
            <GWFormItemRequest {...omitFormItem(formItem)}>
              <Select
                size={size}
                style={{ width: "100%" }}
                mode={
                  formItem.inputType === "multipleSelect"
                    ? "multiple"
                    : undefined
                }
                placeholder={`请选择${formItem.label}`}
                allowClear
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) => {
                  const { label } = option;
                  if (typeof label === "string")
                    return (
                      label?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
                    );
                  return false;
                }}
                getPopupContainer={(reff) => (reff = reff.parentNode)}
                {...pick(formItem, ["value", "onChange"])}
              ></Select>
            </GWFormItemRequest>
          );
        case "boolean":
          return <Radio.Group {...omitFormItem(formItem)}></Radio.Group>;
        case "checkbox":
          return (
            <GWFormItemRequest {...omitFormItem(formItem)}>
              <Checkbox.Group />
            </GWFormItemRequest>
          );
        case "tree":
          return (
            <GWFormItemRequest
              {...omitFormItem(formItem)}
              formInstance={formItem.formInstance}
            >
              <TreeInput />
            </GWFormItemRequest>
          );
        case "password":
          return (
            <Input.Password
              placeholder={`请输入${formItem.label}`}
              maxLength={64}
              size={size}
              {...omitFormItem(formItem)}
            />
          );
        case "treeSelect":
          return (
            <OrganizationInput
              placeholder={`请输入${formItem.label}`}
              size={size}
              filter={formItem.filterNode}
              {...omitFormItem(formItem)}
              id={formItem.name}
            />
          );
        case "autoComplete":
          return (
            <GWFormAutoComplete
              placeholder={`请输入${formItem.label}`}
              size={size}
              {...omitFormItem(formItem)}
            />
          );
        case "date":
          return (
            <DatePicker
              picker="date"
              size="large"
              placeholder={`请选择${formItem.label}`}
              style={{ width: "100%" }}
              {...omitFormItem(formItem)}
              getPopupContainer={(triggerNode: any) => triggerNode}
            />
          );
        case "dateTime":
          return (
            <DatePicker
              size="large"
              placeholder={`请选择${formItem.label}`}
              picker="date"
              format="YYYY-MM-DD HH:mm:ss"
              showTime={true}
              style={{ width: "100%" }}
              {...omitFormItem(formItem)}
              getPopupContainer={(triggerNode: any) => triggerNode}
            />
          );
        default:
          break;
      }
    },
    [formData]
  );
  /**
   * 封装formItem,透传属性
   */
  const MyFormItem = useCallback(
    (item: { formGroupKey: string; formItem: FormItem }) => {
      const { rules, validateFirst, validateTrigger, ...throughItemParmas } =
        item.formItem;

      return (
        <Form.Item
          key={item.formItem.name}
          name={[item.formGroupKey, item.formItem.name]}
          label={item.formItem.label}
          rules={rules}
          validateFirst={validateFirst}
          validateTrigger={validateTrigger}
        >
          {renderFormItem(throughItemParmas)}
        </Form.Item>
      );
    },
    [formData]
  );
  /**
   * 构建初始值
   */
  const initialValuesFormat = useMemo(() => {
    const initialValues = {};
    Object.keys(formData)?.forEach((formGroupKey) => {
      initialValues[formGroupKey] = {};
      formData[formGroupKey]?.forEach((formItem) => {
        initialValues[formGroupKey][formItem.name] = formItem.value;
      });
    });
    const f = form.getFieldsValue();
    const merged = deepMerge(initialValues, f);
    form.setFieldsValue(merged);

    return merged;
  }, [formData]);

  useEffect(() => {
    onFormReady(form, setFormData);
  }, []);
  /**
   * 数据变化
   */
  useEffect(() => {
    setFormData(formGroupData);
  }, [formGroupData]);

  return (
    <div style={style} className={classNames(styles.dynamicForm, className)}>
      <Form
        name="nest-messages"
        validateMessages={validateMessages}
        form={form}
        scrollToFirstError={{
          behavior: "smooth",
          block: "center",
          inline: "center",
        }}
        initialValues={initialValuesFormat}
        onValuesChange={onValuesChange}
        labelCol={{ span: 6 }}
        {...restFormProps}
      >
        {Object.keys(formData)
          .filter((m) => formData[m])
          .map((formGroupKey) => {
            const title = { ...groupTitle, ...formGroupName }[formGroupKey];
            if (!title) {
              onGroupWithoutTtile(formGroupKey);
            }
            return (
              <div key={formGroupKey}>
                {Object.keys(formData).length > 1 &&
                  formData[formGroupKey].length > 0 && (
                    <div className={styles.title}>
                      <div className={styles.cutLine} />
                      <span className={styles.name}>
                        {title ?? formGroupKey}
                      </span>
                    </div>
                  )}
                <div key={formGroupKey}>
                  {
                    formData[formGroupKey].map((formItem) =>
                      MyFormItem({ formGroupKey, formItem })
                    )
                    //  {
                    //   return (
                    //     <MyFormItem
                    //       key={formItem.name}
                    //       formGroupKey={formGroupKey}
                    //       formItem={{ ...formItem, formInstance: form }}
                    //     />
                    //   );
                    // })}
                  }
                </div>
              </div>
            );
          })}
      </Form>
    </div>
  );
};

export default DynamicForm;
export { validateMessages };
