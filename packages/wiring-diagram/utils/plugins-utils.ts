// 本地测试插件

import { Keyboard } from "@antv/x6-plugin-keyboard";
import { Selection } from "@antv/x6-plugin-selection";
import { Clipboard } from "@antv/x6-plugin-clipboard";
import { History } from "@antv/x6-plugin-history";
import { Snapline } from "@antv/x6-plugin-snapline";
import { Scroller } from "@antv/x6-plugin-scroller";
// import { Dispatch } from "redux";
// import { updateSavingState } from "../model/actions/wiring";
import { Transform } from "@antv/x6-plugin-transform";
import { Export } from "@antv/x6-plugin-export";

const initPlugins = (graph) => {
  // 添加对齐线
  graph.use(
    new Snapline({
      enabled: true,
      sharp: true,
    })
  );
  graph.use(
    new Transform({
      resizing: { enabled: true, maxWidth: 1000 },
    })
  );
  graph.use(
    new History({
      enabled: false,
      stackSize: 30,
      beforeAddCommand(event, args: any) {
        if (args?.index !== undefined || args?.key === "vertices") {
          // dispatch(updateSavingState(true));
        }
        if (args?.key === "attrs") {
          if (args?.options?.propertyPath?.startsWith("attrs/label")) {
          } else {
            return false;
          }
        }
        if (args?.cell?.data?.key === "placeholder") {
          if (args?.options?.propertyPath === "attrs/body/strokeWidth") {
            return false;
          }
        }
        if (
          args.key === "ports" ||
          args.key === "tools" ||
          args.key === "size"
        ) {
          return false;
        }
        if (args?.options?.deep === true) return false;
        if (
          args?.cell?.shape === "placeholder" &&
          args?.options?.propertyPath === "attrs/g1/strokeWidth"
        ) {
          return false;
        }
      },
    })
  );
  graph.use(
    new Clipboard({
      enabled: true,
    })
  );
  graph.use(
    new Selection({
      enabled: false,
      multiple: true,
      rubberband: true,
      movable: true,
      showNodeSelectionBox: true,
      showEdgeSelectionBox: true,
    })
  );
  graph.use(
    new Keyboard({
      enabled: true,
      global: false,
    })
  );
  graph.use(
    new Scroller({
      enabled: true,
      pageVisible: true,
      pageBreak: true,
      // graph: graph,
      autoResize: true,
      pageWidth: 1920,
      pageHeight: 1080,
    })
  );
  graph.use(new Export());
};

export { initPlugins };
