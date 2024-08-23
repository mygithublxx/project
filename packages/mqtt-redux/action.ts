import type { IMqttClientPayload } from "./type";

/**
 * 新增订阅列表
 * @param payload 新增订阅列表
 * @returns Action
 */
export const addTopics = (payload: IMqttClientPayload) => {
  return {
    type: "ADD_TOPIC_SUBSCRIBE",
    payload,
  };
};

/**
 * 取消订阅列表
 * @param payload 取消订阅数据
 * @returns Action
 */
export const removeTopics = (payload: IMqttClientPayload) => {
  return {
    type: "REMOVE_TOPIC_SUBSCRIBE",
    payload,
  };
};

/**
 * 接受 mqtt 消息
 * @param topic 订阅 topic
 * @param buffer 二进制消息体
 * @returns Action
 */
export const receiveMessage = (topic: string, buffer: Uint8Array) => {
  return {
    type: "TOPIC_ON_MESSAGE",
    payload: {
      topic,
      message: buffer.toString(),
    },
  };
};

/**
 * 将最后一包数据存 redux
 * @param payload 接口最后一包数据
 * @returns Action
 */
export const initMeterData = (payload: any[]) => {
  return {
    type: "INIT_METER_DATA",
    payload,
  };
};

export const updateMqttData = (payload: any) => {
  return {
    type: "UPDATE_MQTT_DATA",
    payload,
  };
};
