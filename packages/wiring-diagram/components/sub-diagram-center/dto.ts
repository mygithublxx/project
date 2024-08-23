/**
 * 数据集合
 */
export interface SubListItem {
  /**
   * 快照key
   */
  fileData: string;
  /**
   * 接线图名称
   */
  name: string;
  /**
   * 接线图id
   */
  wiringId: number;
  /**
   * 是否被关联(true-已关联，false-未关联)
   */
  hasRelated: boolean;
  /**
   * 背景色，为了自适应画布背景
   */
  backgroundColor?: string;
}
/**
 * 获取分图列表-响应参数
 */
export interface SubListRes
  extends Pick<IResDataList<SubListItem>, "dataList"> {}
