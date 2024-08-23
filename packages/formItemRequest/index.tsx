import React, { useEffect, useState } from "react";
import { useBusinessConfig } from "..";
import type { FormItem } from "../dynamicForm/dto";
import styles from "./index.module.less";
/**
 * 为表单控件提供接口返回结果
 * @deprecated 1.x版本组件，不再维护，请尽快迁移至本地项目
 */
const FormItemRequest = (props: FormItem) => {
  const { formInstance, requestConfig, children, ...throughProps } = props;
  if (!React.isValidElement(props.children)) {
    return <div className={styles.replace}></div>;
  }
  if (!requestConfig?.apiName) {
    return React.cloneElement(children, throughProps);
  }
  const { apis, useRequest } = useBusinessConfig();

  // 自定义需要从接口返回值映射的props
  const [propsWithFetch, setPropsWithFetch] = useState<Record<string, any>>({});

  const [, fetchRes] = useRequest(
    apis?.[requestConfig?.apiName]?.[requestConfig?.apiType]
  );

  /**
   * 获取接口返回结果
   */
  const getOptions = async () => {
    const res = await fetchRes(requestConfig.params ?? { size: -1 });
    let newRes: Record<string, any> = { options: res?.dataList };
    if (requestConfig.afterFetch) {
      const customRes = requestConfig.afterFetch(res, formInstance);
      if (Array.isArray(customRes)) {
        newRes = { options: customRes };
      } else {
        newRes = customRes;
      }
    }
    setPropsWithFetch(newRes);
  };

  useEffect(() => {
    getOptions();
  }, [requestConfig?.apiName, requestConfig?.apiType]);

  return React.cloneElement(props.children, {
    ...throughProps,
    ...propsWithFetch,
  });
};

export default FormItemRequest;
