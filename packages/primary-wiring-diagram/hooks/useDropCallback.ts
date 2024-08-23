import { useCallback, DragEvent } from "react";

export interface DropCallbackParams {
  /**
   * drop时候相对容器位置
   */
  x: number;
  /**
   * drop时候相对容器位置
   */
  y: number;
  /**
   * 元件的id
   */
  id: string;
  uuid?: string;
  width: number;
  height: number;
}

const useDropCallback = (cb?: (e: DropCallbackParams) => void) => {
  /**
   * @todo memory cb
   */
  return useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      const { left, top } = e.currentTarget.getBoundingClientRect();
      const x = e.pageX - (left + window.scrollX);
      const y = e.pageY - (top + window.scrollY);
      const id = e.dataTransfer.getData("id");
      const uuid = e.dataTransfer.getData("uuid");
      const offsetX = Number(e.dataTransfer.getData("offsetX"));
      const offsetY = Number(e.dataTransfer.getData("offsetY"));
      const width = Number(e.dataTransfer.getData("width"));
      const height = Number(e.dataTransfer.getData("height"));
      if (typeof cb === "function") {
        cb({ x: x - offsetX, y: y - offsetY, id, uuid, width, height });
      }
    },
    [cb]
  );
};

export default useDropCallback;
