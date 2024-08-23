import React, { useEffect, useMemo, useRef, useState } from "react";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Menu, MenuProps } from "@gw/web-basic-components";
import type { RenderIconInfo } from "antd/node_modules/rc-menu/lib/interface";
import type { MenuBoxProps } from "./dto";

import { ReactComponent as StarExpandIcon } from "../../assets/menu-icon/seeds-pro/icon_arrow_right.svg";
import { ReactComponent as ArrowSvg } from "../../assets/menu-icon/seeds-pro/arrow.svg";

/** 内部菜单项展开图标 */
const InnerMenuItemExpandIcon = (props: RenderIconInfo & { app: string }) => {
  const { app, isOpen } = props;
  //todo 业务render后，移除此hardCode
  const expandIcon = {
    default: {
      icon: <ArrowSvg />,
      rotate: (bool: boolean) => (bool ? undefined : "rotateX(180deg)"),
    },
    "We-Star": {
      icon: <StarExpandIcon />,
      rotate: (bool: boolean) => (bool ? "rotate(90deg)" : undefined),
    },
    "We-Seeds-Pro": {
      icon: <StarExpandIcon />,
      rotate: (bool: boolean) => (bool ? "rotate(90deg)" : undefined),
    },
  };

  const appExpandIcon = expandIcon?.[app] || expandIcon.default;

  return (
    <div
      className="wbc-menu-editable-title-arrow"
      style={{
        transform: appExpandIcon.rotate(isOpen),
      }}
    >
      {appExpandIcon.icon}
    </div>
  );
};
/**
 * 业务菜单
 */
const MenuBox = (props: MenuBoxProps) => {
  // 防止更新菜单时再次添加titles导致子菜单title渲染多次
  const titleFlag = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { pathname } = useLocation();

  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const [openKeys, setOpenKeys] = useState<string[]>();

  const { data, authList, app, defaultOpenKeys, expandIcon } = props;

  const onClick: MenuProps["onClick"] = (e) => {
    const targetUrl = authList.find(
      (m) => e.key === m.componentId
    )?.componentUrl;
    if (targetUrl) history.push(targetUrl);
  };

  const titles = useMemo<{ title: string; id: string }[]>(() => {
    if (!data.length) return [];
    return data
      .filter((m) => m.children?.length)
      .map((m) => ({ title: m.labelstring, id: m.id }));
  }, [data]);

  /**
   * 为submenu popup 加上标题
   */
  function insertCustomElementToSubMenu(
    titlesList: { title: string; id: string }[]
  ) {
    if (titleFlag.current) return;
    if (!titlesList?.length) return;
    const subMenuPopups = document.querySelectorAll(
      `.wbuc-menu-box[data-app-theme=${props.app}] .ant-menu-submenu-popup`
    );
    if (!subMenuPopups.length) return;
    subMenuPopups.forEach((subMenuPopup, i) => {
      const customElement = document.createElement("div");
      customElement.className = "wbuc-menu-submenu-title";
      customElement.setAttribute("data-role", "popup-title");
      customElement.textContent = titlesList[i]?.["title"];
      if (!subMenuPopup.querySelector(`[data-role="popup-title"]`)) {
        subMenuPopup.setAttribute("data-id", titlesList[i]?.["id"]);
        subMenuPopup.insertBefore(customElement, subMenuPopup.firstChild);
      }
    });
    titleFlag.current = true;
  }

  //控制菜单展开和选中
  useEffect(() => {
    if (!authList?.length) return;
    // 找到当前页面的元素

    const currentLeaf = authList
      .filter((m) => m.componentType === 0)
      .find((m) => matchPath(pathname, m.componentUrl)?.isExact);
    // 如果当前页面没有parentId则直接设置open与selected

    if (!currentLeaf?.parentId) {
      if (!props.initAllExpand && !defaultOpenKeys?.length) {
        setOpenKeys([currentLeaf?.componentId]);
      } else if (!openKeys.includes(currentLeaf?.componentId)) {
        setOpenKeys((val) => {
          return [...val, currentLeaf?.componentId];
        });
      }
    } else {
      // 否则找到其parentId对应的组件
      const parent = authList.find((m) => m.id === currentLeaf?.parentId);
      if (!props.initAllExpand && !defaultOpenKeys?.length) {
        setOpenKeys([parent?.componentId]);
      } else if (!openKeys.includes(parent?.componentId)) {
        setOpenKeys((val) => {
          return [...val, parent?.componentId];
        });
      }
    }

    setSelectedKeys([currentLeaf?.componentId]);
  }, [authList, data, pathname, defaultOpenKeys]);

  useEffect(() => {
    insertCustomElementToSubMenu(titles);
  }, [titles]);

  const expandKeysAll = useMemo(() => {
    if (!data?.length) return [];
    return data.map((m) => m.key);
  }, [data]);

  //菜单构建key变更时执行
  useEffect(() => {
    if (props.initAllExpand) {
      setOpenKeys(expandKeysAll);
    }
  }, [expandKeysAll]);

  //初始化时执行
  useEffect(() => {
    setOpenKeys([...defaultOpenKeys]);
  }, []);

  return (
    <div
      data-app-theme={props.themeCode || props.app}
      data-collapsed={props.collapsed}
      ref={menuRef}
      className={classNames("wbuc-menu-box", props.className)}
    >
      <Menu
        onClick={onClick}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        items={data}
        inlineCollapsed={props.collapsed}
        forceSubMenuRender
        expandIcon={(e) =>
          expandIcon || <InnerMenuItemExpandIcon app={app} {...e} />
        }
        getPopupContainer={() => menuRef.current}
      />
    </div>
  );
};

export default MenuBox;
