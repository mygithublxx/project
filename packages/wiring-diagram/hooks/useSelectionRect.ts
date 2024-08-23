import { useEffect } from "react";

// 用于保存框选起始点和结束点
let startPoint = null;
let endPoint = null;
let tempNode = null;

const useSelectionRect = (graph, nodeEditType) => {
  useEffect(() => {
    const inSelection = nodeEditType === 5;
    if (!graph) {
      return;
    }

    const disableSelection = () => {
      if (graph.disableSelection) {
        graph.disableSelection();
      }
    };

    const enableSelection = () => {
      if (graph.enableSelection) {
        graph.enableSelection();
      }
    };

    const handleMouseDown = ({ x, y }) => {
      startPoint = { x, y };
      endPoint = null;

      tempNode = graph.addNode({
        shape: "rect",
        x,
        y,
        width: 1,
        height: 1,
        attrs: {
          body: {
            stroke: "transparent",
            fill: "rgba(22,19,19,0.05)",
          },
        },
      });
    };

    const handleMouseMove = ({ x, y }) => {
      if (startPoint) {
        endPoint = { x, y };
        const width = Math.abs(endPoint.x - startPoint.x);
        const height = Math.abs(endPoint.y - startPoint.y);
        tempNode.position(
          Math.min(endPoint.x, startPoint.x),
          Math.min(endPoint.y, startPoint.y)
        );
        tempNode.resize(width, height);
      }
    };

    const handleMouseUp = ({ x, y }) => {
      if (tempNode) {
        // 移除临时矩形
        tempNode.remove();
      }
      if (startPoint && endPoint) {
        const width = Math.abs(endPoint.x - startPoint.x);
        const height = Math.abs(endPoint.y - startPoint.y);
        // 如果width或height小于10，则不创建热区

        if (width < 35 || height < 35) {
          startPoint = null;
          endPoint = null;
          enableSelection();
          return;
        }

        // 根据框选的区域创建热区
        const node = graph.addNode({
          shape: "rect",
          x: Math.min(endPoint.x, startPoint.x),
          y: Math.min(endPoint.y, startPoint.y),
          width: width,
          height: height,
          attrs: {
            body: {
              stroke: "transparent",
              fill: "rgba(22,19,19,0.1)",
              rx: 10, // 设置水平圆角半径
              ry: 10, // 设置垂直圆角半径
            },
          },
        });

        // 移除框选的临时矩形
        startPoint = null;
        endPoint = null;

        if (node && graph.createTransformWidget) {
          graph.createTransformWidget(node);
        }

        enableSelection();
      }
    };

    if (inSelection) {
      disableSelection();

      graph.on("blank:mousedown", handleMouseDown);
      graph.on("blank:mousemove", handleMouseMove);
      graph.on("blank:mouseup", handleMouseUp);
    }

    // 清理函数，移除事件监听器
    return () => {
      graph.off("blank:mousedown", handleMouseDown);
      graph.off("blank:mousemove", handleMouseMove);
      graph.off("blank:mouseup", handleMouseUp);
      enableSelection();
    };
  }, [graph, nodeEditType]);
};

export default useSelectionRect;
