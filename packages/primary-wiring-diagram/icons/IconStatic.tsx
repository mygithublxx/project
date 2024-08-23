import React, { CSSProperties, useMemo } from "react";
import { IconProps, MetaIconComponent } from "./dto";
import useDragStart from "../hooks/useDragStart";
import styles from "./index.module.less";
import { HorizonLineProps } from "./components/HorizonLine";

export const MIN_WIDTH = 40;
export const MIN_HEIGHT = 40;

const IconStatic = ({
  draggable,
  Icon,
}: IconProps<"static"> & { Icon: MetaIconComponent }) => {
  const dragStart = useDragStart({ dropEffect: "copy" });

  /**
   * 组件样式
   */
  const style = useMemo<CSSProperties>(() => {
    return {
      cursor: "grab",
      width: MIN_WIDTH,
      height: MIN_HEIGHT,
    };
  }, []);
  /**
   * 生成相应的icon
   */
  const switchComponents = useMemo(() => {
    switch (Icon.id) {
      case 1:
        const HorizonLine = Icon as MetaIconComponent<HorizonLineProps>;
        return <HorizonLine len={MIN_WIDTH} draggable={draggable} />;

      case 2:
        const VerticalLine = Icon as MetaIconComponent<HorizonLineProps>;
        return <VerticalLine len={MIN_HEIGHT} draggable={draggable} />;
      default:
        return <Icon />;
    }
  }, [Icon, draggable]);

  if (Icon) {
    return (
      <div
        className={styles.icon}
        style={style}
        draggable={draggable}
        title={Icon.metaName}
        data-id={Icon.id}
        onDragStart={dragStart}
      >
        {switchComponents}
      </div>
    );
  }

  return null;
};

export default IconStatic;
