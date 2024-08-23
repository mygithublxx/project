import { HC_DOWN, HC_LEFT, HC_RIGHT, HC_UP } from "../../nodes/HC";

const map = {
  "HC-UP": HC_UP,
  "HC-DOWN": HC_DOWN,
  "HC-LEFT": HC_LEFT,
  "HC-RIGHT": HC_RIGHT,
};

export const HandleHC = (targetNode, result) => {
  const targetType = result?.irregularStatus;
  const metaData = map[targetType];
  const targetAttrs = metaData.attrs;
  const targetMarkup = metaData.markup;
  targetNode.setAttrs(targetAttrs);
  targetNode.setMarkup(targetMarkup);
};

export const ResetHandleHC = (targetNode) => {
  const originType = targetNode?.data?.key;
  const metaData = map[originType];
  const originAttrs = metaData.attrs;
  const originMarkup = metaData.markup;
  targetNode.setAttrs(originAttrs);
  targetNode.setMarkup(originMarkup);
};
