import { Graph } from "@antv/x6";

/**
 *
 * 边的通用操作
 *
 */
const addEdgeTools = (graph: Graph) => {
  const edges = graph.getEdges();
  if (edges && edges.length) {
    edges.map((edge) => {
      if (edge.hasTools("vertices") && edge.hasTools("segments")) return;
      edge.addTools([
        // { name: "button-remove", args: { distance: -40 } },
        "vertices",
        "segments",
      ]);
    });
  }
};

const removeEdgeTools = (graph: Graph) => {
  const edges = graph.getEdges();
  if (edges && edges.length) {
    edges.map((edge) => {
      edge.removeTools([
        // { name: "button-remove", args: { distance: -40 } },
        "vertices",
        "segments",
      ]);
    });
  }
};

export { addEdgeTools, removeEdgeTools };
