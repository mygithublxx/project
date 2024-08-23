import React from "react";
import classNames from "classnames";
import styles from "./index.module.less";

/**
 * 占位头像
 */
export default function Avatar(props: { className?: string }) {
  return (
    <div className={classNames(styles.picture, props.className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        className="bi bi-person-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    </div>
  );
}
