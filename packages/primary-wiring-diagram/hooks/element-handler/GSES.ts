import { GSES_CLOSE, GSES_OPEN } from "../../nodes/GSES";

export const HandleGSES = (targetNode, result) => {
  if (result?.irregularStatus === "GSES-OPEN") {
    const metaData = GSES_OPEN;
    const targetAttrs = metaData.attrs;
    const targetMarkup = metaData.markup;
    targetNode.setAttrs(targetAttrs);
    targetNode.setMarkup(targetMarkup);
  } else {
    const metaData = GSES_CLOSE;
    const targetAttrs = metaData.attrs;
    const targetMarkup = metaData.markup;
    targetNode.setAttrs(targetAttrs);
    targetNode.setMarkup(targetMarkup);
  }
};

export const ResetHandleGSES = (targetNode) => {
  const metaData = GSES_CLOSE;
  const targetAttrs = metaData.attrs;
  const targetMarkup = metaData.markup;
  targetNode.setAttrs(targetAttrs);
  targetNode.setMarkup(targetMarkup);
};
