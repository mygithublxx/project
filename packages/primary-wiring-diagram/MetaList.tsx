import React, { useMemo } from "react";
import { ICON_LIST as LIST } from "./icons";
import styles from "./index.module.less";
import Icon from "./icons/Icon";
import classNames from "classnames";

interface MetaListProps {
  style?: React.CSSProperties;
  className?: string;
}

const MetaList = (props: MetaListProps) => {
  return (
    <div
      className={classNames(props.className, styles.metaListWrapper)}
      style={props.style}
    >
      <div className={styles.metaListTitle}>元件</div>
      <div className={styles.metaList}>
        {useMemo(() => {
          return LIST.sort((a, b) => a.id - b.id).map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <Icon id={item.id.toString()} type={"static"} draggable />
                <span className={styles.iconName}>{item.metaName}</span>
              </div>
            );
          });
        }, [])}
      </div>
    </div>
  );
};

export default MetaList;
