export interface MetaItem {
  /**
   * 电器元件的id
   */
  id: string;
  /**
   * 本地生成的唯一标识
   */
  uuid: string;
  /**
   * 尺寸信息
   */
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PrimaryWiringDiagramProps {
  /**
   * 保存接线数据
   */
  onSave?(e: MetaItem[]): void;

  /**
   * 编辑单个接线元素
   */
  onEdit?(e: MetaItem): void;

  /**
   * 编辑元素
   */
  Edit?: React.ComponentType;

  /**
   * 添加新的元素
   * 返回promise
   * true可以添加
   * false取消添加
   */
  onAdd?(): Promise<boolean>;

  // style?: React.CSSProperties;
  // className?: string;
  width: number;
  height: number;
  /**
   * 初始化数据
   */
  initData: MetaItem[];
}
