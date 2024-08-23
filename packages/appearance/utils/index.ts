import { matchPath } from "react-router-dom";
import { AppPermissionItem } from "../dto";

export * from "@gw/gw-utils";
/**
 * 排序tree
 * @param tree 树形结构数据
 * @param orderby 排序字段
 */
export function sortTree(tree: any[], orderby: string) {
  if (!tree?.length) return [];
  const stack = tree.slice();

  function getSortArr(currArr: any[]) {
    currArr.sort((a, b) => a[orderby] - b[orderby]);
    currArr.forEach((item) => {
      if (item.children) {
        getSortArr(item.children);
      }
    });
  }
  getSortArr(stack);
  return stack;
}
/**
 * 去除树中指定的key
 * @param tree
 * @param keys 不需要的key
 */
export function cleanTree(tree: any[]) {
  if (!tree?.length) return [];
  const stack = tree.slice();

  function getCleanTree(
    currArr: any[],
    keys = ["parentId", "parentRef", "isLeaf", "orderIdx"]
  ) {
    currArr.forEach((m) => {
      for (const key in m) {
        if (m.children?.length) {
          getCleanTree(m.children);
        }
        if (keys.includes(key)) delete m[key];
      }
    });
  }
  getCleanTree(stack);
  return stack;
}

/**
 * 根据url 获取顶层节点
 * @param pathname 当前hash-route
 * @param authMenuList 扁平菜单列表
 * @returns
 */
export function getTopNode(pathname: string, menuList: AppPermissionItem[]) {
  let componentId = "";

  let item = menuList
    .filter((m) => m.componentType === 0)
    .find((m) => matchPath(pathname, m.componentUrl)?.isExact);

  function getComponentId() {
    if (!item?.parentId) {
      componentId = item?.componentId;
      return;
    }
    item = menuList.find((m) => m.id === item.parentId);
    getComponentId();
  }
  getComponentId();

  return componentId;
}

/**
 * 去除树中为空的非叶子节点
 * @param tree
 * @param 叶子节点的判定方法
 * @returns
 */
export function removeEmptyNodes(tree: any[], isLeaf: (item: any) => boolean) {
  // 如果树不是数组，直接返回
  if (!Array.isArray(tree)) {
    return tree;
  }

  return tree
    .map((node) => {
      // 递归处理每个节点
      if (node && typeof node === "object") {
        if (!isLeaf(node) && !node?.children) {
          return null; // 返回 null 表示删除该节点
        }

        if (Array.isArray(node.children)) {
          node.children = removeEmptyNodes(node.children, isLeaf).filter(
            Boolean
          ); // 过滤掉为 null 的子节点
        } else if (node.children && typeof node.children === "object") {
          [node.children] = removeEmptyNodes([node.children], isLeaf).filter(
            Boolean
          ); // 处理单个子节点
        }
      }
      return node;
    })
    .filter(Boolean); // 过滤掉为 null 的节点
}

export { default as useRequest, apis } from "./use-request";
