import { useCallback, DragEvent } from "react";

const useDragOver = () => {
  return useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();
  }, []);
};

export default useDragOver;
