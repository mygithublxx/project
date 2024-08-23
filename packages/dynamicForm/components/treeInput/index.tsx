import React from "react";
import { ITreeInputProps } from "./dto";
import TreeWrapper from "../treeWrapper";

const EMPTY_ARRAY = [];

const TreeInput = (props: ITreeInputProps) => {
  const { onChange, data, value = EMPTY_ARRAY } = props;
  if (!data?.length) return <></>;

  return (
    <TreeWrapper data={data} selectKeys={value} onCheckedChange={onChange} />
  );
};
export default TreeInput;
