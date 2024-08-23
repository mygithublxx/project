import React, { ReactElement, useMemo } from "react";

import powerCloseIcon from "./assets/power-tab-close-icon.svg";
import powerCollectIcon from "./assets/power-collect-icon.svg";
import powerCollectedIcon from "./assets/power-collected-icon.svg";

interface TabIcons {
  /** 关闭icon */
  closeIcon: ReactElement;
  /** 已被收藏的icon */
  collectedIcon: ReactElement;
  /** 未被收藏的icon */
  collectIcon: ReactElement;
}

/** 自定义tab Icon */
const useTabIcon = (appCode: string): TabIcons => {
  /** 关闭icon */
  const closeIcon = useMemo(() => {
    switch (appCode) {
      case "We-Power-New":
        return <img src={powerCloseIcon} alt="" />;
      default:
        return null;
    }
  }, [appCode]);
  /** 已被收藏的icon */
  const collectedIcon = useMemo(() => {
    switch (appCode) {
      case "We-Power-New":
        return <img src={powerCollectedIcon} alt="" />;
      default:
        return null;
    }
  }, [appCode]);
  /** 未被收藏的icon */
  const collectIcon = useMemo(() => {
    switch (appCode) {
      case "We-Power-New":
        return <img src={powerCollectIcon} alt="" />;
      default:
        return null;
    }
  }, [appCode]);

  return { closeIcon, collectedIcon, collectIcon };
};

export default useTabIcon;
