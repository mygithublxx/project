import { useContext } from "react";
import { MenuContext } from "..";
import { MenuItem } from "./dto";
import { cleanTree, flat2TreeWrapper, sortTree } from "../utils";

export const useMenuVis = (): [any, (keys?: string[]) => void] => {
  const { menu, fullMenu, setMenu, activeApp } = useContext(MenuContext);

  const updateMenu = (keys?: string[]) => {
    setMenu(() => {
      let flatRes = [];
      let res = [];
      let tmp = [];
      if (fullMenu?.length) {
        if (keys) {
          tmp = fullMenu.filter((m) => !keys.includes(m.cid));
        } else {
          tmp = fullMenu;
        }
        res = flat2TreeWrapper<MenuItem>(tmp, { key: "key" });
        res = sortTree(res, "orderIdx");
        res = cleanTree(res);
        //去除根节点，只显示两层
        res.forEach((m) => {
          if (Array.isArray(m.children)) flatRes.push(...m.children);
        });
        // 没有子节点时不显示父节点
        flatRes = flatRes.filter((m) => m.children?.length);
      }
      if (activeApp === "Platform") {
        return [...flatRes];
      } else {
        return [...res];
      }
    });
  };

  return [menu, updateMenu];
};
