import type { MqttClient } from "mqtt";
import { messageTopic } from "./utils";

export default (state, { type, payload }) => {
  switch (type) {
    // 添加订阅 topics
    case "ADD_TOPIC_SUBSCRIBE":
      const addTopics = { ...state.topics };
      const payloadAddTopics: string[] =
        typeof payload.data === "string" ? [payload.data] : payload.data;
      (<MqttClient>payload.client)?.subscribe(payloadAddTopics);
      payloadAddTopics.forEach((item) => {
        addTopics[item] = (addTopics[item] || 0) + 1;
      });
      return { ...state, topics: addTopics };
    // 取消订阅 topics
    case "REMOVE_TOPIC_SUBSCRIBE":
      const removeTopics = { ...state.topics };
      const payloadRemoveTopics: string[] =
        typeof payload.data === "string" ? [payload.data] : payload.data;
      // 需要取消订阅
      const unSubscribeTopics = payloadRemoveTopics.reduce<string[]>(
        (tps, item) => {
          if (removeTopics[item]) {
            removeTopics[item] -= 1;
            if (removeTopics[item] <= 0) {
              delete removeTopics[item];
              tps.push(item);
            }
          } else {
            tps.push(item);
          }
          return tps;
        },
        []
      );
      // 取消订阅
      if (unSubscribeTopics.length > 0) {
        (<MqttClient>payload.client)?.unsubscribe(unSubscribeTopics);
      }
      return { ...state, topics: removeTopics };
    case "UPDATE_MQTT_DATA":
      return { ...state, ...payload };
    case "TOPIC_ON_MESSAGE":
      // 解析 topic 获取， 类型和设备sn
      const msgReg = messageTopic(payload.topic);
      if (!msgReg) {
        return state;
      }
      const [topicType, deviceSn] = msgReg;
      // 接受的消息， 以 sn 为 key，消息为上次消息与本次消息的并集
      const receiveMessage = {
        [deviceSn]: {
          ...state.meterData[deviceSn],
          ...JSON.parse(payload.message),
        },
      };
      switch (topicType) {
        // 目前只实现了设备的遥测数据
        case "meter":
          return {
            ...state,
            meterData: {
              ...state.meterData,
              ...receiveMessage,
            },
          };
        default:
          return state;
      }
    case "INIT_METER_DATA":
      let cpMeterData = { ...state.meterData };
      payload.forEach((m) => {
        const { nodeId, ...meter } = m;
        // 将数字转换为数字类型
        const normalize = Object.keys(meter).reduce((pre, item) => {
          if (/^-?[0-9.,]*$/.test(meter[item] + "")) {
            pre[item] = parseFloat(meter[item]);
          } else {
            pre[item] = meter[item];
          }
          return pre;
        }, {});
        cpMeterData = {
          ...cpMeterData,
          [nodeId]: { ...cpMeterData[nodeId], ...normalize },
        };
      });
      return { ...state, meterData: cpMeterData };
    default:
      return state;
  }
};
