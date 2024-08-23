import React, { useState } from "react";
import EditImg from "../../assets/sub-diagram/edit.svg";
import { Input, Tooltip } from "@gw/web-basic-components";
import styles from "./index.module.less";

interface IProps {
  name: string;
  setName: (v: string) => void;
}

const NameEditor = (props: IProps) => {
  const { name, setName } = props;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onConfirm = () => {
    setIsEditing(false);
    if (name.trim() === "") {
      setName(name);
    }
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className={styles["name-display"]}>
      <Tooltip title="编辑分图名称" placement="bottom">
        <img src={EditImg} onClick={toggleEdit} />
      </Tooltip>
      {isEditing ? (
        <Input
          value={name}
          onChange={(e) => setName(e.target.value?.trim())}
          onBlur={onConfirm}
          maxLength={20}
          size="small"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onConfirm();
            }
          }}
        />
      ) : (
        <span onClick={() => setIsEditing(true)} style={{ whiteSpace: "pre" }}>
          {name}
        </span>
      )}
    </div>
  );
};

export default NameEditor;
