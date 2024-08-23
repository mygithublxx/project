import React from "react";
import useDropCallback, { DropCallbackParams } from "./hooks/useDropCallback";
import useDragOver from "./hooks/useDragOver";

interface DroppableProps {
  /**
   * 容器的宽高
   */
  safeArea: {
    width: number;
    height: number;
  };
  children?: React.ReactNode;
  onDrop?(e: DropCallbackParams): void;
  style?: React.CSSProperties;
  className?: string;
}

const Droppable = (props: DroppableProps) => {
  const dragOver = useDragOver();
  const drop = useDropCallback((e) => {
    /**
     * 位置范围检查
     */
    const isAllowDrop =
      e.x >= 0 &&
      e.y >= 0 &&
      e.x <= props.safeArea.width - e.width &&
      e.y <= props.safeArea.height - e.height;
    if (typeof props.onDrop === "function" && isAllowDrop) {
      props.onDrop(e);
    }
  });
  return (
    <div
      className={props.className}
      style={{
        position: "relative",
        ...props.style,
        width: props.safeArea.width,
        height: props.safeArea.height,
      }}
      onDragOver={dragOver}
      onDrop={drop}
    >
      {props.children}
    </div>
  );
};

export default Droppable;
