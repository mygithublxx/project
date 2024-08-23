import { useContext } from "react";
import { ActionTrackContext } from "../context";

/**
 * 获取 MQTT 上下文
 * @deprecated 已迁移，请改为 import { useActionTrack } from "@gw/gw-arch";
 * @returns MQTT 上下文
 */
export const useActionTrack = () => {
  const context = useContext(ActionTrackContext);
  return context;
};

export default useActionTrack;
