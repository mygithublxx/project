import { Collapse, Space } from "@gw/web-basic-components";
import React from "react";
import styles from "./index.module.less";
import EditIcon from "../../../../assets/operation-area/edit-icon.png";
import DeleteIcon from "../../../../assets/operation-area/delete-icon.png";
import DeleteImg from "../../../../assets/operation-area/delete-img.png";
import confirm from "../../../../components/business/confirm";
import { getConditionName } from "../../../../const/conditions";
import moment from "moment";
import { IrregularItemContainer } from "../../../irregular-item-container";
import { wiringItemList } from "../../../../const";
import { getSVG } from "../../../../utils/irregular-items";

const EventPlayground = ({
  events,
  openEventModal,
  onDeleteEvent,
  curNode,
}: {
  events;
  openEventModal;
  onDeleteEvent;
  curNode;
}) => {
  const genExtra = (index: number) => {
    return (
      <Space>
        <img
          src={EditIcon}
          style={{ width: "1rem", height: "1rem" }}
          onClick={(e) => {
            e.stopPropagation();
            openEventModal("edit", index);
          }}
        />
        <img
          src={DeleteIcon}
          style={{ width: "1rem", height: "1rem" }}
          onClick={(e) => {
            e.stopPropagation();
            confirm({
              icon: (
                <img
                  src={DeleteImg}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              ),
              content: "是否确认删除？",
              okButtonProps: { danger: true },
              okText: "确定",
              cancelText: "取消",
              onOk() {
                setTimeout(() => {
                  onDeleteEvent(index);
                }, 1000);
              },
            });
          }}
        />
      </Space>
    );
  };

  const renderIrregularItems = (event) => {
    const svg = getSVG(
      curNode?.data?.key?.split("-")?.[0],
      event?.result?.irregularStatus
    );
    const type = curNode?.data?.key;
    const expandedWiringItemList = wiringItemList.reduce((acc, item) => {
      if (item.children) {
        return acc.concat(item.children);
      }
      return acc.concat(item);
    }, []);

    const defaultIcon = expandedWiringItemList.find(
      (item) => item.key === type
    )?.icon;

    if (curNode?.isEdge()) return null;
    return (
      <div className={styles["condition-content"]} style={{ paddingBottom: 0 }}>
        <div className={styles["condition-list"]}>
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>图元状态</span>
            <span className={styles["condition-item-desc"]}>
              <IrregularItemContainer svg={svg || defaultIcon} />
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderResults = (event) => {
    return (
      <div className={styles["condition-content"]}>
        <div className={styles["condition-list"]}>
          {event?.result?.textColor && (
            <div className={styles["condition-item"]}>
              <span className={styles["condition-item-label"]}>文字颜色</span>
              <span className={styles["condition-item-desc"]}>
                <span>{event?.result?.textColor}</span>
                <div
                  className={styles["condition-item-desc-color"]}
                  style={{
                    background: event?.result?.textColor
                      ? event?.result?.textColor
                      : "none",
                  }}
                />
              </span>
            </div>
          )}
          {event?.result?.strokeColor && (
            <div className={styles["condition-item"]}>
              <span className={styles["condition-item-label"]}>边框颜色</span>
              <span className={styles["condition-item-desc"]}>
                <span>{event?.result?.strokeColor}</span>
                <div
                  className={styles["condition-item-desc-color"]}
                  style={{
                    background: event?.result?.strokeColor
                      ? event?.result?.strokeColor
                      : "none",
                  }}
                />
              </span>
            </div>
          )}
          {event?.result?.fillColor && (
            <div className={styles["condition-item"]}>
              <span className={styles["condition-item-label"]}>填充颜色</span>
              <span className={styles["condition-item-desc"]}>
                <span>{event?.result?.fillColor}</span>
                <div
                  className={styles["condition-item-desc-color"]}
                  style={{
                    background: event?.result?.fillColor
                      ? event?.result?.fillColor
                      : "none",
                  }}
                />
              </span>
            </div>
          )}
          {event?.result?.isEmpty !== undefined && (
            <div className={styles["condition-item"]}>
              <span className={styles["condition-item-label"]}>车位样式</span>
              <span className={styles["condition-item-desc"]}>
                {event?.result?.isEmpty === 1 ? "有车" : "无车"}
              </span>
            </div>
          )}
          {event?.result?.connectColor !== undefined && (
            <div className={styles["condition-item"]}>
              <span className={styles["condition-item-label"]}>连线颜色</span>
              <span className={styles["condition-item-desc"]}>
                <span>{event?.result?.connectColor}</span>
                <div
                  className={styles["condition-item-desc-color"]}
                  style={{
                    background: event?.result?.connectColor
                      ? event?.result?.connectColor
                      : "none",
                  }}
                />
              </span>
            </div>
          )}
          {event?.result?.enableFlow !== undefined && (
            <div className={styles["condition-item"]}>
              <span className={styles["condition-item-label"]}>潮流</span>
              <span className={styles["condition-item-desc"]}>
                {event?.result?.enableFlow ? "开启" : "关闭"}
              </span>
            </div>
          )}
          {event?.result?.isReversed !== undefined && (
            <div className={styles["condition-item"]}>
              <span className={styles["condition-item-label"]}>反向</span>
              <span className={styles["condition-item-desc"]}>
                {event?.result?.isReversed ? "开启" : "关闭"}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCondition = (condition) => {
    const type = condition?.conditionType;
    if (type === "rationalOperation") {
      return (
        <div className={styles["condition-list"]}>
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>条件类型</span>
            <span className={styles["condition-item-desc"]}>关系运算</span>
          </div>
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>物</span>
            <span className={styles["condition-item-desc"]}>
              {condition.thingName}
            </span>
          </div>
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>
              物对应信息词条
            </span>
            <span className={styles["condition-item-desc"]}>
              {condition.infoEntryName}
            </span>
          </div>
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>判断逻辑</span>
            <span className={styles["condition-item-desc"]}>
              {getConditionName(condition.judgeLogic)}
            </span>
          </div>
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>属性值</span>
            <span className={styles["condition-item-desc"]}>
              {condition.attributeValue}
            </span>
          </div>
        </div>
      );
    }
    if (type === "timeRange") {
      return (
        <div className={styles["condition-list"]}>
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>条件类型</span>
            <span className={styles["condition-item-desc"]}>时间范围</span>
          </div>
          {/* <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>时区</span>
            <span className={styles["condition-item-desc"]}>
              {getTimeZoneName(condition.timezone)}
            </span>
          </div> */}
          <div className={styles["condition-item"]}>
            <span className={styles["condition-item-label"]}>时间范围</span>
            <span className={styles["condition-item-desc"]}>
              {condition.timeRange?.length > 1 &&
                moment(condition.timeRange[0]).format("HH:mm") +
                  "~" +
                  moment(condition.timeRange[1]).format("HH:mm")}
            </span>
          </div>
        </div>
      );
    }
    return <></>;
  };

  return (
    <div className={styles.container}>
      <Collapse bordered={false} defaultActiveKey={[0]}>
        {events?.map((event, index) => {
          return (
            <Collapse.Panel
              key={events?.indexOf(event)}
              header={"事件" + (index + 1)}
              extra={genExtra(index)}
            >
              {event?.conditionList &&
                event?.conditionList.map((condition, i) => {
                  return (
                    <div
                      className={styles["condition-item-wrapper"]}
                      key={condition}
                    >
                      <div className={styles["condition-title"]}>
                        <div />
                        <span> {"条件" + (i + 1)}</span>
                        {condition?.conjunction !== undefined && i !== 0 ? (
                          <div className={styles.conjunction}>
                            <span>
                              {condition?.conjunction === 0 ? "或" : "且"}
                            </span>
                          </div>
                        ) : null}
                      </div>
                      <div className={styles["condition-content"]}>
                        {renderCondition(condition)}
                      </div>
                    </div>
                  );
                })}
              <div className={styles["condition-item-wrapper"]}>
                <div className={styles["condition-title"]}>
                  <div />
                  <span> {"结果"}</span>
                </div>
                {renderIrregularItems(event)}
                {renderResults(event)}
              </div>
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default EventPlayground;
