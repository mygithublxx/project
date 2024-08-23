import React from "react";
import { IMqttContext } from "./type";

/**
 * MQTT 上下文
 */
export const MqttContext = React.createContext<IMqttContext>({});
