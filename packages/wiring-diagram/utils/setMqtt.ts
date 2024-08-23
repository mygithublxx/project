import { ICodeList } from "../dto";
import daTopic from "../const/mqttTopic";
import { handleMqttMessage } from "./node-utils";

// 计算组的总有功功率
export const calcTotalPower = (nodeId: string, graph, tpgMap) => {
  // 找出是什么类型
  const k = graph.getCellById(nodeId)?.data?.key;
  let total = undefined;
  if (k && tpgMap[k]) {
    tpgMap[k].map((t) => {
      if (t?.lastPkg?.p !== undefined) {
        if (total === undefined) total = 0;
        total += Number(t.lastPkg.p) / 1000;
      }
    });
  }
  return total;
};

// 正式发布使用在业务组件中的，此处用来本地调试
export const setMqtt = (
  { subscribe, onMessage },
  fetchCodeList: ICodeList[],
  graph
  // callback
) => {
  const topics = [];
  fetchCodeList.forEach((item) => {
    if (item.nodeId) {
      topics.push(
        daTopic.meterTopic + item.belongProjectId + "/" + item.nodeId
      );
    }
  });
  const unsubscribeTopics = subscribe(topics);

  onMessage(topics, (buffer) => {
    const d = JSON.parse(buffer.toString());
    handleMqttMessage(graph, d, fetchCodeList);
    // callback(d);
  });
  return unsubscribeTopics;
};
