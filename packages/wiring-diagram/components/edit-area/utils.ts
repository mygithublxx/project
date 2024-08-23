import { Node } from "@antv/x6";
import {
  setEdgeStyles,
  setNodeDisplayColor,
  setPlaceholderText,
} from "../../utils/node-utils";

const MPPT_OFFSET = 2 * 50;

export const refreshItems = (graph, curNode, detail) => {
  // 连线的样式处理
  if (curNode.isEdge()) {
    setEdgeStyles(
      curNode,
      detail?.connectColor,
      detail?.strokeStyle,
      detail?.strokeWidth
    );
  }
  // 占位符显示名称处理
  if (curNode?.shape === "placeholder") {
    setPlaceholderText(
      graph,
      curNode.id,
      detail?.displayName,
      detail?.textColor,
      detail?.textSize
    );
  } else {
    setNodeDisplayColor(curNode, detail?.strokeColor, detail?.fillColor);
  }
};

const clearInverterDetails = (graph, node: Node) => {
  const children = node?.getChildren();
  if (children?.length) {
    children.forEach((child) => {
      const grandChildren = child.getChildren();
      if (grandChildren?.length) {
        graph.removeCells(grandChildren);
      }
      graph.removeCell(child.id);
    });
  }
};

const drawMpptNodes = (graph, detail, curNode) => {
  const { x, y } = curNode.getBBox();
  const mpptNum = detail?.deviceData?.inverterModel?.mpptNum || 0;
  const numOfMPPt = detail?.deviceData?.inverterModel?.numOfMPPt || [];
  let mpptOffset = 0;
  for (let i = 0; i < mpptNum; i++) {
    if (i - 1 >= 0) {
      if (numOfMPPt.length) {
        mpptOffset +=
          i - 1 <= numOfMPPt.length - 1
            ? numOfMPPt[i - 1] * 50
            : numOfMPPt[0] * 50;
      } else {
        mpptOffset += MPPT_OFFSET;
      }
    }
    // 生成mpptNode
    const mpptNode = graph.addNode({
      shape: "mppt",
      x: x + mpptOffset + 5,
      y: y + 100,
    });
    curNode.addChild(mpptNode);
    // 连接逆变器和mppt
    graph.addEdge({
      source: curNode,
      target: mpptNode,
      data: { key: "inverter" },
      vertices: [
        { x: x + 20, y: y + 50 },
        { x: x + 20 + mpptOffset, y: y + 50 },
      ],
    });
    if (numOfMPPt[i]) {
      drawStringsNodes(graph, numOfMPPt[i], mpptNode);
    } else {
      drawStringsNodes(graph, numOfMPPt[0], mpptNode);
    }
  }
};

// 绘制逆变器下的组串和mppt
export const drawInverterDetails = (graph, detail, curNode) => {
  // 清空当前node已绘制的mppt信息
  clearInverterDetails(graph, curNode as Node);

  graph.batchUpdate(() => {
    // 逆变器根据返回的厂商信息自动生成组串等信息
    if (detail?.deviceData?.inverterModel) {
      drawMpptNodes(graph, detail, curNode);
    }
  });
};

export const drawStringsNodes = (graph, numOfMPPt, mpptNode) => {
  const { x: xx, y: yy } = mpptNode.getBBox();
  for (let j = 0; j < numOfMPPt; j++) {
    const stringNode1 = graph.addNode({
      shape: "string-inverter",
      x: xx + 4 + j * 25,
      y: yy + 100,
    });
    const stringNode2 = graph.addNode({
      shape: "string-inverter",
      x: xx + 4 + j * 25,
      y: yy + 150,
    });
    graph.addEdge({
      source: stringNode1,
      target: stringNode2,
      data: { key: "inverter" },
      attrs: {
        line: {
          strokeDasharray: 2,
        },
      },
    });
    mpptNode.addChild(stringNode1);
    mpptNode.addChild(stringNode2);
    graph.addEdge({
      source: mpptNode,
      target: stringNode1,
      data: { key: "inverter" },
      vertices: [
        { x: xx + 15, y: yy + 50 },
        { x: xx + 15 + j * 25, y: yy + 50 },
      ],
    });
  }
};
