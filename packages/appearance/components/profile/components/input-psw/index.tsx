import React, { ChangeEvent } from "react";
import { Input } from "@gw/web-basic-components";
interface InputPswProps {
  onChange?(e: string): void;
  [p: string]: any;
}

/**
 * 密码输入框过滤掉中文和空格
 */
export default function PswInput({ onChange, ...restProps }: InputPswProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const initialInput = event.target.value?.replace(/[\u4e00-\u9fa5\s]/g, "");
    onChange?.(initialInput);
  };
  return (
    <Input.Password onChange={handleChange} {...restProps}></Input.Password>
  );
}
