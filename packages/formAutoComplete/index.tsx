import React, { useState } from "react";
import { useBusinessConfig } from "..";
import { AutoComplete } from "@gw/web-basic-components";
import type { IFormAutoCompleteProps } from "./dto";

/**
 * 动态表单自动完成
 * @deprecated 1.x版本组件，不再维护，请尽快迁移至本地项目
 */
const FormAutoComplete = ({
  requestConfig,
  options,
  onChange,
  value,
  initContent,
  extraParams,
  ...rest
}: IFormAutoCompleteProps) => {
  const { apis, useRequest } = useBusinessConfig();
  /**
   * 选中的 value
   */
  const [selectedValue, setSelectedValue] = useState<string>(value);
  /**
   * 下拉列表数据
   */
  const [listOptions, setListOptions] = useState(options);
  /**
   * 输入框内容
   */
  const [inputContent, setInputContent] = useState(initContent);
  /**
   * 下拉列表请求
   */
  const [, getSelectOptions] = useRequest(
    apis[requestConfig?.apiName]?.[requestConfig?.apiType]
  );
  /**
   * 搜索
   * @param searchValue 关键词
   */
  const handleOnSearch = (searchValue: string) => {
    if (requestConfig?.apiName) {
      getSelectOptions({
        type: requestConfig?.key,
        query: searchValue,
        size: 10,
        returnFieldNames: [
          requestConfig.optionLabel,
          requestConfig.optionValue,
        ],
        ...extraParams,
      }).then((res: any) => {
        const list = res?.dataList.map((item) => {
          return {
            label: item?.value[requestConfig?.optionLabel],
            value: item?.value[requestConfig?.optionValue],
          };
        });
        setListOptions(list);
      });
    }
  };

  return (
    <AutoComplete
      {...rest}
      options={listOptions}
      value={inputContent}
      onBlur={() => {
        if (!selectedValue) {
          setInputContent("");
        }
      }}
      onChange={(e) => {
        setInputContent(e);
      }}
      onSelect={(valueStr, option: { value: string; label: string }) => {
        setInputContent(option?.label);
        setSelectedValue(valueStr);
        onChange(valueStr);
      }}
      onSearch={handleOnSearch}
      allowClear
      onClear={() => {
        onChange(undefined);
      }}
    ></AutoComplete>
  );
};

export default FormAutoComplete;
