import React from "react";
import { ReactComponent } from "../assets/load.svg";
import { MetaIconComponent } from "../dto";

const Load: MetaIconComponent = () => {
  return <ReactComponent />;
};

Load.metaName = "负载";
Load.id = 10;

export default Load;
