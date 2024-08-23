import { Model, Graph } from "@antv/x6";

export interface IWiringDiagramBase {
  // 画布数据
  graphData: ICellsJson;

  // 物编码（sn）数组
  codeList: ICodeList[];

  // 初始化画布回调
  onInitCallback?: (e: Graph) => void;
  // loading
  loading?: boolean;
  currentProject?: IGridList;
  actionRef?: React.MutableRefObject<any>;
  wiringId: string;
  subGraphData?: any;
  setSubGraphData?: (data: any) => void;
  subName?: {
    subGraphName?: string;
    setSubGraphName?: (v: string) => void;
  };
  relatedSubListRef?: React.MutableRefObject<string[]>;
  hotZoneList?: any[];
}

// 当 needSetting 为 true 时的接口
interface IWiringDiagramWithSetting extends IWiringDiagramBase {
  needSetting: true;
  isSettingState?: boolean;
}

// 当 needSetting 为 false 或未定义时的接口
interface IWiringDiagramWithoutSetting extends IWiringDiagramBase {
  needSetting?: false;
  isSettingState?: never; // 使用 never 类型，表示该属性不应存在
}

// 将两种情况合并为一个类型
export type IWiringDiagram =
  | IWiringDiagramWithSetting
  | IWiringDiagramWithoutSetting;

/**
 * 物编码（sn）数组
 */
export interface ICodeList {
  /**
   * 所属项目物id
   */
  belongProjectId: number;
  /**
   * 设备sn
   */
  code: string;
  /**
   * 设备关联节点id
   */
  nodeId: number;
  key: string;
}
/**
 * 获取接线图数据
 */
export interface GraphData {
  /**
   * 接线图类型接线图类型(微网主接线图-microgrid,储能-storage,光伏-photovoltaic,充电-charge)
   */
  category: string;
  /**
   * 接线图json
   */
  cellsJson: string;
  /**
   * 物编码（sn）数组
   */
  codeList: ICodeList[];
  /**
   * 主键id
   */
  id: string;
  /**
   * 项目物id
   */
  thingProjectId: number;
}

export interface ICellsJson {
  diagram: Model.FromJSONData | any;
  graphOptions: IGraphOptions;
}

export interface IGraphOptions {
  initBgColor: string;
  initGridColor: string;
  bgColor: string;
  gridColor: string;
  showGrid: boolean;
}

export interface INodeItem {
  nodeId: string;
  extData: INodeItemExtInfo;
}
export interface INodeItemExtInfo {
  appearance;
  events: any[];
}

export interface IInfoEntry {
  code: string;
  createTime: string;
  creator: string;
  id: string;
  name: string;
  updateTimer: string;
  updater: string;
  measureTagCode: string;
  unitCode: string;
}

export interface IDetailsInfo {
  displayName: string;
  entry: string;
  measureTagCode: string;
  unitCode: string;
  value?: number;
}
// export interface IDisplayDataItem {
//   label: string;
//   value: number;
//   unit: string;
// }

export interface IDeviceInfo {
  code: string;
  id: string;
  name: string;
  templateCode: string;
  templateType: string;
}

export interface IItemListItem {
  key: string;
  icon: string | SVGElement;
  name: string;
}

/**
 * 按照条件查询项目物（综合能源,场站,分布式光伏电站）
 */
export interface IGridList {
  /**
   *
   */
  attributeValues: any[];
  /**
   *
   */
  code: string;
  /**
   *
   */
  extraInfoList: any[];
  /**
   *
   */
  id: string;
  /**
   *
   */
  mobileFlag: boolean;
  /**
   *
   */
  msgType: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  nodeIdList: any[];
  /**
   *
   */
  parentCode: string;
  /**
   *
   */
  parentId: number;
  /**
   *
   */
  parentName: string;
  /**
   *
   */
  priceTemplateCategoryId: number;
  /**
   *
   */
  projectId: number;
  /**
   *
   */
  shared: boolean;
  /**
   *
   */
  templateCategory: number;
  /**
   *
   */
  templateCode: string;
  /**
   *
   */
  templateName: string;
  /**
   *
   */
  templateType: string;
  /**
   *
   */
  tenantId: number;
  /**
   *
   */
  thingTemplateInfo: any;
  category?: string;
}

export enum DiagramPermissionEnum {
  DIAGRAM_EDIT = "diagram_edit",
  DIAGRAM_VIEW = "diagram_view",
  SUB_DIAGRAM_EDIT = "sub_diagram_edit",
  SUB_DIAGRAM_VIEW = "sub_diagram_view",
  SUB_DIAGRAM_ADD = "sub_diagram_add",
  SUB_DIAGRAM_DELETE = "sub_diagram_delete",
}

export interface IWiringDiagramRes {
  category: string;
  cellsJson: string;
  codeList: any[];
  hotRelInfoList: any[];
  name: string;
  thingProjectId: string;
  wiringId: string;
}
