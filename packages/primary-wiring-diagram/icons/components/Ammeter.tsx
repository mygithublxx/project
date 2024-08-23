import React from "react";
import { ReactComponent } from "../assets/ammeter.svg";
import { MetaIconComponent } from "../dto";

const Ammeter: MetaIconComponent = () => {
  return <ReactComponent />;
};

Ammeter.metaName = "电表";
Ammeter.id = 9;

export default Ammeter;
