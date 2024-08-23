export interface ICondition {
  condition: number;
  value: number;
  color: string;
}

// 元件配置的数据结构
export interface IItemCofig {
  itemSn: string;
  defaultColor: string;
  infoEntry: string;
  measureTagCode: string;
  displayName?: string;
  value?: string;
  displayColor?: string;
  conditionList?: ICondition[];
  unitCode?: string;
}

// 已绘制的元件的数据接口
export interface IGridItem {
  preSvgIndex: number; //svg编号
  name: string; //对应名称
  uuid: string; // 唯一标识
  left: number; // 距离画板左侧距离
  top: number; // 距离画板上方距离
  len?: number; //直线的长度
  configInfo?: IItemCofig; // 元件的配置信息
  content?: string; // 文本框的内容
}

export interface ICodeNode {
  code: string;
  nodeId: string;
}
