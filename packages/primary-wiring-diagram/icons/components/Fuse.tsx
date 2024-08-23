import React from "react";
import { ReactComponent } from "../assets/fuse.svg";
import { MetaIconComponent } from "../dto";

const Fuse: MetaIconComponent = () => {
  return <ReactComponent />;
};

Fuse.metaName = "熔断器";
Fuse.id = 14;

export default Fuse;
