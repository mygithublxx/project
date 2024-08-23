import React from "react";
import styles from "./index.module.less";
import PlusIcon from "../../../../assets/editor/plus-icon.png";

const AddButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div className={styles["add-event-btn"]} onClick={onClick}>
      <img src={PlusIcon} />
      <span>{text}</span>
    </div>
  );
};

export default AddButton;
