import React from "react";
import { ReactComponent } from "../assets/inverter.svg";
import { MetaIconComponent } from "../dto";

const Inverter: MetaIconComponent = () => {
  return <ReactComponent />;
};

Inverter.metaName = "逆变器";
Inverter.id = 13;

export default Inverter;
