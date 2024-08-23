/**
 *
 * 插件的通用操作
 *
 */

import { Graph, Node } from "@antv/x6";
import { Dnd } from "@antv/x6-plugin-dnd";

/**
 * 创建一个dnd插件实例
 * @param graph 图表对象
 * @param dndContainer dnd拖拽插件的容器
 * @param getDropNode 自定义放下去的节点
 * @returns dnd对象
 */
const createDndPlugin = (
  graph: Graph,
  dndContainer: string,
  getDropNode: (
    draggingNode: Node<Node.Properties>,
    options: Dnd.GetDropNodeOptions
  ) => Node<Node.Properties>,
  validateNode?: (
    droppingNode: Node<Node.Properties>,
    options: Dnd.ValidateNodeOptions
  ) => boolean | Promise<boolean>
) => {
  // 添加拖拽插件
  const dnd = new Dnd({
    target: graph,
    dndContainer: document.getElementById(dndContainer),
    getDropNode: getDropNode,
    validateNode: validateNode,
  });
  return dnd;
};

export { createDndPlugin };
