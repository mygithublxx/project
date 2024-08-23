import React, { useEffect, useState } from "react";
import { flat2TreeWrapper } from "@gw/gw-utils";
import { TreeSelect } from "@gw/web-basic-components";
import { TREE_CONFIG } from "./config";
import { useBusinessConfig } from "../../../utils/business-config";
import type { IOrganizationProps } from "./dto";

const OrganizationInput = (props: IOrganizationProps) => {
  const { apis, useRequest } = useBusinessConfig();

  const [value, setValue] = useState(props.value);
  const [treeData, setTreeData] = useState([]);
  const [, getTreeNodes] = useRequest(apis[props.apiName]?.index);
  const triggerChange = (changedValue: string[]) => {
    props.onChange?.(changedValue);
  };

  /**
   * 输入值变化
   */
  const onChange = (newValue: any) => {
    setValue(newValue);
    triggerChange(newValue);
  };

  /**
   * 选择树
   */
  const onSelect = (e) => {
    if (props.onSelect) {
      props.onSelect(e);
    }
  };

  useEffect(() => {
    if (props.apiName && props.id) {
      getTreeNodes({
        ...(props?.extraParams && props.extraParams),
        size: -1,
      }).then((res: IResDataList<any>) => {
        let flatData = res.dataList;
        if (props.filter) {
          flatData = props.filter(res.dataList);
        }
        const newNodes = flat2TreeWrapper(flatData, TREE_CONFIG[props.id]);
        setTreeData(newNodes);
      });
    }
  }, [props.apiName, props.id]);

  useEffect(() => {
    if (props.treeData) {
      setTreeData(props.treeData);
    }
  }, [props.treeData]);

  return (
    <div className="organizationInput">
      <TreeSelect
        multiple={props.multiple}
        style={{ width: "100%" }}
        value={value}
        treeData={treeData}
        placeholder={props.placeholder}
        treeDefaultExpandAll
        onChange={onChange}
        disabled={props.disabled}
        onSelect={(e) => onSelect(e)}
        allowClear={props.clear}
        showSearch={false}
        size={"large"}
      />
    </div>
  );
};
export default OrganizationInput;
