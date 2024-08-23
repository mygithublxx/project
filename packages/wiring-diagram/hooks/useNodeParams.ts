import { Node } from "@antv/x6";
import {
  clearEdgeAnim,
  compareRationalOperation,
  compareTimeRange,
  parkingConstructure,
  setEdgeAnim,
  setEdgeStyles,
  setNodeDisplayColor,
  setPlaceholderText,
  setSocText,
  vehicleConstructure,
} from "../utils/node-painting-utils";
import { IMqttOnMessageHandle } from "../../mqtt-redux/type";
import { HandleISD, ResetHandleISD } from "./element-handler/ISD";
import { HandleGSES, ResetHandleGSES } from "./element-handler/GSES";
import { HandleHC, ResetHandleHC } from "./element-handler/HC";

/**
 * 符合条件类型, 1是符合，0是不符合，2是异常数据
 */
export const CONFORM_TYPE = {
  /**
   * 不符合
   */
  NOTCONFORM: 0,
  /**
   * 符合条件
   */
  CONFORM: 1,
  /**
   * 数据异常
   */
  DATAERROR: 2,
};

interface ICodeList {
  belongProjectId: string;
  code: string;
  nodeId: string;
  key: string;
}

interface IMqttParams {
  subscribe: (topic: string | string[]) => Function;
  onMessage: (
    topic: string | string[],
    handle: IMqttOnMessageHandle
  ) => Function;
}

type ISetMqtt = (
  { subscribe, onMessage }: IMqttParams,
  fetchCodeList: ICodeList[],
  graph: any
) => Function;

type IHandleTimeJudge = (graph: any) => NodeJS.Timer;

type IHandleMqttMessage = (
  graph: any,
  d: any,
  fetchCodeList: ICodeList[]
) => void;

// 判断条件是否满足的函数
const checkEventCondition = (conditions, d) => {
  let conditionFlag = CONFORM_TYPE.NOTCONFORM;
  for (let index = 0; index < conditions?.length; index++) {
    let res = CONFORM_TYPE.NOTCONFORM;
    if (conditions[index].conditionType === "rationalOperation") {
      if (
        d &&
        !Object.prototype.hasOwnProperty.call(
          d,
          conditions[index]?.measureTagCode
        )
      )
        return CONFORM_TYPE.DATAERROR;
      if (
        d &&
        Object.prototype.hasOwnProperty.call(
          d,
          conditions[index]?.measureTagCode
        ) &&
        (d[conditions[index]?.measureTagCode] === null ||
          d[conditions[index]?.measureTagCode] === undefined)
      ) {
        return CONFORM_TYPE.DATAERROR;
      }
      if (d)
        res = compareRationalOperation(
          d[conditions[index].measureTagCode],
          conditions[index].judgeLogic,
          conditions[index].attributeValue
        )
          ? CONFORM_TYPE.CONFORM
          : CONFORM_TYPE.NOTCONFORM;
    } else {
      res = compareTimeRange(
        conditions[index].timezone,
        conditions[index].timeRange
      )
        ? CONFORM_TYPE.CONFORM
        : CONFORM_TYPE.NOTCONFORM;
    }

    if (index === 0) {
      conditionFlag = res;
    }
    if (index > 0) {
      if (conditions[index]?.conjunction === 0) {
        conditionFlag = conditionFlag || res;
      }
      if (conditions[index]?.conjunction === 1) {
        conditionFlag = conditionFlag && res;
      }
    }
  }
  return conditionFlag;
};

const handleEvents = (
  graph: any,
  event,
  eventList,
  appearance,
  nodeId: string,
  d?: any
) => {
  const result = event?.result;
  const conditions = event.conditionList;
  // 最终的条件是否满足
  const conditionFlag = checkEventCondition(conditions, d);

  // 是否所有事件都没被满足
  const allEventFlag = eventList?.every((e) => {
    const cds = e?.conditionList;
    return !checkEventCondition(cds, d);
  });

  const targetNode = graph.getCellById(nodeId);
  const isISD = targetNode?.data?.key?.includes("ISD");
  const isGSES = targetNode?.data?.key?.includes("GSES");
  const isHC = targetNode?.data?.key?.includes("HC");

  if (conditionFlag === CONFORM_TYPE.CONFORM) {
    // 连线的处理
    if (targetNode?.isEdge()) {
      setEdgeStyles(targetNode, result?.connectColor);
      if (result?.enableFlow) {
        setEdgeAnim(targetNode, result?.isReversed);
      } else {
        clearEdgeAnim(targetNode);
      }
    }
    // 车位的结果处理
    if (targetNode?.data?.key === "parking") {
      if (result?.isEmpty === 0) {
        targetNode.setAttrs({ ...parkingConstructure().attrs });
        targetNode.setMarkup([...parkingConstructure().markup]);
        (targetNode as Node).setSize({ width: 40, height: 40 });
        targetNode.setData({ isEmpty: 0 });
        setSocText(targetNode, "p");
      }
      if (result?.isEmpty === 1) {
        targetNode.setAttrs({ ...vehicleConstructure().attrs });
        targetNode.setMarkup([...vehicleConstructure().markup]);
        (targetNode as Node).setSize({ width: 40, height: 40 });
        targetNode.setData({ isEmpty: 1 });
        setSocText(targetNode, undefined);
      }
    }
    if (targetNode?.data?.key === "placeholder") {
      setPlaceholderText(
        graph,
        targetNode?.id,
        undefined,
        result?.textColor,
        appearance?.fontSize
      );
    } else {
      setNodeDisplayColor(
        targetNode,
        result?.textColor || result?.strokeColor,
        result?.fillColor
      );
    }
    if (isISD) {
      HandleISD(targetNode, result);
    }
    if (isGSES) {
      HandleGSES(targetNode, result);
    }
    if (isHC) {
      HandleHC(targetNode, result);
    }
  }

  if (allEventFlag) {
    const appearanceData = targetNode?.getData()?.extData?.appearance;
    const connectColor = appearanceData?.connectColor || "#525f7cff";
    if (targetNode?.isEdge()) {
      setEdgeStyles(targetNode, connectColor);
      clearEdgeAnim(targetNode);
    }
    if (targetNode?.data?.key === "placeholder") {
      const tempTextColor = appearanceData?.textColor || "#191c26ff";
      setPlaceholderText(graph, targetNode?.id, undefined, tempTextColor, 14);
    }
    if (isISD) {
      ResetHandleISD(targetNode);
    }
    if (isGSES) {
      ResetHandleGSES(targetNode);
    }
    if (isHC) {
      ResetHandleHC(targetNode);
    }
    const textColor = appearanceData?.textColor;
    const strokeColor = appearanceData?.strokeColor || "#525f7cff";
    let fillColor = appearanceData?.fillColor || "#22ef6266";
    if (appearanceData?.fillColor === undefined) {
      fillColor = undefined;
    }
    setNodeDisplayColor(targetNode, textColor || strokeColor, fillColor);
  }
};

// 保留两位小数的四舍五入
const roundOff = (number: number | undefined, radix: number = 2) => {
  if (isNaN(number)) return number;
  const exp = 10 ** (radix + 1);
  let tmp = Math.floor(number * exp) / exp;

  // 正负值
  let sign = true;
  if (number < 0) sign = false;
  tmp = Math.abs(tmp);

  const cmp = 10 ** (radix + 1);
  tmp = (tmp * cmp) / 10;

  tmp = Math.round(tmp);
  for (let i = 0; i < radix; i++) {
    tmp /= 10;
  }
  tmp = Number(tmp.toFixed(2));
  return sign ? tmp.toFixed(2) : "-" + tmp.toFixed(2);
};
const unitConvert = (
  measureTagCode: string,
  value: number,
  unitCode: string
) => {
  if (typeof value !== "number") return ["--", ""];
  if (measureTagCode === "p") {
    let tmp = roundOff(value / 1000) as number;
    let unit = "kW";
    if (Math.abs(tmp) >= 1000) {
      tmp = roundOff(tmp / 1000) as number;
      unit = "MW";
    }
    return [tmp, unit];
  }
  if (measureTagCode === "q") {
    let tmp = roundOff(value / 1000) as number;
    let unit = "kVar";
    if (Math.abs(tmp) >= 1000) {
      tmp = roundOff(tmp / 1000) as number;
      unit = "MVar";
    }
    return [tmp, unit];
  }
  // if (measureTagCode === "e") {
  //   let tmp = roundOff(value) as number;
  //   let unit = "kWh";
  //   if (Math.abs(tmp) >= 10000) {
  //     tmp = roundOff(tmp / 1000) as number;
  //     unit = "万kWh";
  //   }
  //   return [tmp, unit];
  // }
  return [value, unitCode];
};

export const useNodeParams = (): [
  ISetMqtt,
  IHandleTimeJudge,
  IHandleMqttMessage
] => {
  const handleMqttMessage: IHandleMqttMessage = (graph, d, fetchCodeList) => {
    const getNodeid = (code: string) => {
      const target = fetchCodeList.find(
        (c) => c.code === code && (c.key === "" || !c?.key)
      );
      return target;
    };
    const cells = graph?.getCells();
    const target = [];
    cells?.map((cell) => {
      const nodeDetail = cell.getData();
      for (let j = 0; j < nodeDetail?.extData?.events?.length; j++) {
        const tmp = nodeDetail?.extData?.events[j]?.conditionList;
        for (let k = 0; k < tmp?.length; k++) {
          if (getNodeid(tmp[k]?.thingId)?.nodeId === d?.nodeId) {
            target.push({ ...nodeDetail, nodeId: cell?.id });
          }
        }
      }
    });
    target.forEach((t) => {
      const events = t?.extData?.events;
      // 拿出所有绑定当前mqtt消息对应物的event
      const eventTodo = events?.filter((e) => {
        const tmp = e.conditionList.find(
          (i) => i.conditionType === "rationalOperation"
        );
        if (tmp?.thingId) {
          return getNodeid(tmp.thingId)?.nodeId === d?.nodeId;
        }
        return false;
      });
      // 按顺序处理这些事件
      if (eventTodo?.length) {
        eventTodo.forEach((e) => {
          handleEvents(
            graph,
            e,
            eventTodo,
            t?.extData?.appearance,
            t.nodeId,
            d
          );
        });
      }
    });
    cells?.map((cell) => {
      const nodeDetail = cell.getData();
      if (
        getNodeid(nodeDetail?.extData?.appearance?.itemId)?.nodeId === d?.nodeId
      ) {
        target.push({ ...nodeDetail, nodeId: cell?.id });
        const n = graph.getCellById(cell?.id);
        // 设置占位符的文本
        if (n?.data?.key === "placeholder") {
          const measureTagCode =
            nodeDetail?.extData?.appearance?.measureTagCode;
          if (measureTagCode && d[measureTagCode] !== undefined) {
            const [value, unit] = unitConvert(
              measureTagCode,
              d[measureTagCode],
              nodeDetail?.extData?.appearance?.unitCode || ""
            );
            setPlaceholderText(
              graph,
              cell?.id,
              (nodeDetail?.extData?.appearance?.displayName || "") +
                value +
                " " +
                unit,
              undefined,
              nodeDetail?.extData?.appearance?.textSize
            );
          }
        }
        // 电池簇、车位监听soc并修改文本值
        if (n?.data?.key === "battery" || n?.data?.key === "parking") {
          if (d["soc"] !== undefined) setSocText(n, d["soc"]);
        }
      }
    });
  };
  const setMqtt: ISetMqtt = (
    { subscribe, onMessage },
    fetchCodeList,
    graph
    // callback
  ) => {
    const topics = [];
    fetchCodeList.forEach((item) => {
      if (item.nodeId) {
        topics.push("/meter/" + item.belongProjectId + "/" + item.nodeId);
      }
    });
    const unsubscribeTopics = subscribe(topics);

    onMessage(topics, (buffer) => {
      const d = JSON.parse(buffer.toString());
      handleMqttMessage(graph, d, fetchCodeList);
    });
    return unsubscribeTopics;
  };
  const handleTimeJudge: IHandleTimeJudge = (graph) => {
    let timer: NodeJS.Timer;
    // 获取所有的纯时间判断事件，用于每分钟判断结果
    const eventsOnlyTime = [];
    if (graph) {
      const cells = graph.getCells();
      cells?.forEach((cell) => {
        let isOnlyTime = false;
        const nodeExtData = cell.getData()?.extData;
        if (nodeExtData?.events?.length) {
          nodeExtData?.events.forEach((event) => {
            isOnlyTime = false;
            // 如果存在或时间，或者全为时间满足纯时间事件
            for (let i = 0; i < event?.conditionList?.length; i++) {
              if (
                event.conditionList[i].conditionType === "timeRange" &&
                event.conditionList[i]?.conjunction === 0
              ) {
                isOnlyTime = true;
              }
            }
            if (nodeExtData.events?.length) {
              const len = nodeExtData.events.filter((e) => {
                return (
                  e?.conditionList?.filter(
                    (c) => c.conditionType !== "timeRange"
                  )?.length === 0
                );
              })?.length;
              if (len > 0) {
                isOnlyTime = true;
              }
              if (isOnlyTime) {
                eventsOnlyTime.push({
                  nodeId: cell?.id,
                  event,
                  appearance: nodeExtData?.appearance,
                });
              }
            }
          });
        }
      });
    }
    // eslint-disable-next-line prefer-const
    timer = setInterval(() => {
      eventsOnlyTime?.forEach((e) => {
        console.log("每分钟判断事件结果*******");
        return handleEvents(
          graph,
          e.event,
          eventsOnlyTime.map((v) => v.event),
          e.appearance,
          e.nodeId
        );
      });
    }, 60000);
    eventsOnlyTime?.forEach((e) => {
      return handleEvents(
        graph,
        e.event,
        eventsOnlyTime.map((v) => v.event),
        e.appearance,
        e.nodeId
      );
    });
    return timer;
  };

  return [setMqtt, handleTimeJudge, handleMqttMessage];
};
