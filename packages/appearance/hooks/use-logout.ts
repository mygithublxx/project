import { useCallback } from "react";
import { ApiMethodObj } from "@gw/gw-request";
import centerCenter from "@gw/odm-db";
import { useRequest } from "../../appearance/utils";

const useLogout = (api: ApiMethodObj, targetPage) => {
  const [, fetchLogout] = useRequest(api);
  return useCallback<() => Promise<void>>(() => {
    return fetchLogout()
      .then(() => {
        // 根据约定，退出登录时不再清空所有localstoarge，而是清空所有不是以_开头的值
        // 以_开头的key约定为持久存储
        Object.keys(localStorage).forEach((item) => {
          if (!item.startsWith("_")) {
            localStorage.removeItem(item);
          }
        });
        if (targetPage) {
          window.location.href = targetPage;
        } else {
          window.location.href = centerCenter.entryConfig.login;
        }
      })
      .catch((e) => {
        console.log(`[wbuc]: Logout error`, e);
        return Promise.reject(e);
      });
  }, [api, targetPage]);
};

export default useLogout;
