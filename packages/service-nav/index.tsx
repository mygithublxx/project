import React from "react";
import {
  Dropdown as dropDownConponent,
  Menu,
  DropDownProps,
} from "@gw/web-basic-components";
import classNames from "classnames";
import type { IProps } from "./dto";
import styles from "./index.module.less";

import dropDownIcon from "./assets/icon-Select-drop-down.png";

const serviceList = [
  { name: "物管理中心", url: "/" },
  { name: "告警管理中心", url: "/alarm" },
  { name: "数据中心", url: "/data" },
];

const Dropdown: React.FC<DropDownProps> = dropDownConponent;

const ServiceNav = (props: IProps) => {
  const menu = (
    <Menu>
      {serviceList.map((service, index) => {
        return (
          <Menu.Item key={index}>
            <a href={service.url}>{service.name}</a>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <div className={styles.serviceNavWrapper}>
      <div className={styles.logoArea}>
        <div
          className={classNames({
            [styles.logo]: true,
            [styles.onlyLogo]: props.collapsed,
          })}
        />
      </div>
      <Dropdown overlay={menu} overlayClassName={styles.overlayWrapper}>
        <div className={styles.serviceNavBar} id="dpTrigger">
          <span>{props.name ?? "运维中心"}</span>
          <span>
            <img src={dropDownIcon} />
          </span>
        </div>
      </Dropdown>
    </div>
  );
};

export default ServiceNav;
