import { ISD_CLOSE, ISD_OPEN } from "../../nodes/ISD";

export const HandleISD = (targetNode, result) => {
  if (result?.irregularStatus === "ISD-OPEN") {
    const metaData = ISD_OPEN;
    const targetAttrs = metaData.attrs;
    const targetMarkup = metaData.markup;
    targetNode.setAttrs(targetAttrs);
    targetNode.setMarkup(targetMarkup);
  } else {
    const metaData = ISD_CLOSE;
    const targetAttrs = metaData.attrs;
    const targetMarkup = metaData.markup;
    targetNode.setAttrs(targetAttrs);
    targetNode.setMarkup(targetMarkup);
  }
};

export const ResetHandleISD = (targetNode) => {
  const metaData = ISD_CLOSE;
  const targetAttrs = metaData.attrs;
  const targetMarkup = metaData.markup;
  targetNode.setAttrs(targetAttrs);
  targetNode.setMarkup(targetMarkup);
};
