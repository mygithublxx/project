import React from "react";
import { Tag, Tooltip } from "@gw/web-basic-components";
import RelateImg from "../../../assets/sub-diagram/toberelate.svg";
import styles from "./index.module.less";
import { SubListItem } from "../dto";

interface IProps {
  data: SubListItem;
  onRelate: (wiringId: number, name: string) => void;
  hasRelated?: boolean;
}

const Card = (props: IProps) => {
  const { data, onRelate = () => {}, hasRelated } = props;

  const { backgroundColor = "#fff", wiringId } = data;

  return (
    <div className={styles["sub-relate-card"]}>
      <div className={styles.content}>
        <div className={styles["img-container"]} style={{ backgroundColor }}>
          {data?.fileData && (
            <img src={data?.fileData} className={styles.img} />
          )}
        </div>
        {!hasRelated && (
          <div
            className={styles.mask}
            onClick={() => {
              onRelate(wiringId, data?.name || "未命名分图");
            }}
          >
            <img src={RelateImg} />
            <span>关联</span>
          </div>
        )}
      </div>
      <div className={styles["sub-footer"]}>
        <Tooltip title={data?.name || "未命名分图"} placement="bottom">
          <span style={{ whiteSpace: "pre" }}>
            {data?.name || "未命名分图"}
          </span>
        </Tooltip>
        <Tag color={hasRelated ? "rgb(36, 179, 81)" : "rgb(89,89,98)"}>
          {hasRelated ? "已关联" : "未关联"}
        </Tag>
      </div>
    </div>
  );
};

export default Card;
