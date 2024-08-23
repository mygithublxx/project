import React from "react";
import styles from "./index.module.less";
import { ITabsKeys } from "../dto";
import PlaceholderForm from "./forms/placeholder-form";
import { IDeviceInfo } from "../../../dto";
import EmptyEvent from "../components/empty-event";
import EventPlayground from "../components/event-playground";
import AddButton from "../components/add-button";
import { Graph, Cell } from "@antv/x6";
import FillColorForm from "./forms/fill-color-form";
import EdgeForm from "./forms/edge-form";
// import { updateSavingState } from "@/models/actions/wiring";
// import { useDispatch } from "react-redux";
import { drawInverterDetails, refreshItems } from "../utils";

const DeviceConfig = ({
  graphRef,
  activeKey,
  curNode,
  deviceSn,
  openEventModal,
  events,
  setEvents,
}: {
  graphRef: React.RefObject<Graph>;
  activeKey: ITabsKeys;
  curNode: Cell;
  deviceSn: IDeviceInfo[];
  openEventModal: any;
  events;
  setEvents;
}) => {
  const graph = graphRef.current;
  // const dispatch = useDispatch();

  const onDeleteEvent = (index: number) => {
    if (curNode) {
      let nodeEvents = [...(events || [])];
      if (nodeEvents) {
        nodeEvents = nodeEvents?.filter((_, i) => i !== index);
      }
      // curNode.setData({ extData: { events: nodeEvents } }, { deep: true });
      setEvents(nodeEvents);
    }
  };

  const onDetailChange = (key: string, detail) => {
    console.log("修改配置", key, detail);
    // dispatch(updateSavingState(true));
    if (key === "appearance") {
      refreshItems(graph, curNode, detail);
      curNode.setData(
        { extData: { appearance: { ...detail } } },
        { deep: true }
      );
    }
  };

  const renderContent = () => {
    if (activeKey === "appearance") {
      if (curNode?.data?.key === "placeholder") {
        return (
          <div className={styles["appearance-wrapper"]}>
            <PlaceholderForm
              curNode={curNode}
              deviceSn={deviceSn}
              onDetailChange={onDetailChange}
            />
          </div>
        );
      } else if (curNode?.isEdge()) {
        return (
          <div className={styles["appearance-wrapper"]}>
            <EdgeForm curNode={curNode} onDetailChange={onDetailChange} />
          </div>
        );
      } else {
        return (
          <div className={styles["appearance-wrapper"]}>
            <FillColorForm
              curNode={curNode}
              deviceSn={deviceSn}
              onDetailChange={onDetailChange}
              drawInverterDetails={(detail) =>
                drawInverterDetails(graph, detail, curNode)
              }
            />
          </div>
        );
      }
    }
    if (activeKey === "event") {
      return (
        <div className={styles["event-wrapper"]}>
          {events?.length ? (
            <div className={styles["event-details"]}>
              <EventPlayground
                events={events}
                curNode={curNode}
                openEventModal={openEventModal}
                onDeleteEvent={onDeleteEvent}
              />
            </div>
          ) : (
            <EmptyEvent />
          )}

          <div className={styles.footer}>
            <AddButton text="添加事件" onClick={() => openEventModal("add")} />
          </div>
        </div>
      );
    }
  };

  return <div className={styles.container}>{renderContent()}</div>;
};

export default DeviceConfig;
