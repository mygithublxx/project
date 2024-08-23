import { matchPath } from "react-router-dom";
import { WE_COLLECT_TAG } from "../appearance/constant";
import type { AppPremissionItem, TabItem } from "./dto";

/**
 * 获取当前的页面基础信息
 * @param hashStr
 * @param menus
 * @returns
 */
export const getCurrMenuItem = (
  hashStr: string,
  menus: AppPremissionItem[]
) => {
  const currUrl = hashStr.replace("#", "");
  let item = menus?.find(
    (m) =>
      m.componentType === 0 &&
      (currUrl === m.componentUrl || matchPath(currUrl, m.componentUrl))
  );
  if (!item) {
    item = menus?.find(
      (m) => m.componentType === 0 && currUrl.startsWith(m.componentUrl)
    );
  }
  if (item) return item;
};

/**
 * 将收藏页面存储到localStorage中
 * @param appId 产品id
 * @param item 指定标签
 * @returns
 */
export const pushCollectItemToStorage = (appId: string, item: TabItem) => {
  if (!appId) return;
  const collects =
    JSON.parse(localStorage.getItem(WE_COLLECT_TAG) || null) || {};
  const list: TabItem[] = collects[appId] || [];
  if (!item.collected) {
    const res = {};
    [...list].concat(item).forEach((m) => {
      if (!!m.componentId) {
        res[m.componentId] = {
          label: m.name,
          url: `${location.origin}${location.pathname}#${m.componentUrl}`,
          key: m.componentId,
          i18nKey: m.i18nKey,
        };
      } else {
        res[m.key] = m;
      }
    });
    collects[appId] = Object.values(res);
  } else {
    collects[appId] = list.filter((m) => m.key !== item.componentId);
  }
  if (typeof Storage !== "undefined") {
    localStorage.setItem(WE_COLLECT_TAG, JSON.stringify(collects));
    window.dispatchEvent(new StorageEvent("storage", { key: WE_COLLECT_TAG }));
  } else {
    console.error("localStorage 不可用");
  }
};
