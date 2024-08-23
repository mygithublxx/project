import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import { Button } from "@gw/web-basic-components";

const Collapse = (props) => {
  const [visible, setVisible] = useState(() => {
    return typeof props.children === "string" && props.children.length < 200;
  });
  return (
    <div>
      <Button
        onClick={() => setVisible(!visible)}
        style={{ margin: "16px 0", ...props.style }}
        type={"primary"}
        size={"small"}
      >
        {props.filename}
        {visible ? "隐藏" : "显示"}代码
      </Button>
      <div style={{ display: visible ? "block" : "none" }}>
        <CodeBlock className="language-tsx" showLineNumbers>
          {props.children}
        </CodeBlock>
      </div>
    </div>
  );
};

export default Collapse;
