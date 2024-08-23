import { useContext, useEffect, useState } from "react";
import { MqttContext } from "./context";

/**
 * 获取 MQTT 上下文
 * @returns MQTT 上下文
 * @deprecated 已迁移，请改为 import { useMqtt } from "@gw/gw-arch";
 */
export const useMqtt = () => {
  const context = useContext(MqttContext);
  return context;
};

/**
 * @deprecated 已迁移，请改为 import { useSelector } from "@gw/gw-arch";
 */
export const useSelector = (
  state: Record<string, any>,
  selectedProp: string
) => {
  const [selectedState, setSelectedState] = useState<Record<string, any>>(
    state[selectedProp]
  );

  useEffect(() => {
    setSelectedState((prevState) => state[selectedProp]);
  }, [state[selectedProp]]);

  return selectedState;
};
