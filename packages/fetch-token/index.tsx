import apis from "../utils/apis";
import useRequest from "../utils/use-request";
import React, { PropsWithChildren, useEffect } from "react";

const ONE_HOUR = 60 * 60 * 1000;

interface FetchTokenProps {
  /**
   * 定时执行间隔；单位ms
   * @default 60 * 60 * 1000
   */
  interval?: number;
  onSuccess?: () => void;
  onFail?: (e: any) => void;
}
/**
 * 定时刷新token
 * @deprecated 已迁移，请改为 import { FetchToken } from "@gw/gw-arch";
 */
const FetchToken = (props: PropsWithChildren<FetchTokenProps>) => {
  const [, fetchToken] = useRequest(apis.token.heartBeat);
  useEffect(() => {
    const tid = setInterval(() => {
      fetchToken()
        .then(() => {
          props.onSuccess?.();
        })
        .catch((e) => {
          props.onFail?.(e);
        });
    }, props.interval || ONE_HOUR);
    return () => clearInterval(tid);
  }, []);
  return <>{props.children}</>;
};

export default FetchToken;
