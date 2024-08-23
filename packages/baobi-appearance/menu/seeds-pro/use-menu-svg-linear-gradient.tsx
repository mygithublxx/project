import { MenuIconSvgProps } from "../../../baobi-appearance/dto";
import React, { useMemo } from "react";

const useMenuSvgLinearGradient = (
  linearGradient: MenuIconSvgProps["linearGradient"]
) => {
  const linearGradientDirection = (
    direction: MenuIconSvgProps["linearGradient"]["direction"] = "to Bottom"
  ) => {
    switch (direction) {
      case "to Bottom":
        return { x1: "0%", y1: "0%", x2: "0%", y2: "100%" };
      case "to Right":
        return { x1: "0%", y1: "0%", x2: "100%", y2: "0%" };
      case "to Up":
        return { x1: "0%", y1: "100%", x2: "0%", y2: "0%" };
      case "to Left":
        return { x1: "100%", y1: "0%", x2: "0%", y2: "0%" };
    }
  };

  return useMemo(() => {
    if (linearGradient) {
      return (
        <defs>
          <linearGradient
            id={linearGradient.id}
            {...linearGradientDirection(linearGradient.direction)}
          >
            {linearGradient.colors.map(({ offset, stopColor }) => {
              return <stop offset={offset} stopColor={stopColor}></stop>;
            })}
          </linearGradient>
        </defs>
      );
    }
    return null;
  }, []);
};

export default useMenuSvgLinearGradient;
