import React from "react";
import { ReactComponent } from "../assets/groundingLine.svg";
import { MetaIconComponent } from "../dto";

const GroundingLine: MetaIconComponent = () => {
  return <ReactComponent />;
};

GroundingLine.metaName = "接地线";
GroundingLine.id = 12;

export default GroundingLine;
