import React, { useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { Paragraph, Popover } from "@gw/web-basic-components";
import { useTranslation } from "react-i18next";
import type { CollectListProps } from "./dto";

import { ReactComponent as CollectSvg } from "../../assets/collect.svg";
import { ReactComponent as ArrowSvg } from "../../assets/arrow_down.svg";
import { ReactComponent as StarExpandIcon } from "../../assets/menu-icon/seeds-pro/icon_arrow_right.svg";
import { ReactComponent as CollectedSvg } from "../../assets/collected.svg";
/**
 * 收藏页面列表
 */
const CollectList = (props: CollectListProps) => {
  const { t } = useTranslation();
  const popContainRef = useRef<HTMLDivElement>();
  const { data, app, themeCode, expandIcon } = props;

  const [collapsed, setCollapsed] = useState(false);

  /**
   * 最多展示5个
   */
  const list = useMemo(() => {
    if (data?.length > 5) return data.slice(0, 5);
    return data || [];
  }, [data]);

  const InnerExpandIcon = useMemo(() => {
    if (expandIcon) return expandIcon(collapsed);
    //todo 在业务render后，移除此hardcode
    return app === "We-Seeds-Pro" ? <StarExpandIcon /> : <ArrowSvg />;
  }, [collapsed, expandIcon, app]);

  /**
   * 控制收藏列表展开/收起
   */
  const handleCollapsed = () => {
    setCollapsed((s) => !s);
  };
  /**
   * 收藏项点击事件回调
   */
  const onItemClick = (url: string) => {
    if (!url) return;
    location.href = url;
  };

  if (props.collapsed)
    return (
      <div
        className={classNames(
          "wbuc-collect-list-box",
          "wbuc-collect-list-box-collapsed",
          props.className
        )}
        data-app-theme={themeCode || app}
      >
        <div
          ref={popContainRef}
          className={classNames(
            "collect-box-title",
            "wbuc-collect-list-only-icon"
          )}
        >
          <Popover
            title="收藏列表"
            placement="right"
            showArrow={false}
            overlayClassName="wbuc-collect-list-box-popover"
            getPopupContainer={() => popContainRef.current}
            content={() => (
              <>
                {list.map((m, i) => (
                  <div
                    key={i}
                    className={"wbuc-popover-item"}
                    onClick={() => onItemClick(m.url)}
                  >
                    <span className={"wbuc-popover-item-title"}>
                      {props.isI18N && m.i18nKey ? t(m.i18nKey) : m.label}
                    </span>
                  </div>
                ))}
              </>
            )}
          >
            <CollectSvg />
          </Popover>
        </div>
        <div className={"colllect-bottom"}></div>
      </div>
    );

  return (
    <div
      data-app-theme={props.themeCode || props.app}
      style={{
        height: `${5.875 + (collapsed ? 0 : list?.length || 0) * 2.375}rem`,
      }}
      className={classNames(
        "wbuc-collect-list-box",
        {
          ["wbuc-collect-list-box-collapsed"]: collapsed || list.length === 0,
        },
        props.className
      )}
    >
      <div className={"collect-box-title"} onClick={handleCollapsed}>
        <CollectSvg />
        <span>{`${props.isI18N ? t("my_collection") : "我的收藏"}(${
          list?.length || 0
        }/5)`}</span>
        {InnerExpandIcon}
      </div>
      {list.map(({ key, label, url, i18nKey }) => (
        <li
          key={key + Math.random() * 90000 + 10000}
          className={"collect-item"}
          onClick={() => onItemClick(url)}
        >
          <span>
            <CollectedSvg />
          </span>
          <Paragraph type="span">
            {props.isI18N && i18nKey ? t(i18nKey) : label}
          </Paragraph>
        </li>
      ))}
      <div className={"wbuc-collect-bottom"}></div>
    </div>
  );
};

export default CollectList;
