export const topicRegexp = /^\/(.+?)\/[A-Za-z0-9]+\/([A-Za-z0-9]+)$/;
export const INITIAL_STATE = {
  topics: {},
  alarmData: [],
  eventData: {},
  meterData: {},
};

// 拆分订阅话题
export const messageTopic = (topic: string) => {
  const reg = topicRegexp.exec(topic);
  if (reg) {
    return [reg[1], reg[2]];
  }
  return null;
};
