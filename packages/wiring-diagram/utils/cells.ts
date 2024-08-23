import { Graph } from "@antv/x6";

const setCells = (graph: Graph) => {
  const codeListNew = new Set<string>();
  const cells = graph?.getCells();
  cells?.forEach((cell) => {
    const nodeDetail = cell.getData();
    if (nodeDetail?.extData?.appearance?.itemId)
      codeListNew.add(nodeDetail.extData.appearance.itemId);
    if (nodeDetail?.extData?.events?.length) {
      const tmp = nodeDetail.extData?.events;
      for (const element of tmp) {
        for (let j = 0; j < element?.conditionList?.length; j++) {
          if (element.conditionList[j]?.thingId)
            codeListNew.add(element.conditionList[j].thingId);
        }
      }
    }
  });
  return codeListNew;
};

export { setCells };
