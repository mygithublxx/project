/**
 *
 * 图表的通用操作
 *
 */

import { Cell, CellView, Graph } from "@antv/x6";

import { Keyboard } from "@antv/x6-plugin-keyboard";
import { Selection } from "@antv/x6-plugin-selection";
import { Clipboard } from "@antv/x6-plugin-clipboard";
import { History } from "@antv/x6-plugin-history";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Scroller } from "@antv/x6-plugin-scroller";
// import { Dispatch } from "redux";
// import { updateSavingState } from "../model/actions/wiring";
import { Transform } from "@antv/x6-plugin-transform";
import { Export } from "@antv/x6-plugin-export";

/**
 * 创建一个默认的图表对象
 * @param interacting 图表的交互限制函数
 * @returns 返回一个图表实例
 */
const initDefaultGraph = (interacting: CellView.Interacting) => {
  const graph = new Graph({
    container: document.getElementById("graph-canvas"),
    autoResize: true,
    background: { color: "#fff" },
    interacting: interacting,
    scaling: { min: 0.1, max: 4 },
    grid: {
      visible: true,
      type: "mesh",
      args: [
        {
          color: "#eeeeeeff", // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        // {
        //   color: "#ddd", // 次网格线颜色
        //   thickness: 1, // 次网格线宽度
        //   factor: 4, // 主次网格线间隔
        // },
      ],
    },
    panning: false,
    mousewheel: {
      enabled: true,
      modifiers: ["ctrl", "meta"],
    },
    connecting: {
      snap: {
        radius: 8,
        // anchor: "center",
      },
      allowBlank: true,
      allowLoop: false,
      allowNode: false,
      validateConnection() {
        return true;
      },
    },
  });

  // 添加对齐线
  graph.use(
    new Snapline({
      enabled: true,
      sharp: true,
    })
  );
  graph.use(
    new Transform({
      resizing: { enabled: true, maxWidth: 1000 },
    })
  );
  graph.use(
    new History({
      enabled: false,
      stackSize: 30,
      beforeAddCommand(event, args: any) {
        if (args?.index !== undefined || args?.key === "vertices") {
          // dispatch(updateSavingState(true));
        }
        if (args?.key === "attrs") {
          if (args?.options?.propertyPath?.startsWith("attrs/label")) {
          } else {
            return false;
          }
        }
        if (args?.cell?.data?.key === "placeholder") {
          if (args?.options?.propertyPath === "attrs/body/strokeWidth") {
            return false;
          }
        }
        if (
          args.key === "ports" ||
          args.key === "tools" ||
          args.key === "size"
        ) {
          return false;
        }
        if (args?.options?.deep === true) return false;
        if (
          args?.cell?.shape === "placeholder" &&
          args?.options?.propertyPath === "attrs/g1/strokeWidth"
        ) {
          return false;
        }
      },
    })
  );
  graph.use(
    new Clipboard({
      enabled: true,
    })
  );
  graph.use(
    new Selection({
      enabled: false,
      multiple: true,
      rubberband: true,
      movable: true,
      showNodeSelectionBox: true,
      showEdgeSelectionBox: true,
    })
  );
  graph.use(
    new Keyboard({
      enabled: true,
      global: false,
    })
  );
  graph.use(
    new Scroller({
      enabled: true,
      pageVisible: false,
      pageBreak: true,
      // graph: graph,
      autoResize: true,
      pageWidth: 1920,
      pageHeight: 1080,
    })
  );

  graph.use(new Export());

  return graph;
};

/**
 * 创建一个自定义的拓扑图节点
 * @param graph 图表对象
 * @param draggingNode 拖拽的节点
 * @returns 拖拽节点对应的拓扑图节点
 */
const createCustomTpgNode = (graph: Graph, draggingNode: Cell) => {
  return graph.createNode({
    shape: "custom-react-node",
    data: {
      key: draggingNode?.data?.key,
    },
    ports: {
      items: [
        {
          group: "top",
        },
        {
          group: "bottom",
        },
        {
          group: "left",
        },
        {
          group: "right",
        },
      ],
    },
  });
};

export { initDefaultGraph, createCustomTpgNode };
