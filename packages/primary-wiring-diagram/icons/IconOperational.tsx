import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IconProps, MetaIconComponent } from "./dto";
import useDragStart from "../hooks/useDragStart";
import {
  HorizonLineProps,
  ResizeCallbackEvent,
} from "./components/HorizonLine";
import { safeValue } from "../utils";
import styles from "./index.module.less";
import Edit from "./Edit";
import { MIN_HEIGHT, MIN_WIDTH } from "./IconStatic";

const IconOperational = ({
  id,
  draggable,
  x,
  y,
  uuid,
  width,
  height,
  safeArea,
  onResizeEnd,
  onEdit,
  Edit: UserEdit,
  Icon,
}: IconProps<"operational"> & { Icon: MetaIconComponent }) => {
  const dragStart = useDragStart({ dropEffect: "move" });

  const [resizeXY, setResizeXY] = useState({ x, width, y, height });

  useEffect(() => {
    setResizeXY({ x, width, y, height });
  }, [x, width, y, height]);

  /**
   * 组件样式
   */
  const style = useMemo<CSSProperties>(() => {
    return {
      position: "absolute",
      top: resizeXY.y,
      left: resizeXY.x,
      width: resizeXY.width,
      height: resizeXY.height,
      cursor: !draggable ? "default" : "move",
    };
  }, [x, y, width, height, resizeXY, draggable]);

  /**
   * 处理横纵线的尺寸改变
   */
  const handleResize = useCallback(
    (e: ResizeCallbackEvent) => {
      // prefix n is stand for 'new'
      let nX = x;
      let nWidth = width;
      let nY = y;
      let nHeight = height;
      let maxWidth = 0;
      let maxHeight = 0;
      switch (e.direction) {
        case "w":
          const minX = 0;
          const maxX = x + width - MIN_WIDTH;
          maxWidth = x + width;
          nX = safeValue(minX, maxX, x + e.deltaX);
          nWidth = safeValue(MIN_WIDTH, maxWidth, width - e.deltaX);
          break;
        case "e":
          nX = x;
          maxWidth = safeArea.width - x;
          nWidth = safeValue(MIN_WIDTH, maxWidth, width + e.deltaX);
          break;
        case "n":
          const minY = 0;
          const maxY = y + height - MIN_HEIGHT;
          maxHeight = y + height;
          nY = safeValue(minY, maxY, y + e.deltaY);
          nHeight = safeValue(MIN_HEIGHT, maxHeight, height - e.deltaY);
          break;
        case "s":
          nY = y;
          maxHeight = safeArea.height - y;
          nHeight = safeValue(MIN_HEIGHT, maxHeight, height + e.deltaY);
          break;
        default:
          break;
      }
      setResizeXY({
        x: nX,
        width: nWidth,
        y: nY,
        height: nHeight,
      });
      if (e.finished) {
        if (typeof onResizeEnd === "function") {
          onResizeEnd({
            x: nX,
            y: nY,
            id,
            uuid,
            width: nWidth,
            height: nHeight,
          });
        }
      }
    },
    [width, x, height, y, onResizeEnd, safeArea]
  );

  /**
   * 生成相应的icon
   */
  const switchComponents = useMemo(() => {
    switch (Icon.id) {
      case 1:
        const HorizonLine = Icon as MetaIconComponent<HorizonLineProps>;
        return (
          <HorizonLine
            len={style.width as number}
            onResize={handleResize}
            uuid={uuid}
            draggable={draggable}
          />
        );

      case 2:
        const VerticalLine = Icon as MetaIconComponent<HorizonLineProps>;
        return (
          <VerticalLine
            len={style.height as number}
            onResize={handleResize}
            uuid={uuid}
            draggable={draggable}
          />
        );
      default:
        return <Icon />;
    }
  }, [Icon, style, handleResize, draggable]);

  if (Icon) {
    return (
      <div
        className={styles.icon}
        style={style}
        draggable={draggable}
        title={Icon.metaName}
        data-id={Icon.id}
        data-uuid={uuid}
        onDragStart={dragStart}
      >
        {switchComponents}
        {draggable && onEdit ? (
          <Edit uuid={uuid} onEdit={onEdit}>
            <UserEdit />
          </Edit>
        ) : null}
      </div>
    );
  }
  return null;
};

export default IconOperational;
