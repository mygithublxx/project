import React from "react";
import { ICON_LIST } from "./index";
import { IconProps, IconType, MetaIconComponent } from "./dto";
import IconStatic from "./IconStatic";
import IconOperational from "./IconOperational";

const Icon = <T extends IconType>(props: IconProps<T>) => {
  const IconComponent = ICON_LIST.find(
    (item) => item.id.toString() === props.id
  ) as MetaIconComponent;
  switch (props.type) {
    case "static":
      const staticProps = props as IconProps<"static">;
      return <IconStatic {...staticProps} Icon={IconComponent} />;
    case "operational":
      const operationalProps = props as unknown as IconProps<"operational">;
      return <IconOperational {...operationalProps} Icon={IconComponent} />;
    default:
      return null;
  }
};

export default Icon;
