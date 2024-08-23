import { Cell, Edge, Graph } from "@antv/x6";
import moment from "moment";
import { ResetHandleISD } from "../hooks/element-handler/ISD";
import { ResetHandleGSES } from "../hooks/element-handler/GSES";
import { ResetHandleHC } from "../hooks/element-handler/HC";

const wrapper = {
  strokeWidth: 0,
  fillOpacity: 0,
  fill: "rgb(216, 216, 216)",
  x: 0,
  y: 0,
  width: 40,
  height: 40,
};

const vehicleConstructure = () => {
  return {
    attrs: {
      g1: {
        stroke: "#000",
        fill: "#000",
        refWidth: 1,
        refHeight: 1,
        transform: "translate(-4, 4.000000)",
        strokeDashoffset: 74,
      },
      wrapper: {
        ...wrapper,
      },
      g2: {
        transform: "translate(9.500000, 9.000000)",
      },
      path1: {
        fill: "#0000",
        stroke: "#525F7C",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7.40109373,17.2460666 C2.83530542,18.4998091 0,20.2513929 0,22.1895487 C0,26.0017231 10.9690236,29.092101 24.5,29.092101 C38.0309764,29.092101 49,26.0017231 49,22.1895487 C49,20.1707094 45.9237191,18.354299 41.0197814,17.092101",
      },
      path11: {
        fill: "#0000",
        strokeWidth: 2.5,
        stroke: "#24F7AD",
        strokeDasharray: 74,
        strokeDashoffset: "inherit",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7.40109373,17.2460666 C2.83530542,18.4998091 0,20.2513929 0,22.1895487 C0,26.0017231 10.9690236,29.092101 24.5,29.092101 C38.0309764,29.092101 49,26.0017231 49,22.1895487 C49,20.1707094 45.9237191,18.354299 41.0197814,17.092101",
      },
      line1: {
        x1: 11.212301,
        y1: 8.02498895,
        x2: 17.2568512,
        y2: 8.02498895,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      line2: {
        x1: 27.4568154,
        y1: 6.99203554,
        x2: 28.4072903,
        y2: 6.99203554,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      ellipse1: {
        fill: "#0000",
        cx: 23.3014015,
        cy: 10.227624,
        rx: 2.14449073,
        ry: 2.06974091,
      },
      line3: {
        x1: 21.7902639,
        y1: 14.6328942,
        x2: 27.8348142,
        y2: 14.6328942,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      line4: {
        x1: 5.92331953,
        y1: 14.6328942,
        x2: 19.5235576,
        y2: 14.6328942,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      ellipse2: {
        fill: "#0000",
        cx: 5.92331953,
        cy: 10.227624,
        rx: 2.14449073,
        ry: 2.06974091,
      },
      path2: {
        fill: "#0000",
        d: "M8.21252119,10.325706 C8.49974173,10.343531 8.76060699,10.3524436 8.99511694,10.3524436 C9.92930229,10.3524436 13.9591186,10.3137755 21.0845657,10.2364393 M25.3492159,10.1896341 L25.6303295,10.1896341 L28.8903981,10.1896341 C29.4735909,8.85978607 29.2599612,7.4837885 28.2495091,6.06164135 C27.0737469,4.79508002 24.5335324,4.08400645 20.6288657,3.92842062 C18.0549312,1.3329752 16.2199431,0.0352524821 15.1239013,0.0352524821 C12.832429,-0.0440656026 11.7466981,0.0352524821 9.65468179,0.0352524821 C6.58099864,0.201364422 6.1393272,1.81431678 4.46189649,2.49991682 C2.78446577,3.18551686 1.17123601,3.07374774 0.71462559,3.37616923 C0.125906597,3.78463909 -0.238553234,5.53720443 0.181081547,8.00297821 C0.486085372,8.77300274 1.73041027,9.3576629 3.91405624,9.75695869",
      },
      line5: {
        x1: 12.7234386,
        y1: 0.142713807,
        x2: 12.7234386,
        y2: 3.61971881,
        strokeLinecap: "square",
      },
      path3: {
        fill: "#0000",
        d: "M5.44437157,1.85959074 C6.02882288,3.32742775 7.28524164,4.06134625 9.21362786,4.06134625 C11.1420141,4.06134625 14.9470933,4.01703771 20.6288657,3.92842062",
      },
      line6: {
        x1: 0.562427817,
        y1: 4.74318911,
        x2: 1.3519015,
        y2: 4.74318911,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      line7: {
        x1: 1.92816922,
        y1: 14.6052632,
        x2: 4.46241249,
        y2: 14.6052632,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      text1: {
        strokeWidth: 1,
        text: "--",
        x: 25,
        y: 10 + 28,
        fontSize: 10,
        stroke: "rgb(8, 175, 60)",
        fill: "rgb(8, 175, 60)",
        "text-anchor": "middle",
      },
    },
    markup: [
      {
        tagName: "rect",
        selector: "wrapper",
      },
      {
        tagName: "g",
        selector: "g1",
        children: [
          {
            tagName: "path",
            selector: "path1",
          },
          {
            tagName: "path",
            selector: "path11",
          },
          {
            tagName: "text",
            selector: "text1",
          },
          {
            tagName: "g",
            selector: "g2",
            children: [
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "ellipse",
                selector: "ellipse1",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "ellipse",
                selector: "ellipse2",
              },
              {
                tagName: "path",
                selector: "path2",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "path",
                selector: "path3",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "line",
                selector: "line7",
              },
            ],
          },
        ],
      },
    ],
  };
};

const parkingConstructure = () => {
  return {
    attrs: {
      g1: {
        stroke: "#000",
        fill: "#000",
        refWidth: 1,
        refHeight: 1,
        transform: "translate(6, 6.000000)",
      },
      wrapper: {
        ...wrapper,
      },
      parkingPath1: {
        fill: "#0000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "3, 3",
        strokeWidth: 1,
        d: "M2,0 L26,0 C27.1045695,1.53715886e-15 28,0.8954305 28,2 L28,26 C28,27.1045695 27.1045695,28 26,28 L2,28 C0.8954305,28 1.87533573e-15,27.1045695 0,26 L0,2 C-3.57315355e-16,0.8954305 0.8954305,-1.91384796e-17 2,0 Z",
      },
      parkingText1: {
        text: "p",
        fontFamily: 'PingFangSC-Semibold, "PingFang SC"',
        fontSize: 14,
        fontWeight: 500,
        x: 10,
        y: 16,
        stroke: "inherit",
        fill: "inherit",
        "text-anchor": "start",
      },
    },
    markup: [
      {
        tagName: "rect",
        selector: "wrapper",
      },
      {
        tagName: "g",
        selector: "g1",
        children: [
          {
            tagName: "path",
            selector: "parkingPath1",
          },
          {
            tagName: "text",
            selector: "parkingText1",
          },
        ],
      },
    ],
  };
};

const compareRationalOperation = (
  mqttVal: number,
  operation: number,
  compare: number
) => {
  // 大于
  if (operation === 1) {
    return mqttVal > compare;
  }
  if (operation === 2) {
    return mqttVal < compare;
  }
  if (operation === 3) {
    return mqttVal === compare;
  }
  if (operation === 4) {
    return mqttVal >= compare;
  }
  if (operation === 5) {
    return mqttVal <= compare;
  }
  if (operation === 6) {
    return mqttVal !== compare;
  }
};

const compareTimeRange = (timezone, timeRange) => {
  const date = moment();
  const tmpRange = [];
  if (timeRange?.length < 2 && !timeRange[0] && !timeRange[1]) {
    return false;
  }
  const tmp0 = moment(timeRange[0]);
  const tmp1 = moment(timeRange[1]);
  tmpRange[0] = moment(date)
    .hour(tmp0.get("hour"))
    .minute(tmp0.get("minute"))
    .second(tmp0.get("second"));

  tmpRange[1] = moment(date)
    .hour(tmp1.get("hour"))
    .minute(tmp1.get("minute"))
    .second(tmp1.get("second"));

  const current = moment(
    moment()
      // .utcOffset(timezone * 60)
      .format("yyyy-MM-DD HH:mm:ss")
  );

  if (current.isBetween(tmpRange[0], tmpRange[1])) {
    return true;
  }
  return false;
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

const clearEdgeAnim = (edge: Edge) => {
  if (edge?.isEdge()) {
    edge?.removeMarkup();
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

export {
  compareRationalOperation,
  compareTimeRange,
  setSocText,
  setPlaceholderText,
  setNodeDisplayColor,
  clearEdgeAnim,
  setEdgeAnim,
  setEdgeStyles,
  parkingConstructure,
  vehicleConstructure,
  ResetHandleISD,
  ResetHandleGSES,
  ResetHandleHC,
};
