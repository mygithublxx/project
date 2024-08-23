import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.less";
import DeviceConfig from "./device-config";
import GraphConfig from "./graph-config";
import { Tabs } from "@gw/web-basic-components";
// import { a, useSpring } from "react-spring";
import { ITabsKeys } from "./dto";
import { Graph, Cell } from "@antv/x6";
import { IGraphOptions } from "../../dto";
import EventModal from "./components/event-modal";
import TextConfig from "./text-config";
import libraryCollapseIcon from "../../assets/operation-area/library-collapse.png";
// import { updateSavingState } from "@/models/actions/wiring";
// import { useDispatch } from "react-redux";
import { refreshItems } from "./utils";
import _ from "lodash";

const EditArea = (props: {
  graphRef: React.RefObject<Graph>;
  nodeType: "device" | "edge" | "graph" | "text-block";
  isSettingState: boolean;
  curNode: Cell;
  deviceSn;
  graphOptions: IGraphOptions;
  setGraphOptions: React.Dispatch<React.SetStateAction<IGraphOptions>>;
  isEditing: boolean;
}) => {
  const {
    graphRef,
    nodeType,
    isSettingState,
    curNode,
    deviceSn,
    graphOptions,
    setGraphOptions,
    isEditing,
  } = props;
  const graph = graphRef.current;

  // const dispatch = useDispatch();
  // 当前选择是外观还是事件
  const [activeKey, setActiveKey] = useState<ITabsKeys>("appearance");

  // 事件窗口显示、隐藏
  const [eventModalVis, setEventModalVis] = useState<boolean>(false);
  // 事件添加or编辑
  const [eventOperation, setEventOperation] = useState<"add" | "edit">("add");
  // 当前需要编辑第几个event
  const [currentEvent, setCurrentEvent] = useState<number>();
  // 是否折叠
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const [events, setEvents] = useState([]);

  // 打开事件编辑窗口
  const openEventModal = (type: "add" | "edit", index) => {
    setEventModalVis(true);
    setEventOperation(type || "add");
    if (type === "edit") {
      setCurrentEvent(index);
    }
  };

  //编辑抽屉进出效果
  // const editLibraryStyles = useSpring({
  //   x: isSettingState && isCollapse ? "0" : "20rem",
  // });

  // 保存新建立的事件
  const onSaveEvent = (formVal) => {
    if (curNode && eventOperation === "add") {
      let nodeEvents = [...(events || [])];
      if (nodeEvents?.length) {
        nodeEvents.push(formVal);
      } else {
        nodeEvents = [formVal];
      }
      // curNode.setData({ extData: { events: nodeEvents } }, { deep: true });
      setEvents(nodeEvents);
    }
    if (eventOperation === "edit" && currentEvent !== undefined) {
      const nodeEvents = [...(events || [])];
      if (formVal && nodeEvents?.length > currentEvent) {
        nodeEvents[currentEvent] = { ...formVal };
      }
      // curNode.setData(nodeDetail);
      setEvents(nodeEvents);
    }
    setEventModalVis(false);
    // dispatch(updateSavingState(true));
    setEventOperation("add");
    setCurrentEvent(undefined);
  };

  // 在组件内部
  const prevEventsRef = useRef([]);

  useEffect(() => {
    if (curNode && !_.isEqual(prevEventsRef.current, events)) {
      const newEvents = [...(events || [])];
      const oldData = curNode.getData();
      const oldExtData = oldData?.extData || {};
      curNode.setData(
        { ...oldData, extData: { ...oldExtData, events: newEvents } },
        { deep: true, overwrite: true }
      );
    }
    prevEventsRef.current = events;
  }, [events, curNode]);

  const title = () => {
    if (nodeType === "device") {
      return "元件";
    } else if (nodeType === "edge") {
      return "连线";
    } else if (nodeType === "text-block") {
      return "文本框";
    } else {
      return "图表";
    }
  };

  const renderBanner = () => {
    return (
      <div
        className={styles.banner}
        style={{
          borderBottom:
            nodeType === "device" || nodeType === "edge"
              ? "0.06rem solid rgba(25, 28, 38, 10%)"
              : "none",
          paddingBottom:
            nodeType === "device" || nodeType === "edge" ? "0.63rem" : "0",
        }}
      >
        <span className={styles.title}>{title()}</span>
        {nodeType !== "graph" && nodeType !== "text-block" ? (
          <div className={styles.tabs} key={curNode?.id}>
            <Tabs
              items={[
                { label: "外观", key: "appearance" },
                { label: "事件", key: "event" },
              ]}
              onTabClick={(item: ITabsKeys) => setActiveKey(item)}
            />
          </div>
        ) : null}
      </div>
    );
  };

  const renderArea = () => {
    if (nodeType === "device" || nodeType === "edge") {
      return (
        <DeviceConfig
          graphRef={graphRef}
          activeKey={activeKey}
          curNode={curNode}
          deviceSn={deviceSn}
          openEventModal={openEventModal}
          events={events}
          setEvents={setEvents}
        />
      );
    } else if (nodeType === "text-block") {
      return <TextConfig curNode={curNode} />;
    } else {
      return (
        <GraphConfig
          graphOptions={graphOptions}
          setGraphOptions={setGraphOptions}
        />
      );
    }
  };

  useEffect(() => {
    setActiveKey("appearance");
    if (curNode) {
      const nodeEvents = curNode.getData()?.extData?.events;
      setEvents(nodeEvents);
      const nodeAppearance = curNode.getData()?.extData?.appearance;

      if (nodeAppearance) {
        refreshItems(graph, curNode, nodeAppearance);
      }
    }
  }, [curNode]);

  useEffect(() => {
    if (isSettingState) {
      setIsCollapse(true);
    }
  }, [isSettingState]);

  const containerWidth = useMemo(() => {
    if (isSettingState) {
      return isCollapse ? "20rem" : 0;
    } else {
      return 0;
    }
  }, [isSettingState, isCollapse]);

  return (
    <>
      <div
        className={styles["edit-area-container"]}
        style={{
          // ...editLibraryStyles,
          width: containerWidth,
          minWidth: containerWidth,
        }}
      >
        <div
          className={styles.mask}
          style={{
            display: curNode?.shape === "rect" ? "block" : "none",
          }}
        />
        <div
          className={styles.collapseIconRight}
          onClick={() => setIsCollapse(!isCollapse)}
          style={{
            display: isEditing ? "none" : "flex",
          }}
        >
          <img
            src={libraryCollapseIcon}
            style={{
              transform: `rotate(${isCollapse ? "180deg" : "0deg"})`,
            }}
          />
        </div>
        {renderBanner()}
        <div className={styles.content}>{renderArea()}</div>
      </div>

      <EventModal
        modalVis={eventModalVis}
        events={events}
        eventOperation={eventOperation}
        curNode={curNode}
        currentEvent={currentEvent}
        deviceSn={deviceSn}
        closeModal={() => setEventModalVis(false)}
        onSaveEvent={(formVal) => onSaveEvent(formVal)}
      />
    </>
  );
};

export default EditArea;
