// 一次接线图图表
import placeholderSVG from "../assets/items/placeholder.png";
import loadSVG from "../assets/items/load.png";
import breakerOpenSVG from "../assets/items/breaker-open.png";
import inverterOtherSVG from "../assets/items/inverter-other.png";
import photovoltaicSVG from "../assets/items/photovoltaic.png";
import chargingPileDCSVG from "../assets/items/charging-pile.png";
import batteryPackSVG from "../assets/items/battery.png";
import inverterSVG from "../assets/items/inverter.png";
import airConditionerSVG from "../assets/items/air-conditioner.png";
import windSVG from "../assets/items/wind.svg";
import chargeGunSVG from "../assets/items/charge-gun.svg";
import WT3SVG from "../assets/items/3WT.svg";
import HCSVG from "../assets/items/HC_UP.svg";
import HCDOWNSVG from "../assets/items/HC_DOWN.svg";
import HCRIGHTSVG from "../assets/items/HC_RIGHT.svg";
import HCLEFTSVG from "../assets/items/HC_LEFT.svg";
import LLISVG from "../assets/items/LLI.svg";
import SASVG from "../assets/items/SA.svg";
import SPSVG from "../assets/items/SP.svg";
import FUSESVG from "../assets/items/FUSE.svg";
import ISDOPENSVG from "../assets/items/ISD-OPEN.svg";
import ISDCLOSESVG from "../assets/items/ISD-CLOSE.svg";
import GSESOPENSVG from "../assets/items/GSES-OPEN.svg";
import GSESCLOSESVG from "../assets/items/GSES-CLOSE.svg";
import CTSVG from "../assets/items/CT.svg";
import WT2SVG from "../assets/items/2WT.svg";
import WT2_D_D_SVG from "../assets/items/2WT-D-D.svg";
import WT2_D_Y_SVG from "../assets/items/2WT-D-Y.svg";
import WT2_Y_D_SVG from "../assets/items/2WT-Y-D.svg";
import WT2_Y_Y_SVG from "../assets/items/2WT-Y-Y.svg";
import WT2_ONLOAD_SVG from "../assets/items/2WT-onload.svg";

import { IGraphOptions } from "../dto";

export const MICROGRID = "microgrid";
export const STORAGE = "storage";
export const PHOTOVOLTAIC = "photovoltaic";
export const CHARGE = "charge";
export const WIND = "wind";

const groupsOptions = {
  top: {
    position: "top",
    attrs: {
      circle: {
        magnet: true,
        stroke: "#8f8f8f",
        r: 0,
      },
    },
    label: {
      position: "top",
    },
  },
  bottom: {
    position: "bottom",
    attrs: {
      circle: {
        magnet: true,
        stroke: "#8f8f8f",
        r: 0,
      },
    },
    label: {
      position: "top",
    },
  },
  left: {
    position: "left",
    attrs: {
      circle: {
        magnet: true,
        stroke: "#8f8f8f",
        r: 0,
      },
    },
    label: {
      position: "left",
    },
  },
  right: {
    position: "right",
    attrs: {
      circle: {
        magnet: true,
        stroke: "#8f8f8f",
        r: 0,
      },
    },
    label: {
      position: "right",
    },
  },
};

const portItems = [
  { id: "top", group: "top" },
  { id: "left", group: "left" },
  { id: "right", group: "right" },
  { id: "bottom", group: "bottom" },
];

export const wiringItemList = [
  {
    key: "placeholder",
    icon: placeholderSVG,
    name: "占位符",
    nodeStyle: {
      data: {
        key: "placeholder",
      },
    },
  },
  {
    key: "load",
    icon: loadSVG,
    name: "负荷",
    nodeStyle: {
      width: 40,
      height: 40,
      data: {
        key: "load",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "breaker-open",
    icon: breakerOpenSVG,
    name: "断路器",
    nodeStyle: {
      data: {
        key: "breaker-open",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "battery",
    icon: batteryPackSVG,
    name: "电池簇",
    nodeStyle: {
      data: {
        key: "battery",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "photovoltaic",
    icon: photovoltaicSVG,
    name: "光伏组件",
    nodeStyle: {
      data: {
        key: "photovoltaic",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "charging-pile",
    icon: chargingPileDCSVG,
    name: "充电桩",
    nodeStyle: {
      data: {
        key: "charging-pile",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "inverter",
    icon: inverterSVG,
    name: "逆变器",
    nodeStyle: {
      data: {
        key: "inverter",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "inverter-other",
    icon: inverterOtherSVG,
    name: "其他逆变器",
    nodeStyle: {
      data: {
        key: "inverter-other",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "charge-gun",
    icon: chargeGunSVG,
    name: "充电枪",
    nodeStyle: {
      data: {
        key: "charge-gun",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "air-conditioner",
    icon: airConditionerSVG,
    name: "空调",
    nodeStyle: {
      data: {
        key: "air-conditioner",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "wind",
    icon: windSVG,
    name: "风机",
    nodeStyle: {
      data: {
        key: "wind",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "HC",
    icon: HCSVG,
    name: "手车",
    children: [
      {
        key: "HC-UP",
        icon: HCSVG,
        name: "手车-上",
        nodeStyle: {
          data: {
            key: "HC-UP",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "HC-DOWN",
        icon: HCDOWNSVG,
        name: "手车-下",
        nodeStyle: {
          data: {
            key: "HC-DOWN",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "HC-LEFT",
        icon: HCLEFTSVG,
        name: "手车-左",
        nodeStyle: {
          data: {
            key: "HC-LEFT",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "HC-RIGHT",
        icon: HCRIGHTSVG,
        name: "手车-右",
        nodeStyle: {
          data: {
            key: "HC-RIGHT",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
    ],
  },
  {
    key: "2WT",
    icon: WT2SVG,
    name: "双绕组变压器",
    nodeStyle: {
      data: {
        key: "2WT",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
    children: [
      {
        key: "2WT",
        icon: WT2SVG,
        name: "双绕组变压器",
        nodeStyle: {
          data: {
            key: "2WT",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "2WT-onload",
        icon: WT2_ONLOAD_SVG,
        name: "有载调压",
        nodeStyle: {
          data: {
            key: "2WT-onload",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "2WT-Y-Y",
        icon: WT2_Y_Y_SVG,
        name: "星/星",
        nodeStyle: {
          data: {
            key: "2WT-Y-Y",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "2WT-Y-D",
        icon: WT2_Y_D_SVG,
        name: "星/三角",
        nodeStyle: {
          data: {
            key: "2WT-Y-D",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "2WT-D-Y",
        icon: WT2_D_Y_SVG,
        name: "三角/星",
        nodeStyle: {
          data: {
            key: "2WT-D-Y",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
      {
        key: "2WT-D-D",
        icon: WT2_D_D_SVG,
        name: "三角/三角",
        nodeStyle: {
          data: {
            key: "2WT-D-D",
          },
          ports: {
            groups: groupsOptions,
            items: portItems,
          },
        },
      },
    ],
  },
  {
    key: "3WT",
    icon: WT3SVG,
    name: "三绕组变压器",
    nodeStyle: {
      data: {
        key: "3WT",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "LLI",
    icon: LLISVG,
    name: "带电显示器",
    nodeStyle: {
      data: {
        key: "LLI",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "SP",
    icon: SPSVG,
    name: "状态点",
    nodeStyle: {
      data: {
        key: "SP",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "SA",
    icon: SASVG,
    name: "避雷器",
    nodeStyle: {
      data: {
        key: "SA",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "ISD-CLOSE",
    icon: ISDCLOSESVG,
    name: "隔离刀闸",
    nodeStyle: {
      data: {
        key: "ISD-CLOSE",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "GSES-CLOSE",
    icon: GSESCLOSESVG,
    name: "接地刀闸",
    nodeStyle: {
      data: {
        key: "GSES-CLOSE",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
  {
    key: "CT",
    icon: CTSVG,
    name: "CT",
    nodeStyle: {
      data: {
        key: "CT",
      },
      ports: {
        groups: groupsOptions,
        items: portItems,
      },
    },
  },
];

export const fontSizeList = [
  8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 28, 36, 48, 72,
];

const wrapper = {
  strokeWidth: 0,
  fillOpacity: 0,
  fill: "rgb(216, 216, 216)",
  x: 0,
  y: 0,
  width: 40,
  height: 40,
};

export const vehicleConstructure = () => {
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

export const parkingConstructure = () => {
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

export const getWiringNodeByKey = (key: string) => {
  const expandedWritingItemList = wiringItemList.reduce((acc, cur) => {
    if (cur.children) {
      return [...acc, ...cur.children];
    }
    return [...acc, cur];
  }, []);
  if (key) return expandedWritingItemList.find((i) => i.key === key);
};

export const initGraphOptions: IGraphOptions = {
  initBgColor: "#fff",
  initGridColor: "#bebebeFF",
  bgColor: "#fff",
  gridColor: "#bebebeFF",
  showGrid: true,
};
