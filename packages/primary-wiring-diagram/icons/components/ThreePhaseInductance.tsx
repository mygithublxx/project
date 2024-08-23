import React from "react";
import { ReactComponent } from "../assets/threePhaseInductance.svg";
import { MetaIconComponent } from "../dto";

const ThreePhaseInductance: MetaIconComponent = () => {
  return <ReactComponent />;
};

ThreePhaseInductance.metaName = "三相电感";
ThreePhaseInductance.id = 15;

export default ThreePhaseInductance;
