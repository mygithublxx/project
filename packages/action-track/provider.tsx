import React from "react";
import ActionTrack from "./action-track";
import { MqttReduxProvider } from "..";
import type { ActionTrackProps } from "./dto";

/**
 * 行为埋点上下文
 * @deprecated 已迁移，请改为 import { ActionTrackProvider } from "@gw/gw-arch";
 */
const ActionTrackProvider = (props: ActionTrackProps) => {
  /**
   * 内置 mqtt
   */
  if (props.buildInMqtt) {
    return (
      <MqttReduxProvider>
        <ActionTrack {...props} />
      </MqttReduxProvider>
    );
  }
  /**
   * 使用外部的 mqtt
   */
  return <ActionTrack {...props} />;
};

export default ActionTrackProvider;
