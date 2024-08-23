import {
  WT_D_D,
  WT_D_Y,
  WT_ONLOAD,
  WT_Y_D,
  WT_Y_Y,
} from "../../const/nodes/WT";

const map = {
  "WT-D-D": WT_D_D,
  "WT-D-Y": WT_D_Y,
  "WT-Y-D": WT_Y_D,
  "WT-Y-Y": WT_Y_Y,
  "WT-ONLOAD": WT_ONLOAD,
};

export const HandleWT = (targetNode, result) => {
  const targetType = result?.irregularStatus;
  const metaData = map[targetType];
  const targetAttrs = metaData.attrs;
  const targetMarkup = metaData.markup;
  targetNode.setAttrs(targetAttrs);
  targetNode.setMarkup(targetMarkup);
};

export const ResetHandleWT = (targetNode) => {
  const originType = targetNode?.data?.key;
  const metaData = map[originType];
  const originAttrs = metaData.attrs;
  const originMarkup = metaData.markup;
  targetNode.setAttrs(originAttrs);
  targetNode.setMarkup(originMarkup);
};
