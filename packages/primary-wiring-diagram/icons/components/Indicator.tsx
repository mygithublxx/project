import React from "react";
import { ReactComponent } from "../assets/indicator.svg";
import { MetaIconComponent } from "../dto";

const Indicator: MetaIconComponent = () => {
  return <ReactComponent />;
};

Indicator.metaName = "指示灯";
Indicator.id = 18;

export default Indicator;
