import React from "react";
import { Empty } from "@gw/web-basic-components";

import EmptyData from "../../../../assets/editor/empty-data.png";

const EmptyEvent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Empty image={EmptyData} description="暂无事件" />
    </div>
  );
};

export default EmptyEvent;
