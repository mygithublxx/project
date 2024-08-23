import { MenuIconSvgProps } from "../../dto";
import React from "react";
import useMenuSvgLinearGradient from "./use-menu-svg-linear-gradient";

type IconProps = MenuIconSvgProps & {
  path: string;
};

const Icon = (props: IconProps) => {
  const { linearGradient, path } = props;
  const defs = useMenuSvgLinearGradient(linearGradient);
  const style = { width: "1.25rem", height: "1.25rem" };
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={style}>
      {defs}
      <g fill="none" fill-rule="evenodd">
        <path fill="none" d="M0 0h20v20H0z"></path>
        <path d={path} fill={`url(#${linearGradient.id})`}></path>
      </g>
    </svg>
  );
};

export default Icon;
