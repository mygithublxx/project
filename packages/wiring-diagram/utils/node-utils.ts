/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { Cell, Edge, Graph, Node } from "@antv/x6";
// import { updateSavingState } from "../model/actions/wiring";
import { parkingConstructure, vehicleConstructure } from "../const/index";
import { handleEvents } from "./condition";
import {
  ResetHandleGSES,
  ResetHandleHC,
  ResetHandleISD,
} from "./node-painting-utils";
/**
 *
 * 节点的通用操作
 *
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const removeNodeTools = (graph: Graph, toolNames?: string[]) => {
  if (!graph) return;
  const nodes = graph.getNodes();
  // 去除工具
  nodes.forEach((node) => {
    node.removeTools();
    return node;
  });
};

/**
 * 展示出所有节点的链接桩
 * @param graph 图表对象
 */
const showAllNodePorts = (graph: Graph) => {
  if (!graph) return;
  graph.getNodes().forEach((node) => {
    node.getPorts().forEach((port) => {
      node.setPortProp(port.id, "attrs/circle", {
        r: 5,
      });
    });
  });
};

/**
 * 隐藏所有节点的链接桩
 * @param graph 图表对象
 */
const hideAllNodePorts = (graph: Graph) => {
  if (!graph) return;
  graph.getNodes().forEach((node) => {
    node.getPorts().forEach((port) => {
      node.setPortProp(port.id, "attrs/circle", {
        r: 0,
      });
    });
  });
};

const addBoundaryTool = (cell: Cell) => {
  cell.addTools([
    {
      name: "boundary",
      args: {
        attrs: {
          fill: "#BBD5FD",
          stroke: "#0066FF",
          "stroke-width": 1,
          "fill-opacity": 0.2,
        },
      },
    },
  ]);
};

const setPlaceholderStrokeWidth = (graph: Graph, width: number) => {
  const nodes = graph.getNodes();
  nodes.forEach((n) => {
    if (n.data?.key === "placeholder") {
      n.setAttrByPath("g1/strokeWidth", width);
    }
  });
};

const setPlaceholderText = (
  graph: Graph,
  nodeId: string,
  text?: string,
  textColor?: string,
  textSize?: number
) => {
  if (nodeId) {
    if (text !== undefined)
      graph.getCellById(nodeId).setAttrByPath("text/text", text || "");
    if (textColor) {
      graph.getCellById(nodeId).setAttrByPath("g/stroke", textColor);
      graph.getCellById(nodeId).setAttrByPath("g/fill", textColor);
      graph.getCellById(nodeId).setAttrByPath("text/fill", textColor);
    }
    if (textSize) {
      graph.getCellById(nodeId).setAttrByPath("text/fontSize", textSize);
    }
  }
};

const setNodeDisplayColor = (
  cell: Cell,
  strokeColor: string,
  fillColor: string
) => {
  if (cell) {
    if (cell?.shape === "mppt" || cell?.shape === "string-inverter") return;
    // 分两种一种填充一种只改变边框
    if (strokeColor) {
      if (
        cell?.shape === "transformer" ||
        cell?.shape === "retransformer" ||
        cell?.shape === "parking"
      ) {
        cell.setAttrByPath("g/fill", strokeColor);
        cell.setAttrByPath("g/stroke", strokeColor);
      } else {
        cell.setAttrByPath("g/stroke", strokeColor);
      }
    }
    if (fillColor) {
      if (!(cell?.shape === "transformer" || cell?.shape === "retransformer")) {
        cell.setAttrByPath("g/fill", fillColor);
      }
    }
  }
};

const setSocText = (cell: Cell, soc: number | string) => {
  if (cell) {
    if (cell?.data?.isEmpty === 0) {
      cell.setAttrByPath("text/text", "p");
    }
    if (cell?.data?.isEmpty === 1 || cell?.shape === "battery") {
      if (typeof soc === "number") {
        cell.setAttrByPath("text/text", Math.floor(soc));
        cell.setAttrByPath("g/strokeDashoffset", 74 - ((soc || 0) / 100) * 74);
      } else {
        cell.setAttrByPath("text/text", soc || "--");
        cell.setAttrByPath("g/strokeDashoffset", 74);
      }
    }
  }
};

const setEdgeStyles = (
  edge: Edge,
  color: string,
  style?: "solid" | "dashed",
  width?: number
) => {
  if (!edge?.isEdge()) return;
  if (color) edge.setAttrByPath("line/stroke", color);
  if (style)
    edge.setAttrByPath("line/strokeDasharray", style === "dashed" ? 10 : 0);
  if (width) {
    edge.setAttrByPath("line/strokeWidth", width);
    edge.setAttrByPath("lines/strokeWidth", width);
  }
};

const setEdgeAnim = (edge: Edge, reverse: boolean = false) => {
  if (edge?.isEdge()) {
    edge.setMarkup([
      {
        tagName: "path",
        selector: "wrap",
        groupSelector: "lines",
        attrs: {
          fill: "none",
          cursor: "pointer",
          stroke: "transparent",
          strokeLinecap: "round",
        },
      },
      {
        tagName: "path",
        selector: "line",
        groupSelector: "lines",
        attrs: {
          fill: "none",
          pointerEvents: "none",
        },
      },
      {
        tagName: "path",
        selector: "anim",
        groupSelector: "lines",
        attrs: {
          fill: "none",
          cursor: "pointer",
          stroke: "lightgreen",
          strokeDasharray: 20,
          strokeWidth: "inherit",
          strokeLinecap: "round",
        },
      },
    ]);
    if (reverse) {
      edge.setAttrByPath("anim/style", {
        animation: "ant-line-reverse 30s infinite linear",
      });
    } else {
      edge.setAttrByPath("anim/style", {
        animation: "ant-line 30s infinite linear",
      });
    }
  }
};

const removeEdgeAnim = (edge: Edge) => {
  if (edge?.isEdge()) {
    edge.setMarkup([
      {
        tagName: "path",
        selector: "wrap",
        groupSelector: "lines",
        attrs: {
          fill: "none",
          cursor: "pointer",
          stroke: "transparent",
          strokeLinecap: "round",
        },
      },
      {
        tagName: "path",
        selector: "line",
        groupSelector: "lines",
        attrs: {
          fill: "none",
          pointerEvents: "none",
        },
      },
    ]);
  }
};

const findParentInverter = (cell: Cell) => {
  if (!cell) return null;
  const parent = cell.getParent();
  if (parent) {
    if (parent?.shape === "inverter" || parent?.shape === "inverter-other") {
      return parent;
    }
    const grandParent = parent.getParent();
    if (
      grandParent?.shape === "inverter" ||
      grandParent?.shape === "inverter-other"
    ) {
      return grandParent;
    }
  }
  return null;
};

const initWiringItems = (graph: Graph, clear?) => {
  if (graph) {
    graph?.getCells()?.forEach((cell) => {
      const appearance = cell?.getData()?.extData?.appearance;
      const currentNode = graph.getCellById(cell.id);
      if (appearance && currentNode) {
        if (currentNode?.isEdge()) {
          setEdgeStyles(currentNode, appearance?.connectColor);
          removeEdgeAnim(currentNode);
        }
        if (currentNode?.data?.key === "battery") {
          setSocText(currentNode, "--");
        }
        if (currentNode?.data?.key === "parking") {
          if (appearance?.isEmpty === 0) {
            currentNode.setAttrs({ ...parkingConstructure().attrs });
            currentNode.setMarkup([...parkingConstructure().markup]);
            (currentNode as Node).setSize({ width: 40, height: 40 });
            currentNode.setData({ isEmpty: 0 });
            setSocText(currentNode, "p");
          }
          if (appearance?.isEmpty === 1) {
            currentNode.setAttrs({ ...vehicleConstructure().attrs });
            currentNode.setMarkup([...vehicleConstructure().markup]);
            (currentNode as Node).setSize({ width: 40, height: 40 });
            currentNode.setData({ isEmpty: 1 });
            setSocText(currentNode, "--");
          }
        }
        if (currentNode?.data?.key === "placeholder") {
          setPlaceholderText(
            graph,
            currentNode?.id,
            appearance?.displayName,
            appearance?.textColor,
            appearance?.fontSize
          );
        } else {
          setNodeDisplayColor(
            currentNode,
            appearance?.textColor || appearance?.strokeColor,
            appearance?.fillColor
          );
        }
      }
      const isISD = currentNode?.data?.key?.includes("ISD");
      const isGSES = currentNode?.data?.key?.includes("GSES");
      const isHC = currentNode?.data?.key?.includes("HC");
      if (isISD) {
        ResetHandleISD(currentNode);
      }
      if (isGSES) {
        ResetHandleGSES(currentNode);
      }
      if (isHC) {
        ResetHandleHC(currentNode);
      }
    });
    if (graph?.cleanHistory) {
      graph.cleanHistory();
    }
  }
  if (clear) {
    clear();
  }
};

// 保留两位小数的四舍五入
const roundOff = (number: number | undefined, radix: number = 2) => {
  if (isNaN(number)) return number;
  const exp = 10 ** (radix + 1);
  let tmp = Math.floor(number * exp) / exp;

  // 正负值
  let sign = true;
  if (number < 0) sign = false;
  tmp = Math.abs(tmp);

  const cmp = 10 ** (radix + 1);
  tmp = (tmp * cmp) / 10;

  tmp = Math.round(tmp);
  for (let i = 0; i < radix; i++) {
    tmp /= 10;
  }
  tmp = Number(tmp.toFixed(2));
  return sign ? tmp.toFixed(2) : "-" + tmp.toFixed(2);
};
const unitConvert = (
  measureTagCode: string,
  value: number,
  unitCode: string
) => {
  if (typeof value !== "number") return ["--", ""];
  if (measureTagCode === "p") {
    let tmp = roundOff(value / 1000) as number;
    let unit = "kW";
    if (Math.abs(tmp) >= 1000) {
      tmp = roundOff(tmp / 1000) as number;
      unit = "MW";
    }
    return [tmp, unit];
  }
  if (measureTagCode === "q") {
    let tmp = roundOff(value / 1000) as number;
    let unit = "kVar";
    if (Math.abs(tmp) >= 1000) {
      tmp = roundOff(tmp / 1000) as number;
      unit = "MVar";
    }
    return [tmp, unit];
  }
  if (measureTagCode === "e") {
    let tmp = roundOff(value) as number;
    let unit = "kWh";
    if (Math.abs(tmp) >= 10000) {
      tmp = roundOff(tmp / 1000) as number;
      unit = "万kWh";
    }
    return [tmp, unit];
  }
  return [value, unitCode];
};
// 正式发布使用在业务组件中的，此处用来本地调试
export const handleMqttMessage = (graph, d, fetchCodeList) => {
  const getNodeid = (code: string) => {
    const target = fetchCodeList.find(
      (c) => c.code === code && (c.key === "" || !c?.key)
    );
    return target;
  };
  const cells = graph.getCells();
  const target = [];
  cells?.map((cell) => {
    const nodeDetail = cell.getData();
    for (let j = 0; j < nodeDetail?.extData?.events?.length; j++) {
      const tmp = nodeDetail?.extData?.events[j]?.conditionList;
      for (let k = 0; k < tmp?.length; k++) {
        if (getNodeid(tmp[k]?.thingId)?.nodeId === d?.nodeId) {
          target.push({ ...nodeDetail, nodeId: cell?.id });
        }
      }
    }
  });
  target.forEach((t) => {
    const events = t?.extData?.events;
    // 拿出所有绑定当前mqtt消息对应物的event
    const eventTodo = events?.filter((e) => {
      const tmp = e.conditionList.find(
        (i) => i.conditionType === "rationalOperation"
      );
      if (tmp?.thingId) {
        return getNodeid(tmp.thingId)?.nodeId === d?.nodeId;
      }
      return false;
    });
    // 按顺序处理这些事件
    if (eventTodo?.length) {
      eventTodo.forEach((e) => {
        handleEvents(graph, e, t?.extData?.appearance, t.nodeId, d);
      });
    }
  });
  cells?.map((cell) => {
    const nodeDetail = cell.getData();
    if (
      getNodeid(nodeDetail?.extData?.appearance?.itemId)?.nodeId === d?.nodeId
    ) {
      target.push({ ...nodeDetail, nodeId: cell?.id });
      const n = graph.getCellById(cell?.id);
      // 设置占位符的文本
      if (n?.data?.key === "placeholder") {
        const measureTagCode = nodeDetail?.extData?.appearance?.measureTagCode;
        if (measureTagCode && d[measureTagCode] !== undefined) {
          const [value, unit] = unitConvert(
            measureTagCode,
            d[measureTagCode],
            nodeDetail?.extData?.appearance?.unitCode || ""
          );
          setPlaceholderText(
            graph,
            cell?.id,
            (nodeDetail?.extData?.appearance?.displayName || "") +
              value +
              " " +
              unit,
            undefined,
            nodeDetail?.extData?.appearance?.textSize
          );
        }
      }
      // 电池簇、车位监听soc并修改文本值
      if (n?.data?.key === "battery" || n?.data?.key === "parking") {
        if (d["soc"] !== undefined) setSocText(n, d["soc"]);
      }
    }
  });
};

export {
  removeNodeTools,
  showAllNodePorts,
  hideAllNodePorts,
  addBoundaryTool,
  setPlaceholderStrokeWidth,
  setPlaceholderText,
  setNodeDisplayColor,
  setSocText,
  setEdgeStyles,
  setEdgeAnim,
  removeEdgeAnim,
  findParentInverter,
  initWiringItems,
};
