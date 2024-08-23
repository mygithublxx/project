import React, { useEffect } from "react";
import { Graph } from "@antv/x6";
import { useNodeRegister } from "./hooks/useNodeRegister";
import { initDefaultGraph } from "./utils/graph-utils";
import { itemsOfFillColor } from "./components/edit-area/device-config/forms/fill-color-form";
import { findParentInverter, removeNodeTools } from "./utils/node-utils";

interface DiagramCoreProps {
  graphRef: React.MutableRefObject<Graph | null>;
  nodeMoveableRef: React.MutableRefObject<boolean>;
  tempNodeEditTypeRef: React.MutableRefObject<number>;
  setCurNode: React.Dispatch<React.SetStateAction<any>>;
  setNodeEditType: React.Dispatch<React.SetStateAction<number>>;
  isSettingState: boolean;
}

const DiagramCore = (props: DiagramCoreProps) => {
  const {
    graphRef,
    nodeMoveableRef,
    tempNodeEditTypeRef,
    setCurNode,
    // setNodeEditType,
    isSettingState,
  } = props;
  const tempNodeEditType = tempNodeEditTypeRef.current;

  const [registerCustomNodes] = useNodeRegister(Graph);

  const handleGraph = (graph) => {
    if (!graph) {
      return;
    }
    graph.on("edge:selected", ({ edge }) => {
      const source = edge.getSourceCell();
      const target = edge.getTargetCell();
      if (source) {
        graph.select(source);
      }
      if (target) {
        graph.select(target);
      }
    });
    graph.on("node:selected", ({ node }) => {
      // 对于逆变器存在群组概念会选择多个
      if (node?.children?.length) {
        const children = node.children?.filter((c) => !c?.isEdge()) || [];
        graph.select([node, ...children]);
      }
      if (node?.shape === "rect" || node?.shape === "text-block") {
        graph.createTransformWidget(node);
      }
    });
    graph.on("node:unselected", ({ node }) => {
      if (node?.shape === "rect") {
        graph.clearTransformWidgets();
      }
    });
    graph.on("node:click", ({ node }) => {
      if (node?.shape !== "rect") {
        if (
          node?.shape !== "text-block" ||
          !nodeMoveableRef.current ||
          tempNodeEditType !== 1
        ) {
          if (graph?.clearTransformWidgets) {
            graph.clearTransformWidgets();
          }
        }
      }
    });
    graph.on("node:added", ({ node }) => {
      if (tempNodeEditType === 3) {
        node.getPorts().forEach((port) => {
          node.setPortProp(port.id, "attrs/circle", {
            r: 5,
          });
        });
      }
      if (graph?.select) {
        graph.select(node);
      }
      // const specialNodeArr = ["text-block"];
      // const isAddingSpecialNode = specialNodeArr.includes(node?.shape);
      // if (isAddingSpecialNode) {
      //   setNodeEditType(1);
      // }
      const needFillColor = itemsOfFillColor.includes(node?.data?.key);
      if (needFillColor) {
        node.setData(
          { extData: { appearance: { fillColor: "#22ef6266" } } },
          { deep: true }
        );
      }
    });
    graph.on("edge:added", ({ edge }) => {
      edge.attr({
        line: {
          sourceMarker: null,
          targetMarker: null,
        },
      });
      /* 去掉跳线效果
       *  if (edge?.data?.key !== "inverter") edge.setConnector("jumpover");
       */
      // if (tempNodeEditType === 3) {
      //   edge.addTools(["vertices", "segments"]);
      // }
      edge.addTools(["vertices", "segments"]);
      const appearance = edge.getData()?.extData?.appearance;
      if (!appearance) {
        edge?.setData(
          {
            extData: {
              appearance: {
                connectColor: "#525f7cff",
                strokeStyle: "solid",
                strokeWidth: 2,
              },
            },
          },
          { deep: true }
        );
      }
    });
    graph.on("selection:changed", ({ selected }) => {
      if (selected.length === 1) {
        setCurNode(selected?.[0]);
      } else if (
        (selected?.length && selected[0]?.data?.key === "inverter") ||
        selected[0]?.data?.key === "inverter-other"
      ) {
        // 如果是逆变器则选择逆变器的第一个节点
        setCurNode(selected[0]);
      } else {
        setCurNode(null);
      }
    });

    // 根据json注册自定义节点
    graph.on("blank:click", () => {
      setCurNode(null);
      const nodes = graph.getNodes();
      // 去除工具
      nodes.forEach((node) => {
        node.removeTools();
        return node;
      });
    });
    // 选择状态激活
    graph.on("cell:click", ({ cell }) => {
      if (tempNodeEditType !== 1) return;
      if (cell?.isNode()) {
        // 如果是mppt或者组串，查找其父节点逆变器元件并设置该元件为当前点击元件
        if (cell?.shape === "string-inverter" || cell?.shape === "mppt") {
          const inverter = findParentInverter(cell);
          setCurNode(findParentInverter(cell));
          // 对于逆变器存在群组概念会选择多个
          if (inverter?.children?.length) {
            const children =
              inverter.children?.filter((c) => !c?.isEdge()) || [];
            graph.select([inverter, ...children]);
          }
        } else {
          setCurNode(cell);
        }
        removeNodeTools(graph);
      } else {
        setCurNode(cell);
      }
    });
  };

  const clearGraphHandle = () => {
    const graph = graphRef.current;
    if (graph) {
      graph.off("edge:selected");
      graph.off("node:selected");
      graph.off("node:unselected");
      graph.off("node:click");
      graph.off("node:added");
      graph.off("edge:added");
      graph.off("selection:changed");
      graph.off("blank:click");
      graph.off("cell:click");
    }
  };

  useEffect(() => {
    // 注册自定义节点
    registerCustomNodes();
    // 创建画布
    graphRef.current = initDefaultGraph(() => {
      return nodeMoveableRef.current;
    });

    return () => {
      graphRef.current?.dispose();
      graphRef.current = null;
    };
  }, []);

  useEffect(() => {
    const graph = graphRef.current;
    if (graph && isSettingState) {
      handleGraph(graph);
      setTimeout(() => {
        graph.centerContent();
      }, 0);
    } else {
      setCurNode(null);
      clearGraphHandle();
    }
  }, [isSettingState]);

  return <div id="graph-canvas" />;
};

export default DiagramCore;
