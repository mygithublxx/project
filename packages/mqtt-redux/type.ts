import React from "react";
import { MqttClient } from "mqtt";

export interface MqttProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactChild;
}

/**
 * mqtt 配置文件
 */
export interface IMqttProfile {
  /**
   * MQTT 链接地址
   */
  url: string;
  /**
   * MQTT 链接选项
   */
  options: Record<string, string>;
}

/**
 * 消息处理方法
 */
export interface IMqttOnMessageHandle {
  (buffer: Buffer, topic?: string): void;
}

/**
 * MQTT 上下文
 */
export interface IMqttContext {
  state?: Record<string, any>;
  dispatch?: any;
  /**
   * 初始化 MQTT 链接
   */
  init?: (profile: IMqttProfile) => void;
  /**
   * 订阅
   * @param topic string | string[] 要订阅的话题
   */
  subscribe?: (topic: string | string[]) => Function;
  /**
   * 接受消息
   * @param topic 订阅的topic
   */
  onMessage?: (
    topic: string | string[],
    handle: IMqttOnMessageHandle
  ) => Function;
  /**
   * 取消订阅
   * @param topic string | string[] 要取消订阅的话题
   */
  unsubscribe?: (topic: string | string[]) => void;
  /**
   * 发布话题
   * @param topic string 话题
   * @param message string 消息
   * @description 在这里要注意，最终所有的内容都必须可以反序列化
   */
  publish?: (topic: string, message: string) => void;
  /**
   * 断开链接并释放资源
   */
  destroy?: () => void;
}

/**
 * 接受消息接受列表
 */
export interface IMessageTopicHandles {
  [topic: string]: IMqttOnMessageHandle[];
}

export interface IMqttClientPayload {
  data: string | string[];
  client: MqttClient;
}

/**
 * 未发布消息
 */
export interface IUnpublishedMessage {
  /**
   * topic
   */
  topic: string;
  /**
   * 消息
   */
  message: string;
}
