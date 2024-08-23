import React from "react";
import styles from "./index.module.less";

interface EditProps {
  uuid: string;
  onEdit: (uuid: string) => void;
  children: React.ReactNode;
}

const Edit = (props: EditProps) => {
  return (
    <div
      className={styles.hoverEditor}
      onClick={() => props.onEdit(props.uuid)}
    >
      {props.children ? props.children : "编辑"}
    </div>
  );
};

export default Edit;
