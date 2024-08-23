import React from "react";
import { LocalLogin } from "@gw/web-business-components";

/** 本地登录示例 */
const LocalLoginDemo = () => {
  //示例中不需要跳转首页，所以将onSuccess置空
  return (
    <div
      style={{
        width: 800,
        height: 400,
        background: "#021b1e",
        border: "1px solid #021b1e",
      }}
    >
      <LocalLogin onSuccess={() => {}} />
    </div>
  );
};

export default LocalLoginDemo;
