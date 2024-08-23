import { message } from "@gw/web-basic-components";
import type { ICondition } from "./dto";
import moment from "moment";
import {
  // removeEdgeAnim,
  setEdgeAnim,
  setEdgeStyles,
  setNodeDisplayColor,
  setPlaceholderText,
  setSocText,
} from "./node-utils";
import { parkingConstructure, vehicleConstructure } from "../const/index";
import { Node } from "@antv/x6";
import { conditionName } from "../const/conditions";

// 讲条件转化为只有大于小于等于三组
export function transConditions(conditionList: ICondition[]) {
  const gt = [];
  const lt = [];
  const e = [];
  if (conditionList) {
    conditionList.map((condition) => {
      // 处理大于条件
      if (condition?.condition === conditionName.GREATER_THEN) {
        gt.push({
          value: condition.value,
          color: condition.color,
        });
      }
      // 处理小于条件
      if (condition?.condition === conditionName.LESS_THEN) {
        lt.push({
          value: condition.value,
          color: condition.color,
        });
      }
      // 处理等于条件
      if (condition?.condition === conditionName.EQUAL) {
        e.push({
          value: condition.value,
          color: condition.color,
        });
      }
      // 处理大于等于条件
      if (condition?.condition === conditionName.GREATER_AND_EQUAL) {
        gt.push({
          value: condition.value,
          color: condition.color,
        });
        e.push({
          value: condition.value,
          color: condition.color,
        });
      }
      // 处理小于等于条件
      if (condition?.condition === conditionName.LESS_AND_EQUAL) {
        lt.push({
          value: condition.value,
          color: condition.color,
        });
        e.push({
          value: condition.value,
          color: condition.color,
        });
      }
      // 处理不相等条件
      if (condition?.condition === conditionName.NOT_EQUAL) {
        gt.push({
          value: condition.value,
          color: condition.color,
        });
        lt.push({
          value: condition.value,
          color: condition.color,
        });
      }
      return condition;
    });
  }
  return { gt, lt, e };
}

// 校验单个条件是否全选或者全不选
export function validateCondition(conditionList: ICondition[]): boolean {
  if (conditionList) {
    for (let i = 0; i < conditionList.length; i++) {
      if (
        !conditionList[i].condition === undefined ||
        conditionList[i].value === undefined ||
        !conditionList[i].color === undefined
      ) {
        return true;
      }
      if (
        !conditionList[i].condition ||
        conditionList[i].value === undefined ||
        !conditionList[i].color
      ) {
        message.warning("选择条件设置不完整");
        return false;
      }
    }
  }
  return true;
}

// 校验所有条件是否符合要求
export function validateConditions(conditionList: ICondition[]) {
  // 不存在交集 且条件要么全选要么全不选
  const { gt, lt, e } = transConditions(conditionList);
  // 大于条件的最小值
  const min = gt.length === 0 ? Infinity : Math.min(gt[0].value, Infinity);
  // 小于条件的最大值
  const max =
    lt.length === 0 ? -Infinity : Math.max(lt[lt.length - 1]?.value, -Infinity);

  if (min < max) {
    message.warning("存在交集");
    return false;
  }

  // 重复值
  if (gt) {
    const obj = {};
    for (let i = 0; i < gt.length; i++) {
      if (obj[gt[i].value]) {
        message.warning("存在交集");
        return false;
      } else {
        obj[gt[i].value] = gt[i];
      }
    }
  }
  if (lt) {
    const obj = {};
    for (let i = 0; i < lt.length; i++) {
      if (obj[lt[i].value]) {
        message.warning("存在交集");
        return false;
      } else {
        obj[lt[i].value] = lt[i];
      }
    }
  }
  if (e) {
    const obj = {};
    for (let i = 0; i < e.length; i++) {
      if (obj[e[i].value]) {
        message.warning("存在交集");
        return false;
      } else {
        obj[e[i].value] = e[i];
      }
    }
  }

  if (e) {
    e.map((item) => {
      if (gt) {
        for (let i = gt.length - 1; i >= 0; i--) {
          if (item.value > gt[i]) {
            message.warning("存在交集");
            return false;
          }
        }
      }
      if (lt) {
        for (let i = 0; i < lt.length; i++) {
          if (lt[i].value > item.value) {
            message.warning("存在交集");
            return false;
          }
        }
      }
    });
  }
  return true;
}

// 计算元件显示颜色
export function calcItemColor(conditionList: ICondition[], value: number) {
  if (conditionList?.length && value !== undefined) {
    const { gt, lt, e } = transConditions(conditionList);
    gt.sort((a, b) => a.value - b.value);
    lt.sort((a, b) => a.value - b.value);
    const min = Math.min(
      gt[0]?.value !== undefined ? gt[0]?.value : Infinity,
      Infinity
    );
    const max = Math.max(
      lt[lt.length - 1]?.value !== undefined
        ? lt[lt.length - 1]?.value
        : -Infinity,
      -Infinity
    );
    for (let i = e.length - 1; i >= 0; i--) {
      if (e[i].value === value) {
        return e[i].color;
      }
    }
    if (value > min) {
      for (let i = gt.length - 1; i >= 0; i--) {
        if (gt[i].value < value) {
          return gt[i].color;
        }
      }
    }

    if (value < max) {
      for (let i = 0; i < lt.length; i++) {
        if (lt[i].value > value) {
          return lt[i].color;
        }
      }
    }
  }
  return null;
}

export const compareRationalOperation = (
  mqttVal: number,
  operation: number,
  compare: number
) => {
  // 大于
  if (operation === 1) {
    return mqttVal > compare;
  }
  if (operation === 2) {
    return mqttVal < compare;
  }
  if (operation === 3) {
    return mqttVal === compare;
  }
  if (operation === 4) {
    return mqttVal >= compare;
  }
  if (operation === 5) {
    return mqttVal <= compare;
  }
  if (operation === 6) {
    return mqttVal !== compare;
  }
};

export const compareTimeRange = (timezone, timeRange) => {
  const date = moment();
  const tmpRange = [];
  if (timeRange?.length < 2 && !timeRange[0] && !timeRange[1]) {
    return false;
  }
  const tmp0 = moment(timeRange[0]);
  const tmp1 = moment(timeRange[1]);
  tmpRange[0] = moment(date)
    .hour(tmp0.get("hour"))
    .minute(tmp0.get("minute"))
    .second(tmp0.get("second"));

  tmpRange[1] = moment(date)
    .hour(tmp1.get("hour"))
    .minute(tmp1.get("minute"))
    .second(tmp1.get("second"));

  const current = moment(
    moment()
      // .utcOffset(timezone * 60)
      .format("yyyy-MM-DD HH:mm:ss")
  );

  if (current.isBetween(tmpRange[0], tmpRange[1])) {
    return true;
  }
  return false;
};

export const handleEvents = (
  graph,
  event,
  appearance,
  nodeId: string,
  d?: any
) => {
  const result = event?.result;
  const conditions = event.conditionList;
  // 最终的条件是否满足
  let conditionFlag = false;

  for (let index = 0; index < conditions?.length; index++) {
    let res = false;
    if (conditions[index].conditionType === "rationalOperation") {
      if (
        d &&
        !Object.prototype.hasOwnProperty.call(
          d,
          conditions[index]?.measureTagCode
        )
      )
        return;
      if (d) {
        res = compareRationalOperation(
          d[conditions[index].measureTagCode],
          conditions[index].judgeLogic,
          conditions[index].attributeValue
        );
      } else {
        return;
      }
    } else {
      res = compareTimeRange(
        conditions[index].timezone,
        conditions[index].timeRange
      );
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
  const targetNode: Node = graph.getCellById(nodeId);
  if (conditionFlag) {
    // 连线的处理
    if (targetNode?.isEdge()) {
      setEdgeStyles(targetNode as any, result?.connectColor);
      if (result?.enableFlow) {
        setEdgeAnim(targetNode as any, result?.isReversed);
      }
    }
    // 车位的结果处理
    if (targetNode?.data?.key === "parking") {
      if (result?.isEmpty === 0) {
        targetNode.setAttrs({ ...parkingConstructure().attrs });
        targetNode.setMarkup([...parkingConstructure().markup]);
        targetNode.setSize({ width: 40, height: 40 });
        targetNode.setData({ isEmpty: 0 });
        setSocText(targetNode, "p");
      }
      if (result?.isEmpty === 1) {
        targetNode.setAttrs({ ...vehicleConstructure().attrs });
        targetNode.setMarkup([...vehicleConstructure().markup]);
        targetNode.setSize({ width: 40, height: 40 });
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
  }
  // else {
  //   // 连线的处理
  //   if (targetNode?.isEdge()) {
  //     setEdgeStyles(targetNode, appearance?.connectColor);
  //     removeEdgeAnim(targetNode);
  //   }
  //   // 车位的结果处理
  //   if (targetNode?.data?.key === "parking") {
  //     if (appearance?.isEmpty === 0) {
  //       targetNode.setAttrs({ ...parkingConstructure().attrs });
  //       targetNode.setMarkup(...[parkingConstructure().markup]);
  //       targetNode.setSize({ width: 40, height: 40 });
  //       targetNode.setData({ isEmpty: 0 });
  //       setSocText(targetNode, "p");
  //     }
  //     if (appearance?.isEmpty === 1) {
  //       targetNode.setAttrs({ ...vehicleConstructure().attrs });
  //       targetNode.setMarkup(...[vehicleConstructure().markup]);
  //       targetNode.setSize({ width: 40, height: 40 });
  //       targetNode.setData({ isEmpty: 1 });
  //       setSocText(targetNode, undefined);
  //     }
  //   }
  //   if (targetNode?.shape === "placeholder") {
  //     setPlaceholderText(
  //       graph,
  //       targetNode?.id,
  //       undefined,
  //       appearance?.textColor,
  //       appearance?.fontSize
  //     );
  //   } else {
  //     setNodeDisplayColor(
  //       targetNode,
  //       appearance?.textColor || appearance?.strokeColor,
  //       appearance?.fillColor
  //     );
  //   }
  // }
};
