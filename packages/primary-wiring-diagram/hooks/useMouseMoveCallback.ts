import {
  useMemo,
  useRef,
  MouseEvent as ReactMouseEvent,
  useCallback,
} from "react";

interface MouseMoveCallbackParams {
  deltaX: number;
  deltaY: number;
}

const useMouseMoveCallback = (
  cb?: (e: MouseMoveCallbackParams, finished: boolean) => void
) => {
  const dataTransfer = useRef({
    startX: 0,
    startY: 0,
    isMouseDown: false,
  }).current;

  const move = useCallback(
    (e: MouseEvent) => {
      if (typeof cb === "function") {
        cb(
          {
            deltaX: e.pageX - dataTransfer.startX,
            deltaY: e.pageY - dataTransfer.startY,
          },
          false
        );
      }
    },
    [cb]
  );

  const end = useCallback(
    (e: MouseEvent) => {
      if (typeof cb === "function") {
        cb(
          {
            deltaX: e.pageX - dataTransfer.startX,
            deltaY: e.pageY - dataTransfer.startY,
          },
          true
        );
      }
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
    },
    [move, cb]
  );

  return useMemo(() => {
    return {
      onMouseDown(e: ReactMouseEvent) {
        e.preventDefault();
        dataTransfer.isMouseDown = true;
        dataTransfer.startX = e.pageX;
        dataTransfer.startY = e.pageY;
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", end);
      },
    };
  }, [move, end]);
};

export default useMouseMoveCallback;
