import React from "react";
import {
  Dropdown,
  Menu,
  Tag,
  Tooltip,
  message,
} from "@gw/web-basic-components";
import CopyImg from "../../../assets/sub-diagram/copy.webp";
import DeleteImg from "../../../assets/sub-diagram/delete.webp";
import EyeImg from "../../../assets/sub-diagram/eye.svg";
import { SubListItem } from "../dto";
import useRequest from "../../../utils/use-request-temp";
import apis from "../../../api";
import styles from "./index.module.less";

interface IProps {
  data: SubListItem;
  subGraphData: any;
  refresh?: () => void;
  toggleLoading: () => void;
  setSubGraphData: (data: any) => void;
  toggleVisible?: () => void;
  deletePermission: boolean;
}

const Card = (props: IProps) => {
  const {
    data,
    refresh,
    toggleLoading,
    subGraphData,
    setSubGraphData,
    toggleVisible,
    deletePermission,
  } = props;

  const { backgroundColor = "#fff", wiringId, hasRelated } = data;

  const originWiringId = subGraphData?.wiringId;
  const isReading = originWiringId === wiringId;

  // 复制分图
  const [, copySub] = useRequest(apis.wiring.copySub, {
    parallel: false,
  });

  // 删除分图
  const [, deleteSub] = useRequest(apis.wiring.deleteSub, {
    parallel: false,
  });

  // 查看分图
  const [, getSub] = useRequest(apis.wiring.getSub, {
    parallel: false,
  });

  const onCopy = () => {
    toggleLoading();
    copySub({
      wiringId: wiringId,
    })
      .then(() => {
        message.success("复制成功");
        refresh();
      })
      .finally(toggleLoading);
  };

  const onDelete = () => {
    if (isReading) {
      message.error("正在查看，无法删除");
      return;
    }
    toggleLoading();
    deleteSub({
      wiringId: wiringId,
    })
      .then(() => {
        message.success("删除成功");
        refresh();
      })
      .finally(toggleLoading);
  };

  const onGet = () => {
    getSub({
      wiringId,
    }).then((res) => {
      toggleVisible();
      setSubGraphData(res);
    });
  };

  return (
    <div className={styles["sub-card"]}>
      <div className={styles.content}>
        <div className={styles["img-container"]} style={{ backgroundColor }}>
          {data?.fileData && (
            <img src={data?.fileData} className={styles.img} />
          )}
        </div>
        <div className={styles.mask} onClick={onGet}>
          <img src={EyeImg} />
          <span>{isReading ? "正在查看" : "查看"}</span>
          <div className={styles.btns}>
            <Tooltip
              title="复制"
              placement="bottom"
              getPopupContainer={(e) => document.body}
            >
              <div
                className={styles.btn}
                onClick={(e) => {
                  e.stopPropagation();
                  onCopy();
                }}
              >
                <img src={CopyImg} />
              </div>
            </Tooltip>
            {deletePermission && (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item
                      key="1"
                      onClick={(e) => {
                        e.domEvent.stopPropagation();
                        onDelete();
                      }}
                    >
                      删除分图
                    </Menu.Item>
                  </Menu>
                }
                getPopupContainer={(triggerNode: any) => {
                  return triggerNode?.parentNode?.parentNode;
                }}
                className={styles.dropdown}
                trigger={["click"]}
              >
                <div
                  className={styles.btn}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <img className={styles.delete} src={DeleteImg} />
                  {/* <img
              className={classnames(styles.delete, styles["delete-hover"])}
              src={DeleteImg}
            /> */}
                </div>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
      <div className={styles["sub-footer"]}>
        <Tooltip
          title={data?.name || "未命名分图"}
          placement="bottom"
          getPopupContainer={(e) => document.body}
        >
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
