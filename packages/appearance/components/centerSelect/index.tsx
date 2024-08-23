import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import type { CenterSelectProps } from "./dto";
import type { MenuItem } from "../../hooks/dto";
import useOutsideClick from "../../hooks/use-outside-click";
import { ReactComponent as Arrow } from "../../assets/center_arrow.svg";

/**
 * 中心切换组件
 */
const CenterSelect = (props: CenterSelectProps) => {
  const { data, enable } = props;

  const ref = useRef();
  useOutsideClick(ref, () => {
    setCollapsed(true);
  });

  const [collapsed, setCollapsed] = useState(true);
  /**
   * 控制中心选择器展开/收起
   */
  const handleCollapsed = useCallback(() => {
    setCollapsed((c) => !c);
  }, []);
  /**
   * 中心点击回调
   */
  const handleCenterClick = (item: MenuItem) => {
    setCollapsed(true);
    props.onCenterChange?.(item);
  };

  if (!enable) return null;

  if (props.collapsed)
    return (
      <div
        style={{ height: "3.13rem" }}
        className={"wbuc-center-select-container"}
      ></div>
    );

  return (
    <div
      className={classNames("wbuc-center-select-container", props.className, {
        ["wbuc-center-collapsed"]: collapsed,
      })}
      ref={ref}
    >
      <span onClick={handleCollapsed}>
        {data.find((m) => m.cid === props.value)?.labelstring}
      </span>
      <Arrow />
      <div className={"center-overlay-wrapper"}>
        {data.map((m, i) => {
          return (
            <div
              key={i}
              className={classNames({
                ["center-selected"]: m.cid === props.value,
              })}
              onClick={() => handleCenterClick(m)}
            >
              {m.labelstring}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CenterSelect;
