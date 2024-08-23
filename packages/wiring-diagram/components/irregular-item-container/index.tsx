import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

interface IrregularItemContainerProps {
  svg: string;
  active?: boolean;
  onChange?: () => void;
}

export const IrregularItemContainer = (props: IrregularItemContainerProps) => {
  const { svg, active = false, onChange } = props;
  return (
    <div
      className={classnames(styles.container, active && styles.active)}
      onClick={onChange}
    >
      <img className={styles.img} src={svg} />
    </div>
  );
};
