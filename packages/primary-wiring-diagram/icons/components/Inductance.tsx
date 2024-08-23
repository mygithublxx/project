import React from "react";
import { ReactComponent } from "../assets/inductance.svg";
import { MetaIconComponent } from "../dto";

const Inductance: MetaIconComponent = () => {
  return <ReactComponent />;
};

Inductance.metaName = "电感";
Inductance.id = 6;

export default Inductance;
