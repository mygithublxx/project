import React from "react";
import { ReactComponent } from "../assets/grounding.svg";
import { MetaIconComponent } from "../dto";

const Grounding: MetaIconComponent = () => {
  return <ReactComponent />;
};

Grounding.metaName = "接地开关";
Grounding.id = 11;

export default Grounding;
