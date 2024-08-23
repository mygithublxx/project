import { useCallback, DragEvent } from "react";

export interface DragStartParams {
  dropEffect?: DataTransfer["dropEffect"];
}

const useDragStart = (props?: DragStartParams) => {
  return useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.currentTarget.style.backgroundColor = "transparent";
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const offsetX = e.pageX - (left + window.scrollX);
      const offsetY = e.pageY - (top + window.scrollY);
      /**
       * 设置鼠标偏移
       */
      e.dataTransfer.setData("offsetX", offsetX.toString(10));
      e.dataTransfer.setData("offsetY", offsetY.toString(10));
      e.dataTransfer.setData("width", width.toString(10));
      e.dataTransfer.setData("height", height.toString(10));
      e.dataTransfer.setData("id", e.currentTarget.dataset.id);
      if (e.currentTarget.dataset.uuid) {
        e.dataTransfer.setData("uuid", e.currentTarget.dataset.uuid);
      }

      /**
       * 设置鼠标样式，Safari未生效
       */
      e.dataTransfer.effectAllowed = props?.dropEffect || "copy";
      e.dataTransfer.dropEffect = props?.dropEffect || "copy";
    },
    [props]
  );
};

export default useDragStart;
