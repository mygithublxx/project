import { InitReactTrack } from "./dto";

/**
 * 初始化行为埋点
 * @deprecated 已迁移，请改为 import { initActionTrack } from "@gw/gw-arch";
 */
export const initActionTrack = ({ onClickEvent }: InitReactTrack) => {
  const clickCallback = (event: MouseEvent) => {
    const eventBubbleTargets = event.composedPath(); // 从底层元素往上找
    const len = eventBubbleTargets.length;
    for (let i = 0; i < len; i++) {
      const element = eventBubbleTargets[i];
      if (element["dataset"]?.track) {
        const trackProp = element["dataset"].track;
        try {
          const trackPropJSON = JSON.parse(trackProp);
          onClickEvent?.({ event: "click", data: trackPropJSON });
        } catch (error) {
          console.error(
            `The track property ${trackProp} is not a json string`,
            error
          );
        }
        break;
      }
    }
  };

  const listenClick = () => {
    // 获取到页面所有的被监听的元素，即具有自定义属性“data-track”的元素
    document.addEventListener("click", clickCallback);
  };

  listenClick();

  const removeClickListen = () => {
    document.removeEventListener("click", clickCallback);
  };

  return removeClickListen;
};
