import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { matchRoutes } from "@gw/gw-utils";
import { getQueryParamsFromLocation } from "../utils";
import type { IPageTrackInfo } from "../dto";

/**
 * 路径追踪hook
 * @param routes 路由配置
 * @param callback 路由发生变化后调用
 * @deprecated 已迁移，请改为 import { useRouteTrack } from "@gw/gw-arch";
 */
const useRouteTrack = (
  routes: any,
  callback: (info: IPageTrackInfo) => void
) => {
  /**
   * 当前页面地址信息
   */
  const location = useLocation();

  /**
   * 监听路由变化
   */
  useEffect(() => {
    if (!routes) {
      console.warn("No route configuration found");
      return;
    }
    const matchRoute = matchRoutes(routes, location.pathname)?.at(-1);
    if (matchRoute) {
      const pageInfo: IPageTrackInfo = {
        componentId: matchRoute.route?.componentId,
        param: {
          ...matchRoute.match?.params,
          ...getQueryParamsFromLocation(location.search),
        },
      };
      callback?.(pageInfo);
    } else {
      console.warn(
        `[action track]: The current page cannot match the route.${location.pathname}`
      );
    }
  }, [location]);
};

export default useRouteTrack;
