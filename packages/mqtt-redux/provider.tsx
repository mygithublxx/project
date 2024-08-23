import React, { useMemo, useReducer, useRef } from "react";
import mqtt from "mqtt";
import {
  addTopics,
  removeTopics,
  receiveMessage,
  updateMqttData,
} from "./action";
import type {
  MqttProps,
  IMqttContext,
  IMqttProfile,
  IMessageTopicHandles,
  IMqttOnMessageHandle,
  IUnpublishedMessage,
} from "./type";
import { MqttContext } from "./context";
import MqttProducer from "./reducer";
import { INITIAL_STATE } from "./utils";

/**
 * MQTT 组件
 * @param props MqttProps MQTT props
 * @deprecated 已迁移，请改为 import { MqttReduxProvider } from "@gw/gw-arch";
 */
const MqttReduxProvider = (props: MqttProps) => {
  const initialState = INITIAL_STATE;
  const [state, dispatch] = useReducer(MqttProducer, initialState);

  /**
   * MQTT 实例
   */
  const mqttIns = useRef<mqtt.MqttClient>();
  /**
   * 要接受消息的 topic,存储对topic的订阅栈，例如{topic1:[handle1,handle2],topic2:[handle3,handle4]}
   */
  const msgTopics = useRef<IMessageTopicHandles>({});
  /**
   * 实例化之前的消息
   */
  const unPublishedMessages = useRef<IUnpublishedMessage[]>([]);
  /**
   * 创建上下文
   */
  const context = useMemo<IMqttContext>(
    () => ({
      state,
      dispatch,
      init: (profile: IMqttProfile) => {
        // 只允许一个实例, mqtt 客户端会自己保持链接及重连
        if (mqttIns.current) {
          return;
        }
        mqttIns.current = mqtt.connect(profile.url, profile.options);
        mqttIns.current.on("connect", () => {
          console.log("mqtt已连接");
          let unPublishMessage: IUnpublishedMessage;
          while ((unPublishMessage = unPublishedMessages.current.shift())) {
            mqttIns.current?.publish(
              unPublishMessage.topic,
              unPublishMessage.message
            );
          }
        });

        mqttIns.current.on("disconnect", () => {
          console.log("mqtt已断开");
        });

        mqttIns.current.on("reconnect", () => {
          console.log("mqtt正在重连...");
        });

        mqttIns.current.on("offline", () => {
          console.log("mqtt已离线");
        });

        mqttIns.current.on("message", (topic: string, buffer: Buffer) => {
          console.log("on message", topic, buffer.toString());
          // 将订阅信息发布到redux中
          dispatch(receiveMessage(topic, buffer));
          // 只订阅消息接受
          if (msgTopics.current[topic]?.length > 0) {
            msgTopics.current[topic].forEach((handle) => {
              handle(buffer, topic);
            });
          }
        });
      },
      // 订阅
      subscribe: (topic: string) => {
        dispatch(
          addTopics({
            data: topic,
            client: mqttIns.current,
          })
        );
        // 直接返回取消订阅的方法
        return () => {
          dispatch(
            removeTopics({
              data: topic,
              client: mqttIns.current,
            })
          );
        };
      },
      // 取消订阅
      unsubscribe: (topic: string) => {
        dispatch(
          removeTopics({
            data: topic,
            client: mqttIns.current,
          })
        );
      },
      // 接受消息
      onMessage: (topic: string | string[], handle: IMqttOnMessageHandle) => {
        if (typeof topic === "string") {
          if (!msgTopics.current[topic]) {
            msgTopics.current[topic] = [];
          }
          msgTopics.current[topic].push(handle);
          return () => {
            msgTopics.current[topic] = msgTopics.current[topic].filter(
              (m) => m !== handle
            );
          };
        } else if (typeof topic === "object" && topic.length > 0) {
          topic.forEach((topicItem) => {
            if (!msgTopics.current[topicItem]) {
              msgTopics.current[topicItem] = [];
            }
            msgTopics.current[topicItem].push(handle);
          });
          return () => {
            topic.forEach((tItem) => {
              msgTopics.current[tItem] = msgTopics.current[tItem].filter(
                (m) => m !== handle
              );
            });
          };
        }
      },
      // 发布话题
      publish: (topic: string, message: string) => {
        if (!mqttIns.current) {
          unPublishedMessages.current.push({
            topic,
            message,
          });
        } else {
          mqttIns.current.publish(topic, message);
        }
      },
      /**
       * 断开链接并释放资源
       * @description
       */
      destroy: () => {
        dispatch(updateMqttData(INITIAL_STATE));
        if (mqttIns.current) {
          mqttIns.current.end();
          mqttIns.current = null;
        }
      },
      updateMqttData: (data: Record<string, any>) => {
        dispatch(updateMqttData(data));
      },
    }),
    [state]
  );

  return (
    <MqttContext.Provider value={context}>
      {props.children}
    </MqttContext.Provider>
  );
};

export default MqttReduxProvider;
