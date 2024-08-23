import React from "react";
import AddImg from "../../../assets/sub-diagram/add.webp";
import AddHoverImg from "../../../assets/sub-diagram/add-hover.webp";
import classnames from "classnames";
import styles from "./index.module.less";

interface IProps {
  onCreate: () => void;
}

export default function AddBtn(props: IProps) {
  const { onCreate } = props;
  return (
    <div className={styles["add-btn-container"]} onClick={onCreate}>
      <img src={AddImg} className={styles["add-img"]} alt="" />
      <img
        src={AddHoverImg}
        className={classnames(styles["add-img"], styles["add-img-hover"])}
        alt=""
      />
      <span className={styles["add-text"]}>新建分图</span>
    </div>
  );
}
