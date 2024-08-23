import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import configCenter from "@gw/odm-db";
import { getAppInGroup, getAppInList, getKey } from "./utils";
import { WE_BANNER_ID } from "../../constant";
import type { AppSelectProps, IAppOption } from "./dto";

import { ReactComponent as ArrowSvg } from "../../assets/arrow_down.svg";
import { ReactComponent as ListBtnSvg } from "../../assets/list_btn.svg";
import { ReactComponent as CardArrowSvg } from "../../assets/card_arrow.svg";

const { entryConfig } = configCenter;

/**
 * 产品选择下拉框
 */
const AppSelect = (props: AppSelectProps) => {
  const { t } = useTranslation();
  const [currIndex, setCurrIndex] = useState(0);

  const {
    value: actVal,
    isI18N,
    data,
    renderModule,
    appList,
    collapsed,
    onCollapsed,
  } = props;
  /**
   * 控制app选择框收起/展开
   */
  const handleCollapsed = () => {
    onCollapsed(!collapsed);
  };

  const bannerId = useMemo(() => `#${WE_BANNER_ID}-${actVal}`, [actVal]);

  const options = useMemo<IAppOption[]>(() => {
    if (!data) return [];

    const res = appList
      ? getAppInList(appList, data)
      : getAppInGroup(actVal, data);

    return res;
  }, [data, appList, actVal]);

  /**
   * 列表左、右划事件回调
   */
  const onListLeftClick = () => {
    if (currIndex < 1) return;
    setCurrIndex((i) => i - 1);
  };
  const onListRightClick = () => {
    if (currIndex > options.length - 2) return;
    setCurrIndex((i) => i + 1);
  };

  /**
   * 卡片点击事件回调
   */
  const onCardClick = () => {
    onCollapsed(true);
  };

  const entryWithQuery = useMemo(() => {
    const entries = Object.assign(entryConfig, {
      support:
        entryConfig.support +
        `?puserid=${localStorage.getItem(
          "puserid"
        )}&ptoken=${localStorage.getItem("accesstoken")}`,
    });

    return entries;
  }, [entryConfig]);

  useEffect(() => {
    const handleClickOutSide = () => {
      onCollapsed(true);
    };
    window.addEventListener("click", handleClickOutSide);

    return () => window.removeEventListener("click", handleClickOutSide);
  }, []);

  if (renderModule?.render) {
    return renderModule.render(
      {},
      {
        active: actVal,
        bannerId,
        options,
        isI18N,
      }
    );
  }

  return (
    <div
      className={classNames("wbuc-app-select", props.className, {
        ["wbuc-app-select-collapsed"]: collapsed,
      })}
    >
      {options.some((m) => m.value === actVal) && (
        <>
          <span onClick={handleCollapsed}>
            {options.find((m) => m.value === actVal)?.label || "--"}
          </span>
          <ArrowSvg />
        </>
      )}
      {!!document.querySelector(bannerId) &&
        createPortal(
          <div
            className={classNames("wbuc-app-dropdown", {
              ["wbuc-app-dropdown-collapsed"]: collapsed,
            })}
          >
            <div className={"list-btn"} onClick={onListLeftClick}>
              <ListBtnSvg />
            </div>
            <div
              className={"app-card-wrapper"}
              style={{ transform: `translateX(-${16.875 * currIndex}rem)` }}
            >
              {options.map(({ value: code, i18nKey, label, bg }) => (
                <a
                  key={code}
                  data-card-title={isI18N && i18nKey ? t(i18nKey) : label}
                  data-app-theme={code}
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                  className={classNames("app-card", {
                    ["app-card-selected"]: code === actVal,
                  })}
                  target={getKey(code) === "support" ? "_blank" : "_self"}
                  href={entryWithQuery[getKey(code)]}
                  onClick={onCardClick}
                >
                  <div className={"guideline"}>
                    <span>{isI18N && i18nKey ? t(i18nKey) : label}</span>
                    <CardArrowSvg />
                  </div>
                </a>
              ))}
            </div>
            <div
              className={"list-btn"}
              style={{ transform: "rotateZ(180deg)", top: 0, right: 0 }}
              onClick={onListRightClick}
            >
              <ListBtnSvg />
            </div>
          </div>,
          document.querySelector(bannerId)
        )}
    </div>
  );
};

export default AppSelect;
