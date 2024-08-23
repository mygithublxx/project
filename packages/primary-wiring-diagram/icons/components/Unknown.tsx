import React from "react";
import { ReactComponent } from "../assets/unknown.svg";
import { MetaIconComponent } from "../dto";

const Unknown: MetaIconComponent = () => {
  return <ReactComponent />;
};

Unknown.metaName = "未知";
Unknown.id = 20;

export default Unknown;
