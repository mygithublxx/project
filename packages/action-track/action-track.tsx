import React, { useEffect, useMemo, useRef } from "react";
import { useDevice } from "@gw/hooks";
import configCenter from "@gw/odm-db";
import { ActionTrackContext } from "./context";
import { useRouteTrack } from "./hooks";
import { initActionTrack, useMqtt } from "..";
import type { IPageTrackInfo, IComponentTrackInfo } from "./dto";
import type { ActionTrackProps, ActionTrackInfo, UserInfo } from "./dto";

const { MqttConfig } = configCenter;
/**
 * 从 localstorage 中获取数据
 */
const LOCALSTORAGE_USERINFO = "userinfo";

/**
 * 默认的 topic
 */
const MQTT_TOPIC = "sebu/platform/user-operation-log";

/**
 * 用户行为埋点收集组件
 * @param props ActionTrackProps
 */
const ActionTrackProvider = (props: ActionTrackProps) => {
  let removeClickListen;
  const trackInfoRef = useRef<ActionTrackInfo>();
  const trackRepotInfoRef = useRef<ActionTrackInfo>();
  const currentUrl = useRef<string>(window.location.href);
  const currentPageInfo = useRef<IPageTrackInfo>();

  const getComponentId = (elementName: string) => {
    const idx = currentUrl.current.indexOf("/");
    const substr = currentUrl.current.slice(idx + 2);
    const index = substr.indexOf("/");
    return `${substr.slice(index)}=>${elementName}`;
  };

  const reportTabInfo = ({ componentId, type }: IComponentTrackInfo) => {
    currentUrl.current = window.location.href;
    const newTrackInfo = buildTrackInfo();
    trackRepotInfoRef.current = { ...newTrackInfo };
    report2Mqtt({
      ...newTrackInfo,
      componentId,
      extInfo: { ...newTrackInfo.extInfo, type },
    });
  };
  /**
   * 创建上下文
   */
  const context = useMemo(
    () => ({
      reportTabInfo,
      getComponentId,
      getTrackData: (elementName: string, extra?: Record<string, any>) => {
        const componentId = getComponentId(elementName);
        return JSON.stringify({
          componentId,
          ...extra,
        });
      },
    }),
    []
  );

  /**
   * 获取浏览器信息
   */
  const deviceInfo = useDevice();

  /**
   * 默认使用 mqtt 推送埋点信息
   */
  const { init, destroy, publish } = useMqtt();

  /**
   * 获取用户信息
   */
  const getReportUserInfo = () => {
    const userInfo: UserInfo = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_USERINFO)
    );
    return {
      userId: userInfo?.id || "",
      switchLogin: userInfo?.switch2Login || false,
      switchOperatorUserId: userInfo?.switchOperatorUserId || "",
      clientIp: userInfo?.clientIp || "",
    };
  };

  const buildTrackInfo = () => {
    const info = trackInfoRef.current || ({} as ActionTrackInfo);
    const reportUserInfo = getReportUserInfo();
    const newTrackInfo: ActionTrackInfo = {
      tp: info.tp || new Date().getTime(),
      applicationCode: props.applicationCode ?? "",
      operationType: "page-view",
      // 用户信息
      ...reportUserInfo,
      // 浏览器信息
      accessDevice: deviceInfo?.deviceType,
      deviceModel: deviceInfo?.browserInfo,
      // 页面信息
      ...currentPageInfo.current,
      // 扩展信息
      extInfo: {
        ...deviceInfo,
        url: window.location.href,
      },
    };
    return newTrackInfo;
  };

  const report2Mqtt = (trackInfo: ActionTrackInfo | ActionTrackInfo[]) => {
    if (!publish) {
      console.error(
        "You need to configure MqttReduxProvider externally, or use buildInMqtt props"
      );
      return;
    }
    publish(props.topic ?? MQTT_TOPIC, JSON.stringify(trackInfo));
  };

  const handleRouterTrack = () => {
    currentUrl.current = window.location.href;
    const newTrackInfo = buildTrackInfo();
    trackRepotInfoRef.current = { ...newTrackInfo };
    if (props.cancelReport) {
      return;
    }
    report2Mqtt(newTrackInfo);
  };

  const handleClickTrack = (message: { event: string; data: any }) => {
    const newTrackInfo: ActionTrackInfo = {
      ...buildTrackInfo(),
      ext: message,
      component: message.data?.componentId,
    };
    report2Mqtt(newTrackInfo);
  };

  /**
   * 获取页面信息成功后
   */
  useRouteTrack(props.routes, (info) => {
    if (props.routes) {
      currentPageInfo.current = info;
      handleRouterTrack();
    }
  });

  /**
   * 兼容平台老版本
   */
  useEffect(() => {
    if (props.trackInfo) {
      const reportUserInfo = getReportUserInfo();
      trackInfoRef.current = {
        ...props.trackInfo,
        ...reportUserInfo,
        tp: new Date().getTime(),
        url: currentUrl.current,
      };
      // 用户端自己做埋点信息上报
      if (props.customReport) {
        props.customReport(trackInfoRef.current);
      }
    }
  }, [props.trackInfo]);

  useEffect(() => {
    if (!props.disabled) {
      if (props.buildInMqtt) {
        init?.(MqttConfig);
      }
      removeClickListen = initActionTrack({
        onClickEvent: handleClickTrack,
      });
    }
    return () => {
      if (props.buildInMqtt) {
        destroy?.();
      }
      if (removeClickListen) {
        removeClickListen();
      }
    };
  }, [props.disabled, props.buildInMqtt]);

  return (
    <ActionTrackContext.Provider value={context}>
      {props.children}
    </ActionTrackContext.Provider>
  );
};

export default ActionTrackProvider;
