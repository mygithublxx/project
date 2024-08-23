import ISDOPENSVG from "../assets/items/ISD-OPEN.svg";
import ISDCLOSESVG from "../assets/items/ISD-CLOSE.svg";
import GSESOPENSVG from "../assets/items/GSES-OPEN.svg";
import GSESCLOSESVG from "../assets/items/GSES-CLOSE.svg";
import HC_UP_SVG from "../assets/items/HC_UP.svg";
import HC_RIGHT_SVG from "../assets/items/HC_RIGHT.svg";
import HC_DOWN_SVG from "../assets/items/HC_DOWN.svg";
import HC_LEFT_SVG from "../assets/items/HC_LEFT.svg";
import WT3_SVG from "../assets/items/3WT.svg";
import CT_SVG from "../assets/items/CT.svg";
import FUSE_SVG from "../assets/items/FUSE.svg";
import LLI_SVG from "../assets/items/LLI.svg";
import SA_SVG from "../assets/items/SA.svg";
import SP_SVG from "../assets/items/SP.svg";
import WT2_SVG from "../assets/items/2WT.svg";
import WT2_ONLOAD_SVG from "../assets/items/2WT-onload.svg";
import WT2_Y_Y_SVG from "../assets/items/2WT-Y-Y.svg";
import WT2_Y_D_SVG from "../assets/items/2WT-Y-D.svg";
import WT2_D_Y_SVG from "../assets/items/2WT-D-Y.svg";
import WT2_D_D_SVG from "../assets/items/2WT-D-D.svg";

export const IRREGULAR_HC_ITEMS = [
  {
    key: "HC-UP",
    svg: HC_UP_SVG,
  },
  {
    key: "HC-RIGHT",
    svg: HC_RIGHT_SVG,
  },
  {
    key: "HC-DOWN",
    svg: HC_DOWN_SVG,
  },
  {
    key: "HC-LEFT",
    svg: HC_LEFT_SVG,
  },
];

export const IRREGULAR_ISD_ITEMS = [
  {
    key: "ISD-CLOSE",
    svg: ISDCLOSESVG,
  },
  {
    key: "ISD-OPEN",
    svg: ISDOPENSVG,
  },
];

export const IRREGULAR_GSES_ITEMS = [
  {
    key: "GSES-CLOSE",
    svg: GSESCLOSESVG,
  },
  {
    key: "GSES-OPEN",
    svg: GSESOPENSVG,
  },
];

export const IRREGULAR_2WT_ITEMS = [
  {
    key: "2WT",
    svg: WT2_SVG,
  },
  {
    key: "2WT-onload",
    svg: WT2_ONLOAD_SVG,
  },
  {
    key: "2WT-Y-Y",
    svg: WT2_Y_Y_SVG,
  },
  {
    key: "2WT-Y-D",
    svg: WT2_Y_D_SVG,
  },
  {
    key: "2WT-D-Y",
    svg: WT2_D_Y_SVG,
  },
  {
    key: "2WT-D-D",
    svg: WT2_D_D_SVG,
  },
];

export const IRREGULAR_ITEMS_MAP = {
  HC: IRREGULAR_HC_ITEMS,
  ISD: IRREGULAR_ISD_ITEMS,
  GSES: IRREGULAR_GSES_ITEMS,
  // "2WT": IRREGULAR_2WT_ITEMS,
};

export const getSVG = (nodeType: string, status: string) => {
  const items = IRREGULAR_ITEMS_MAP[nodeType];
  if (!items) {
    return undefined;
  }
  const item = items.find((i) => i.key === status);
  return item?.svg;
};
